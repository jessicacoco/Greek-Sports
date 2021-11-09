import React from 'react';
import { Table, Tag } from 'antd';
import './ResultsTable.css';

const data = [
    {
      key: '1',
      name: 'ACHA Hockey',
      type: 'Sport',
      number: 15,
      percent: 33,
    },
    {
      key: '2',
      name: 'Outdoors Club',
      type: 'Club',
      number: 13,
      percent: 12,
    },
    {
      key: '3',
      name: 'Women\'s Soccer',
      type: 'Sport',
      number: 32,
      percent: 80,
    },
    {
      key: '4',
      name: 'Men\'s Lacrosse',
      type: 'Sport',
      number: 32,
      percent: 14,
    },
  ];

function ResultsTable({results, name}) {
    const columns = [{
          title: 'Name',
          dataIndex: 'name',
          sorter: (a, b) => a.name.length - b.name.length,
        },
        {
          title: 'Type',
          dataIndex: 'type',
          render: tag =>
            <Tag color={tag === 'Club' ? 'geekblue' : 'volcano'} key={tag}>
                {tag.toUpperCase()}
            </Tag>,
          filters: [
            {
              text: 'Sport',
              value: 'Sport',
            },
            {
              text: 'Club',
              value: 'Club',
            },
          ],
          onFilter: (value, record) => record.type.indexOf(value) === 0,
        },
        {
          title: 'Number of Members',
          dataIndex: 'number',
          sorter: (a, b) => a.number - b.number,
        },
        {
          title: 'Percentage of Members',
          dataIndex: 'percent',
          render: percent => percent+"%",
          sorter: (a, b) => a.percent - b.percent,
        },
      ];
      
    return (
        <>
            <h3>{name}</h3>
            <Table columns={columns} dataSource={data} pagination={false}/>
        </>
    );
}

export default ResultsTable;