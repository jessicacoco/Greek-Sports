import React from 'react';

function readCSV(funcName) {
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

export default readCSV;