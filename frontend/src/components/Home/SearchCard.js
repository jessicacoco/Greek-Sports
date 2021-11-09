import React, { useState } from 'react';
import './SearchCard.css';
import { Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;


function SearchCard({ setSearchResults, setSearchName, type }) {
    const [value, setValue] = useState('');

    // make the DB call return it alpha sorted so I don't have to do that
    var options = (type === "greek") ? ['Alpha Phi','Pi Beta Phi','Alpha Gamma Delta'] 
    : (type === "sports") ? ['Women\'s Varsity Soccer','Crew','Club Hockey']
    : ['SWE','Sole Survivors','Outdoors Club'];

    function onChange(val) {
        setValue(val);
        console.log('selected:', value);
    };

    function onSearch() {
        // call search DB request here using value
        // put request results in and redirect
        //window.location.href = "http://stackoverflow.com";
        setSearchName(value);
        setValue('');
        console.log('search:', value);
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