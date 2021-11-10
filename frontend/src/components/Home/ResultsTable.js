import React from 'react';
import { Table, Tag } from 'antd';
import './ResultsTable.css';

function ResultsTable({ results, name }) {
  const types = new Set(results.map(result => result.type));
  let filters = [];
  // Only show applicable filters
  if (types.has('Club') || types.has('Sport')) {
    filters = [
      {
        text: 'Sport',
        value: 'Sport',
      },
      {
        text: 'Club',
        value: 'Club',
      },
    ];
  } else {
    filters = [
      {
        text: 'Fraternity',
        value: 'Fraternity',
      },
      {
        text: 'Sorority',
        value: 'Sorority',
      }
    ];
  }
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    render: tag =>
      <Tag color={tag === 'Club' || tag === 'Fraternity' ? 'geekblue' : 'volcano'} key={tag}>
        {tag.toUpperCase()}
      </Tag>,
    filters: filters,
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
    render: percent => percent + "%",
    sorter: (a, b) => a.percent - b.percent,
  },
  ];

  return (
    <>
      <h3>{name}</h3>
      <Table columns={columns} dataSource={results} pagination={false} />
    </>
  );
}

export default ResultsTable;