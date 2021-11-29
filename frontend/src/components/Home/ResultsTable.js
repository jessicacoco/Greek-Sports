import React from 'react';

import { Table, Tag } from 'antd';

import './ResultsTable.css';

/* Creates Results table for Home page after search is conducted or 
for Results page if organization link or More Info button is clicked. */
function ResultsTable({ results, name }) {
  const types = new Set(results.map(result => result.type));
  let filters = [];
  /* Only show applicable filters: if the user searched by Fraternity/Sorority,
  they should be able to filer by Club or Sport. If they searched by Club or Sport, 
  they should be able to filter by Fraternity or Sorority. */
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

  // Sets columns for Results table.
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    showSorterTooltip: false,
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
    sorter: (a, b) => b.number - a.number,
    showSorterTooltip: false,
  },
  {
    title: 'Percentage of Members',
    dataIndex: 'percent',
    render: percent => percent + "%",
    sorter: (a, b) => b.percent - a.percent,
    showSorterTooltip: false,
  },
  ];

  return (
    <>
      <div class="main">
        <h3>{name}</h3>
        <Table columns={columns} dataSource={results} pagination={false} />
      </div>
    </>
  );
}

export default ResultsTable;