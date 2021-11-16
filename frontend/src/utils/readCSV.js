
/**
 * Normalizes CSV data into an array
 * @param {string} csvText The text from a csv file
 * @param {boolean} skipHeader Whether or not to skip the header
 * @returns The csv as an array
 */
export function cleanData(csvText, skipHeader) {
  const csvData = [];
  const jsonObject = csvText.split(/\r?\n|\r/);
  for (let i = skipHeader ? 1 : 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(','));
  }
  return csvData;
};

// fyi, CSV file has been changed to look like this: (it makes it easier to output to a readable file)
// "",C Crew,S Dance Team,C Racquetball,C Ballroom Dance,C Tae Kwon Do,S Rugby, S Water Polo,C Rudras,C Dance Club,C Dance Dance Revolution,C Fencing,C Karate,C Boxing,C Fishing,S Womens Soccer,C Judo,S Ski Team,C Outing Club,C Meitokukan Kendo Dojo,C Badminton,C Juggling Unicycling,S Wrestling,C Ski Snowboard Club,C Club Volleyball,S Womens Basketball,C Rifle,TOTAL, LOGO
export function readCSV() {
  // read sorority CSV
  const request = new XMLHttpRequest();
  request.open("GET", "./sororities.csv", false);
  request.send(null);

  const sororityData = cleanData(request.responseText, false);
  request.open("GET", "./fraternities.csv", false);
  request.send(null);

  const fraternityData = cleanData(request.responseText, true);

  const data = sororityData.concat(fraternityData);

  return data;
}

/**
 * Given the read in sorority/fraternity data, returns their names sorted
 * @param csvData The data read in from the CSV 
 * @returns A sorted list of sorority and fraternity names
 */
export function allFSQuery(csvData) {
  var arr = [];
  for (let i = 1; i < csvData.length; i++) {
    arr.push(csvData[i][0]);
  }
  arr.sort();
  return arr;
}

/**
 * Returns name and logo of sorority/fraternity
 * @param csvData The data read in from the CSV
 * @returns A sorted array of name and logo sorted by name
 */
export function allFSExploreQuery(csvData) {
  var arr = [];
  for (let i = 1; i < csvData.length; i++) {
    let name = csvData[i][0];
    let logo = csvData[i][csvData[i].length - 1];
    arr.push([name, logo]);
  }
  arr.sort(function (x, y) {
    if (x[0] < y[0]) {
      return -1;
    }
    if (x[0] > y[0]) {
      return 1;
    }
    return 0;
  });
  return arr;
}

/**
 * Given CSV data about sorority and fraternities returns a list of clubs or sports
 * @param csvData The sorority/fraternity CSV data 
 * @param sports Whether or not to search for clubs, if false searches for clubs
 * @returns All the clubs or sports sorted
 */
export function activityQuery(csvData, sports) {
  var clubsAndSports = csvData[0];
  var arr = [];
  for (let i = 0; i < clubsAndSports.length; i++) {

    if (sports ? clubsAndSports[i][0] === 'S' : clubsAndSports[i][0] === 'C') {
      // ex. C Ballroom Dance
      let word = clubsAndSports[i];
      // word = C Ballroom Dance
      arr.push(word.substring(2));
      // pushed Ballroom Dance
    }
  }
  arr.sort();
  return arr;
}

/**
 * Computes activity stats for a specific sorority / fraternity
 * @param {*} csvData The sorority/fraternity CSV data 
 * @param {string} input The name of the sorority / fraternity
 * @param {boolean} filterZero Whether or not to filter activities with 0 participants out
 * @returns An array in the form [activity, type of activity, number of members, percent of members]
 */
export function FSQuery(csvData, input, filterZero) {
  // input = "Alpha Gamma Delta"
  const arr = [];
  for (let i = 0; i < csvData.length; i++) {
    if (csvData[i][0] === input) {
      // name, type, number of members, % of members
      // not including initial "" or initial name
      for (let j = 1; j < csvData[0].length - 2; j++) {
        let name = csvData[0][j];
        const type = name && name[0] === 'S' ? 'Sport' : 'Club';
        name = name.trim().substring(2);
        const num = parseInt(csvData[i][j]);
        if (filterZero && num === 0) {
          continue;
        }
        const perc = (num / csvData[i][csvData[i].length - 2]) * 100;
        arr.push([name, type, num, perc]);
      }
      return arr;
    }
  }
  return arr;
}

/**
 * Given a sorority/fraternity name returns the top 3 activities
 * @param {*} csvData The CSV data representing the sorority and fraternities
 * @param {string} input The sorority / fraternity name
 * @param {boolean} filterZero Whether or not to filter out events with 0 members
 * @returns The top 3 activities for the given input
 */
export function FSQueryTopThree(csvData, input, filterZero) {
  // input = "Alpha Gamma Delta"
  const allActivities = FSQuery(csvData, input, filterZero);
  // Sorts activities by number of members
  allActivities.sort((a, b) => b[2] - a[2]);

  // Returns the top 3 activities
  return allActivities.slice(0, 3);
}

/**
 * Given an activity name returns a list of sororirty and fraternities
 * @param {*} csvData The sorority / fraternity data
 * @param {string} input An activity name
 * @param {boolean} filterZero whether or not to filter out zeroes
 * @returns A list of all sorority and fraternities for that activity
 */
export function ClubAndSportQuery(csvData, input, filterZero) {
  // input = "Ballroom Dance" or "Womens Soccer"
  var arr = [];
  // end = the last index of the sororities
  var end = 7;
  for (let i = 0; i < csvData[0].length; i++) {
    if (csvData[0][i].substring(2) === input) {
      // name, type, number of members, % of members
      // not including initial "" or initial name
      for (let j = 1; j < csvData.length; j++) {
        let name = csvData[j][0];
        var type = '';
        if (j < end) {
          type = 'Sorority';
        }
        else {
          type = 'Fraternity';
        }
        let num = parseInt(csvData[j][i]);
        if (num === 0 && filterZero) {
          continue;
        }
        let perc = (num / csvData[j][csvData[0].length - 2]) * 100;
        arr.push([name, type, num, perc]);
      }
      return arr;
    }
  }
  return arr;
}

/**
 * Normalize returned query data to be in the expected form for ResultsTable.js
 * @param {string[][]} data 2d array of data. From the above query results
 * @returns A list of objects which can be read in and parsed by the table
 */
export function normalizeTableData(data) {
  if (data.length === 0 || data[0].length !== 4) {
    console.warn("Invalid data passed to normalizeTableData");
    return [];
  }

  return data.map((row, index) => {
    return {
      key: (index + 1).toString(),
      name: row[0],
      type: row[1],
      number: row[2],
      percent: Math.floor(row[3])
    }
  });
}