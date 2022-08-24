import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';

import { agGridAdapter } from '@/agGridAdapter';

import { DateInput } from '../../../DateInput';

export const DateInputExample = () => {
  const gridStyle = { height: '300px', width: '100%' };
  const [rowData, setRowData] = useState();
  const columnDefs = [
    { field: 'athlete' },
    { field: 'age', filter: 'agNumberColumnFilter' },
    { field: 'country' },
    { field: 'year' },
    {
      field: 'date',
      minWidth: 190,
      filter: 'agDateColumnFilter',
    },
    { field: 'sport' },
    { field: 'gold', filter: 'agNumberColumnFilter' },
    { field: 'silver', filter: 'agNumberColumnFilter' },
    { field: 'bronze', filter: 'agNumberColumnFilter' },
    { field: 'total', filter: false },
  ];

  const defaultColDef = {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    floatingFilter: true,
    resizable: true,
  };

  const styleOptions = agGridAdapter();

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data);
      });
  }, []);

  return (
    <div style={gridStyle} className="ag-theme-alpine">
      <AgGridReact
        {...styleOptions}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        components={{
          agDateInput: DateInput,
        }}
      />
    </div>
  );
};
