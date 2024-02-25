const mongoose = require('mongoose');
const { google } = require('googleapis');
const { v4: uuidv4 } = require('uuid');
const base64Credentials = process.argv[2];
const Mongo=process.argv[3];
const Mongo_url = `mongodb+srv://shlokmishr08:${Mongo}@cluster0.evqge0k.mongodb.net/?retryWrites=true&w=majority`;
const credentials = JSON.parse(Buffer.from(base64Credentials, 'base64').toString('utf-8'));

const { Schema } = mongoose;

const locationInfoSchema = new Schema({
  locationId: {
      type: String,
      unique: true,
      required: true,
  },
  locationName: {
      type: String,
      required: true,
  },
});

const LocationInfo = mongoose.models.LocationInfo || mongoose.model("LocationInfo", locationInfoSchema);


const studentSchema = new Schema({
  studentId: {
      type: String,
      required: true,
      unique: true,
  },
  name: String,
  age: Number,
  level:Number,
  Image:String,
 
});


function filterStudentsByName(locationData, nameToFilter) {
  return locationData.students.filter(student => student.name === nameToFilter);
}
const locationSchema = new Schema({
  locationId: {
      type: String,
      required: true,
      unique: true,
  },
  name: {
      type: String,
      unique: true,
      required: true,
  },
  students: [studentSchema],
});
const Location = mongoose.models.Location || mongoose.model("Location", locationSchema);

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(Mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Mongoose Connection successfully established.")
  } catch (error) {
    throw new Error("Error connecting to Mongoose")
  }
};


const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

const getLocationId = async (locationName) => {
  await connect();
  locationId=0
  try {
    const location = await LocationInfo.findOne({ locationName });
    if (location) {
      const locationId = location.locationId;
      return { status: 200, body: JSON.stringify({ locationId }) };
    } else {
      return { status: 301, body: JSON.stringify({ locationId }) };
    }
  } catch (err) {
    return { status: 500, body: "Error finding location" };
  }
};
const addStudent=async(currentlocationId,locationName,StudentName,StudentAge,StudentLevel)=>{
  await connect();
  
  const studentId = uuidv4();
  try {
      let location = await Location.findOne({ name: locationName });

      if (!location||currentlocationId===0) {
          const locationId = uuidv4();
          
          location = new Location({
              locationId:locationId,
              name: locationName,
              students: [{ studentId, name: StudentName, age: StudentAge,level:StudentLevel }],
          });

          const locationInfo = new LocationInfo({
              locationId: location.locationId,
              locationName: location.name,
          });
          await locationInfo.save();
      } else {
          location.locationId=location.locationId
          location.students.push({ studentId, name: StudentName, age: StudentAge,level:StudentLevel });
      }
      await location.save();
      
      
      return { status: 200, body: "Student added successfully" };
    } catch (err) {
      return { status: 500, body: {err}};
    }
}
const editStudent=async(locationId, studentId, newName, newAge,level)=>{
  let location = await Location.findOne({ locationId: locationId });

  if (!location) {
      return { status: 404, body: "Error finding the location" };
  }

  const studentIndex = location.students.findIndex((student) => String(student.studentId) === studentId);

  if (studentIndex === -1) {
    return { status: 404, body: "Student location not found" };
  }

  location.students[studentIndex].name = newName;
  location.students[studentIndex].age = newAge;
  location.students[studentIndex].level = level;



  try {
      await location.save();
      return { status: 200, body: "Student updated successfully" };
  } catch (err) {
    return { status: 500, body: {err}};
  }
}

const addStudentbyname = async (locationId, locationName, StudentName, StudentAge, StudentLevel) => {
    await connect();
    try {
        if (locationId===0){
                addStudent(locationId,locationName,StudentName,StudentAge,StudentLevel)
                return { status: 200, body: "Data added" };
              }
      const locationInfo = await Location.findOne({ locationId });
        const filteredStudents = filterStudentsByName(locationInfo, StudentName);
        if (filteredStudents.length === 0) {
          addStudent(locationId,locationInfo.name,StudentName,StudentAge,StudentLevel)
          return { status: 200, body: "Data added" };
        } else {
          const student = filteredStudents[0]; 
          editStudent(locationInfo.locationId,student.studentId,StudentName,StudentAge,StudentLevel)
          return { status: 200, body: "Data edited" };
        }
      
    } catch (err) {
    
      return { status: 200, body: {err} };
    }
  
};


async function getSheetValues() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1Dv7-CBdsu-wDpzF3EH5GH3spBXdKo7K_TKqIqRylkiQ',
      range: 'Sheet1!A2:D',
    });
    const values = response.data.values;
    console.log(values);
    await connect();
    if (!values) {
      console.log('No data found.');
      return [];
    } else {
      const Details = values.map((row) => {
        const [name, age, level, locationName] = row;
        return { name, age, level, locationName };
      });
      for (const detail of Details) {
        const response = await getLocationId(detail.locationName);
        const bodyObj = JSON.parse(response.body);
        const locationId = bodyObj.locationId;
        
        const res = await addStudentbyname(
          locationId,
          detail.locationName,
          detail.name,
          detail.age,
          detail.level
        );
        console.log(res.status)
      };
    }
  } catch (err) {
    console.error('The API returned an error:', err);
    return [];
  }
}

getSheetValues();

