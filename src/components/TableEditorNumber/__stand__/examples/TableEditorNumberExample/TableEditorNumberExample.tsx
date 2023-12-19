import { IconSettings } from '@consta/icons/IconSettings';
import { GridOptions } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';

import { agGridAdapter } from '##/adapters/agGridAdapter';
import { TableEditorNumber } from '##/components/TableEditorNumber';

const options: GridOptions = {
  rowData: [
    { name: 'Bob', mood: 'Happy', number: 10 },
    { name: 'Harry', mood: 'Sad', number: 3 },
    { name: 'Sally', mood: 'Happy', number: 20 },
    { name: 'Mary', mood: 'Sad', number: 5 },
    { name: 'John', mood: 'Happy', number: 15 },
    { name: 'Jack', mood: 'Happy', number: 25 },
    { name: 'Sue', mood: 'Sad', number: 43 },
    { name: 'Sean', mood: 'Sad', number: 1335 },
    { name: 'Niall', mood: 'Happy', number: 2 },
    { name: 'Alberto', mood: 'Happy', number: 123 },
    { name: 'Fred', mood: 'Sad', number: 532 },
    { name: 'Jenny', mood: 'Happy', number: 34 },
    { name: 'Larry', mood: 'Happy', number: 13 },
  ],
  columnDefs: [
    {
      headerName: 'Doubling',
      field: 'number',
      cellEditor: TableEditorNumber,
      cellEditorPopup: true,
      editable: true,
      width: 300,
    },
    {
      field: 'mood',
      width: 300,
    },
    {
      headerName: 'Numeric',
      field: 'number',
      cellEditor: TableEditorNumber,
      editable: true,
      width: 280,
    },
  ],
  defaultColDef: {
    cellEditorParams: {
      leftSide: IconSettings,
    },
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  },
};

export const TableEditorNumberExample = () => {
  const styleOptions = agGridAdapter();

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <AgGridReact {...styleOptions} {...options} />
    </div>
  );
};
