import { activityQuery, allFSQuery, normalizeTableData, FSQuery, ClubAndSportQuery } from '../../utils/readCSV';
import { mockReadCSV } from "./mockReadCSV";

describe('All FS Query Tests', () => {
    test('Empty Array', () => {
        const csvData = [];
        const query = allFSQuery(csvData);
        expect(query.length).toBe(0);
    });
    test('Invalid Array', () => {
        const csvData = ['Foo', 'Bar', 'Car'];
        const query = allFSQuery(csvData);
        // Since strings are just char arrays we see the first letter taken
        expect(query[0]).toBe('B');
        expect(query[1]).toBe('C');
        expect(query.length).toBe(2);
    });
    test('With Valid CSV  Data', () => {
        const csvData = [['Header'],['Alpha Gamma Delta'], ['Butts'], ['Tests']];
        const query = allFSQuery(csvData);
        expect(query.length).toBe(csvData.length -1);
        expect(query[0]).toBe('Alpha Gamma Delta');
    });
    test('With real data', () => {
        const csvData = mockReadCSV();
        const query = allFSQuery(csvData);
        expect(query.length).toBe(csvData.length - 1);
        const sortedQuery = query.sort();
        // Ensure that the elements are sorted already
        expect(query[0]).toBe(sortedQuery[0]);
    })
});