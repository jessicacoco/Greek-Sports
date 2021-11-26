import { activityQuery, allFSQuery, normalizeTableData, FSQuery, ClubAndSportQuery, FSQueryTopThree } from '../../utils/readCSV';
import { mockReadCSVNode } from "./mockReadCSV";

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
        const csvData = mockReadCSVNode();
        const query = allFSQuery(csvData);
        expect(query.length).toBe(csvData.length - 1);
        const sortedQuery = query.sort();
        // Ensure that the elements are sorted already
        expect(query[0]).toBe(sortedQuery[0]);
    })
});

describe('Activity Query Tests', () => {
    const csvData = mockReadCSVNode();
    test('Get all Sports', () => {
        const sportsres = activityQuery(csvData, true);
        expect(sportsres.length).toBe(6); // there should be 6 different sports
        // check that activity query listed all of the sports correctly
        expect(sportsres[0]).toBe('Dance Team');
        expect(sportsres[1]).toBe('Rugby');
        expect(sportsres[2]).toBe('Ski Team');
        expect(sportsres[3]).toBe('Womens Basketball');
        expect(sportsres[4]).toBe('Womens Soccer');
        expect(sportsres[5]).toBe('Wrestling');
    });
    test('Get all Clubs', () => {
        const clubres = activityQuery(csvData, false);
        expect(clubres.length).toBe(19); // there should be 19 different clubs
        // check that activity query listed all of the clubs correctly
        expect(clubres[0]).toBe('Badminton');
        expect(clubres[1]).toBe('BallroomDance');
        expect(clubres[2]).toBe('Boxing');
        expect(clubres[3]).toBe('Club Volleyball');
        expect(clubres[4]).toBe('Crew');
        expect(clubres[5]).toBe('Dance Club');
        expect(clubres[18]).toBe('Tae Kwon Do');
    });
});

describe('FSQuery Tests', () => {
    const csvData = mockReadCSVNode();
    test('FS Query for Pi Beta Phi', () => {
        const results = FSQuery(csvData, "Pi Beta Phi", true);
        // there should be 10 results for activities that have Pi Beta Phi members
        expect(results.length).toBe(10);
    });
    test('FS Query for Omega Phi Beta', () => {
        const results = FSQuery(csvData, "Omega Phi Beta", true);
        // there should be 10 results for activities that have Omega Phi Beta members
        expect(results.length).toBe(10);
    });
    test('FS Query for Delta Tau Delta', () => {
        const results = FSQuery(csvData, "Delta Tau Delta", true);
        // there should be 20 results for activities that have Delta Tau Delta members
        expect(results.length).toBe(20);
    });
});

describe('Club and Sport Query Tests', () => {
    const csvData = mockReadCSVNode();
    test('Club and Sport Query for Racquetball', () => {
        const results = ClubAndSportQuery(csvData, "Racquetball", true);
        // there should be 23 results for greek organizations that have members in Racuqetball club
        expect(results.length).toBe(23);
    });
    test('Club and Sport Query for Womens Soccer', () => {
        const results = ClubAndSportQuery(csvData, "Womens Soccer", true);
        // there should be 6 results for greek organizations that have members in Womens Soccer
        expect(results.length).toBe(6);
    });
    test('Club and Sport Query for Boxing', () => {
        const results = ClubAndSportQuery(csvData, "Boxing", true);
        // there should be 26 results for greek organizations that have members in Boxing
        expect(results.length).toBe(26);
    });
});


describe('FSQueryTopThree Tests', () => {
    const csvData = mockReadCSVNode();
    test('Top Three for AGD', () => {
        const topthree = FSQueryTopThree(csvData, "Alpha Gamma Delta", true);
        expect(topthree.length).toBe(3); // top three function should return ONLY 3 things
        // the top 3 for agd are womens soccer, womens basketball, and dance team
        expect(topthree[0][0]).toBe('Womens Soccer');
        expect(topthree[1][0]).toBe('Womens Basketball');
        expect(topthree[2][0]).toBe('Dance Team');
    });
    test('Top Three for Alpha Phi', () => {
        const topthree = FSQueryTopThree(csvData, "Alpha Phi", true);
        expect(topthree.length).toBe(3); // top three function should return ONLY 3 things
        // the top 3 for agd are dance club, womens soccer, and dance team
        expect(topthree[0][0]).toBe('Dance Club');
        expect(topthree[1][0]).toBe('Womens Soccer');
        expect(topthree[2][0]).toBe('Dance Team');
    });
    test('Top Three for Theta Xi', () => {
        const topthree = FSQueryTopThree(csvData, "Theta Xi", true);
        expect(topthree.length).toBe(3); // top three function should return ONLY 3 things
        // the top 3 for theta xi are water polo, wrestling, and judo
        expect(topthree[0][0]).toBe('Water Polo');
        expect(topthree[1][0]).toBe('Wrestling');
        expect(topthree[2][0]).toBe('Judo');
    })
    test('Top Three for Pi Delta Psi', () => {
        const topthree = FSQueryTopThree(csvData, "Pi Delta Psi", true);
        expect(topthree.length).toBe(3); // top three function should return ONLY 3 things
        // the top 3 of pi delta psi are wrestling, judo, and club volleyball
        expect(topthree[0][0]).toBe('Wrestling');
        expect(topthree[1][0]).toBe('Judo');
        expect(topthree[2][0]).toBe('Club Volleyball');
    })

});