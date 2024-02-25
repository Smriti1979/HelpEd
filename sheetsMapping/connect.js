const { google } = require('googleapis');
const SPREADSHEET_ID = process.argv[2];
const base64Credentials = process.argv[3];
const credentials = JSON.parse(Buffer.from(base64Credentials, 'base64').toString('utf-8'));
console.log(SPREADSHEET_ID , credentials)
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const getLocationId = async (locationName) => {
  

  const response = await fetch('http://localhost:3000/api/getLocationId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({locationName:locationName }),
  });

  if (response.ok) {
    const data = await response.json(); 
    return data.locationId
  } else if (response.status==301) {
    return 0
    
  }
};
const addStudentbyname = async (locationId, locationName,StudentName, StudentAge, StudentLevel) => {

const response = await fetch('http://localhost:3000/api/getStudentId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({locationId:locationId,locationName:locationName,StudentName: StudentName,StudentAge: StudentAge, StudentLevel:StudentLevel }),
  });

 return response
};

  
async function getSheetValues() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A2:D',
    });
    const values = response.data.values;
var i=0
    if (!values) {
      console.log('No data found.');
      return [];
    } else {
      const Details = values.map((row) => {
        const [ name, age, level,locationName] = row;
        return { name, age, level,locationName };
      });
      Details.forEach(async (detail) => {
        const locationId = await getLocationId(detail.locationName);
        const res = await addStudentbyname(locationId,detail.locationName,detail.name,detail.age,detail.level)
        if (res.status==200){
            console.log("success")
        }
      });   
    }
  } catch (err) {
    console.error('The API returned an error:', err);
    return [];
  }
}

 
getSheetValues();
