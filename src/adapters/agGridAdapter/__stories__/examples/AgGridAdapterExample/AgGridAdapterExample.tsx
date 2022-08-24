import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';

import { agGridAdapter } from '@/__private__/agGridAdapter/AgGridAdapter';

const columnDefs = [
  { field: 'athlete', filter: 'agTextColumnFilter', minWidth: 200 },
  { field: 'age' },
  { field: 'country', minWidth: 180 },
  { field: 'year' },
  { field: 'date', minWidth: 150 },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
];

const defaultColDef = {
  flex: 1,
  minWidth: 100,
  enableValue: true,
  enableRowGroup: true,
  enablePivot: true,
  sortable: true,
  resizable: true,
  filter: true,
};

export const AgGridAdapterExample = () => {
  const [rows, setRows] = useState();
  const styleOptions = agGridAdapter({
    size: 'm',
    borderBetweenColumns: true,
    borderBetweenRows: true,
    headerVerticalAlign: 'center',
    headerView: 'default',
    verticalAlign: 'center',
  });

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRows(data));
  }, []);

  return (
    <div style={{ width: 800, height: 400 }}>
      <AgGridReact
        {...styleOptions}
        rowData={rows}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};
