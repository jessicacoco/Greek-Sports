import React, { useState } from 'react';

import { Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { activityQuery, readCSV, allFSQuery, normalizeTableData, FSQuery, ClubAndSportQuery } from '../../utils/readCSV';

import './SearchCard.css';

const { Option } = Select;

// Creates Search bar on Home page.
function SearchCard({ setSearchResults, setSearchName, type }) {
    const [value, setValue] = useState('');

    // Reads the search options from the database (in this case the CSV file).
    const csvData = readCSV();
    let options = [];
    if (type === "greek") {
        options = allFSQuery(csvData);
    } else if (type === "sports") {
        options = activityQuery(csvData, true);
    } else {
        options = activityQuery(csvData, false);
    }

    /* Changes the state of value selected when a new value is selected
    in dropdown */
    function onChange(val) {
        setValue(val);
        console.log('selected:', value);
    };

    /* Changes the state of search value when search button is clicked.
    Calls search function on value selected by user. */
    function onSearch() {
        setSearchName(value);
        if (type === "greek") {
            setSearchResults(normalizeTableData(FSQuery(csvData, value, true)));
        } else {
            setSearchResults(normalizeTableData(ClubAndSportQuery(csvData, value, true)));
        }
        setValue('');
    };

    return (
        <>
        <div className="search-card">
            <Select
                value={value}
                showSearch
                style={{ width: 300 }}
                placeholder={(type === "greek") ? "Select a fraternity/sorority" 
                : (type === "sports") ? "Select a sport"
                : "Select a club"}
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {options.map((name) => (
                    <Option key={name} value={name}>
                        {name}
                    </Option>
                ))}
            </Select>
            <Button type="primary" icon={<SearchOutlined />} onClick={onSearch}>
                Search
            </Button>
        </div>
        </>
    )
};

export default SearchCard;