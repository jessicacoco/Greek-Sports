import React, { useState } from 'react';
import './SearchCard.css';
import { Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { activityQuery, readCSV, allFSQuery, normalizeTableData, FSQuery, ClubAndSportQuery } from '../../utils/readCSV';

const { Option } = Select;


function SearchCard({ setSearchResults, setSearchName, type }) {
    const [value, setValue] = useState('');

    // Reads the search options from the database (in this case the CSV file)
    const csvData = readCSV();
    let options = [];
    if (type === "greek") {
        options = allFSQuery(csvData);
    } else if (type === "sports") {
        options = activityQuery(csvData, true);
    } else {
        options = activityQuery(csvData, false);
    }

    function onChange(val) {
        setValue(val);
        console.log('selected:', value);
    };

    function onSearch() {
        // call search DB request here using value
        // put request results in and redirect
        //window.location.href = "http://stackoverflow.com";
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