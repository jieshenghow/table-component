import React from 'react';
import './App.css';
import TableComponent from "./TableComponent";
import {TableProps} from "./common.type";

const mockTableData: TableProps = {
  headers: ["Name", "Email", "Role", "Department"],
  rows: [
    ["John Doe", "john.doe@example.com", "Manager", 'IT'],
    ["Jane Doe", "jane.doe@example.com", "Assistant", "Finance"],
    ["Smith Doe", "smith.doe@example.com", "Engineer", 'IT'],
  ],
  onClick: (rowIndex, columnIndex) => {
    console.log(`Clicked cell at row: ${rowIndex + 1}, column: ${columnIndex + 1}`);
  },
  className: "my-table",
};

function App() {
  const {headers, rows, onClick, className} = mockTableData;

  return (
    <div>
      <h2>Regular Table</h2>
      <TableComponent className="primary-table" headers={headers} rows={rows} tableName={'contract details'}/>
      <h2>Sort table</h2>
      <TableComponent className="primary-table" headers={headers} rows={rows} sortable={true} initSortColumnIndex={2}
                      initSortAscending={false}/>
      <h2>Radio:</h2>
      <TableComponent className="primary-table" headers={headers} rows={rows} type="radio"/>

      <h2>Checkbox:</h2>
      <TableComponent className="primary-table" headers={headers} rows={rows} type="checkbox"/>
    </div>
  );
}

export default App;
