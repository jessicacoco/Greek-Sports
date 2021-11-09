import React from 'react';

function readCSV(funcName, input) {
    // read sorority CSV
    var request = new XMLHttpRequest();  
    request.open("GET", "./sororities.csv", false);   
    request.send(null);

    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(','));
    }

    console.log(csvData);

    return csvData;
}
// make sure you are skipping the first line when you read in fraternities
// change CSV file to look like this please: (it makes it easier to output to a readable file)
// "",C Crew,S Dance Team,C Racquetball,C Ballroom Dance,C Tae Kwon Do,S Rugby, S Water Polo,C Rudras,C Dance Club,C Dance Dance Revolution,C Fencing,C Karate,C Boxing,C Fishing,S Womens Soccer,C Judo,S Ski Team,C Outing Club,C Meitokukan Kendo Dojo,C Badminton,C Juggling Unicycling,S Wrestling,C Ski Snowboard Club,C Club Volleyball,S Womens Basketball,C Rifle,TOTAL, LOGO
export default readCSV;

function allFSQuery(csvData) {
  var arr = [];
  for (let i = 1; i < csvData.length; i++) {
      arr.push(csvData[i][0]);
  }
  arr.sort();
  return arr;
}

function allClubsQuery(csvData) {
  var clubsAndSports = csvData[0];
  var arr = [];
  for (let i = 0; i < clubsAndSports.length; i++) {
    if (clubsAndSports[i][0] == 'C') {
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

function allSportsQuery(csvData) {
  var clubsAndSports = csvData[0];
  var arr = [];
  for (let i = 0; i < clubsAndSports.length; i++) {
    if (clubsAndSports[i][0] == 'S') {
      // ex. S Womens Soccer
      let word = clubsAndSports[i];
      // word = S Womens Soccer
      arr.push(word.substring(2));
      // pushed Womens Soccer
    }
  }
  arr.sort();
  return arr;
}

function FSQuery(csvData, input) {
  // input = "Alpha Gamma Delta"
  var arr = [];
  for (let i = 0; i < csvData.length; i++) {
    if (csvData[i][0] == input) {
      // name, type, number of members, % of members
      // not including initial "" or initial name
      for (let j = 1; j < csvData.length-2; j++) {
        let name = csvData[0][j];
        let type = csvData[i][0][0];
        let num = csvData[i][j];
        let perc = (num / csvData[i][csvData[i].length-2]) * 100;
        arr.push([name, type, num, perc]);
      }
      return arr;
    }
  }
  return arr;
}

function FSQueryTopThree(csvData, input) {
  // input = "Alpha Gamma Delta"
  var arr = [];
  for (let i = 0; i < csvData.length; i++) {
    if (csvData[i][0] == input) {
      // name, type, number of members, % of members
      // not including initial "" or initial name
      for (let j = 1; j < csvData.length-2; j++) {
        let num = csvData[i][j];
        let name = csvData[0][j];
        let type = csvData[i][0][0];
        let perc = (num / csvData[i][csvData[i].length-2]) * 100;
        arr.push([name, type, num, perc]);
      }
      arr.sort(function(x, y) {
        if (x[2] < y[2]) {
          return -1;
        }
        if (x[2] > y[2]) {
          return 1;
        }
        return 0;
      });
      let result = arr.slice(0,3);
      return result;
    }
  }
  return arr;
}

function ClubAndSportQuery(csvData, input) {
  // input = "Ballroom Dance" or "Womens Soccer"
  var arr = [];
  // end = the last index of the sororities
  var end = 7;
  for (let i = 0; i < csvData[0].length; i++) {
    if (csvData[i][0].substring(2) == input) {
      // name, type, number of members, % of members
      // not including initial "" or initial name
      for (let j = 1; j < csvData.length; j++) {
        let name = csvData[j][0];
        var type = '';
        if (j < end) {
          type = 'S';
        }
        else {
          type = 'F';
        }
        let num = csvData[j][i];
        let perc = (num / csvData[j][csvData[0].length-2]) * 100;
        arr.push([name, type, num, perc]);
      }
      return arr;
    }
  }
  return arr;
}