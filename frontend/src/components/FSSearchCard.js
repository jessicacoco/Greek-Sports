import React, { useState } from 'react';
import './FSSearchCard.css';
import { Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;


function FSSearchCard() {
    const [value, setValue] = useState('');

    // make the DB call return it alpha sorted so I don't have to do that
    const options = ['Alpha Phi','Pi Beta Phi','Alpha Gamma Delta'];

    function onChange(value) {
        setValue(value);
        console.log(`selected ${value}`);
    };

    function onSearch(val) {
        console.log('search:', val);
    };

    return (
        <>
        <div className="search-card">
            <Select
                showSearch
                style={{ width: 300 }}
                placeholder="Select a fraternity/sorority"
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
            </Select>
            <Button type="primary">
                Search
            </Button>
        </div>
        </>
    )
};

export default FSSearchCard;