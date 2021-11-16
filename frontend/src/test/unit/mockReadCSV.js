const fs = require('fs');
import { cleanData } from '../../utils/readCSV';

/**
 * Reads in the sorority and fraternity CSV files using node FS apis
 * NOTE: DO NOT CALL THIS FROM FRONTEND TESTS
 * @returns The CSV files as an array
 */
export function mockReadCSVNode() {
    // Use the Node FS apis to read the CSV files since this is backend tests
    // we have the node environment available
    const fraternities = fs.readFileSync('./public/fraternities.csv').toString();
    const sorority = fs.readFileSync('./public/sororities.csv').toString();

    const sororityData = cleanData(sorority);
    const fraternityData = cleanData(fraternities, true);

    const data = sororityData.concat(fraternityData);
    return data;
}