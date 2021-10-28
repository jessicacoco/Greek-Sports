import React, { useState } from 'react';
import './SportSearchCard.css';
import { Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;


function SportSearchCard() {
    const [value, setValue] = useState('');

    // make the DB call return it alpha sorted so I don't have to do that
    const options = ['Women\'s Varsity Soccer','Crew','Club Hockey'];

    function onChange(value) {
        setValue(value);
        console.log(`selected ${value}`);
    };

    function onSearch(val) {
        // call search DB request here
        console.log('search:', val);
    };

    return (
        <>
        <div className="search-card">
            <Select
                showSearch
                style={{ width: 300 }}
                placeholder="Select a sport"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {options.map((name) => (
                    <Option key={name} value={name}>
                        {name}
                    </Option>
                ))}
            </Select><br/>
            <Button type="primary">
                Search
            </Button>
        </div>
        </>
    )
};

export default SportSearchCard;