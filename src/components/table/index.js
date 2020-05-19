import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
  dataField: 'name',
  text: 'Name',
  sort: true
}, {
  dataField: 'position',
  text: 'Position',
  sort: true,
}, {
  dataField: 'office',
  text: 'Office',
  sort:true
  },
  {
    dataField: 'age',
    text: 'Age',
    sort:true
  },
  {
    dataField: 'startdate',
    text: 'Start date',
    sort:true
  },
  {
    dataField: 'salary',
    text: 'Salary',
    sort:true
  }];

const tableData = [{
  name: 'Airi Satou',
  position: 'Accountant',
  office: 'Tokyo',
  age: '33',
  startdate: '2008/11/28',
  salary:'$162,700'
}]

export const CustomTable = () => {
	return (
    <BootstrapTable keyField='name' data={tableData } columns={ columns } />
	)
}