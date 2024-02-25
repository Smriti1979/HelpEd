const { google } = require('googleapis');
const fetch = require('node-fetch');

const base64Credentials = process.argv[2];
const credentials = JSON.parse(Buffer.from(base64Credentials, 'base64').toString('utf-8'));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Fetch the GitHub server URL
const githubServerUrl = process.env.GITHUB_SERVER_URL;

const getLocationId = async (locationName) => {
  const response = await fetch(`${githubServerUrl}/api/getLocationId`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ locationName }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.locationId;
  } else if (response.status === 301) {
    return 0;
  }
};

const addStudentbyname = async (locationId, locationName, StudentName, StudentAge, StudentLevel) => {
  const response = await fetch(`${githubServerUrl}/api/getStudentId`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      locationId,
      locationName,
      StudentName,
      StudentAge,
      StudentLevel,
    }),
  });

  return response;
};

async function getSheetValues() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1Dv7-CBdsu-wDpzF3EH5GH3spBXdKo7K_TKqIqRylkiQ',
      range: 'Sheet1!A2:D',
    });
    const values = response.data.values;
    console.log(values);
    if (!values) {
      console.log('No data found.');
      return [];
    } else {
      const Details = values.map((row) => {
        const [name, age, level, locationName] = row;
        return { name, age, level, locationName };
      });
      Details.forEach(async (detail) => {
        const locationId = await getLocationId(detail.locationName);
        const res = await addStudentbyname(
          locationId,
          detail.locationName,
          detail.name,
          detail.age,
          detail.level
        );
        if (res.status === 200) {
          console.log('success');
        }
      });
    }
  } catch (err) {
    console.error('The API returned an error:', err);
    return [];
  }
}

getSheetValues();
