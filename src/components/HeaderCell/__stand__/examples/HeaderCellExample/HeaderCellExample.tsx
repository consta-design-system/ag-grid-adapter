import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useMemo, useState } from 'react';

import { agGridAdapter } from '##/adapters/agGridAdapter';
import { HeaderCell } from '##/components/HeaderCell';

export const HeaderCellExample = () => {
  const gridStyle = useMemo(() => ({ height: '300px', width: '100%' }), []);
  const [rowData, setRowData] = useState();

  const columnDefs = [
    { field: 'athlete', suppressMenu: true, minWidth: 120 },
    {
      field: 'age',
      sortable: false,
      headerComponentParams: { menuIcon: 'fa-external-link-alt' },
    },
    { field: 'country', suppressMenu: true, minWidth: 120 },
    { field: 'year', sortable: false },
    { field: 'date', suppressMenu: true },
    { field: 'sport', sortable: false },
    {
      field: 'gold',
      headerComponentParams: { menuIcon: 'fa-cog' },
      minWidth: 120,
    },
    { field: 'silver', sortable: false },
    { field: 'bronze', suppressMenu: true, minWidth: 120 },
    { field: 'total', sortable: false },
  ];

  const styleOptions = agGridAdapter();

  const defaultColDef = {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
    headerComponentParams: {
      transform: 'uppercase',
      view: 'brand',
      align: 'right',
    },
  };

  const onGridReady = useCallback(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data);
      });
  }, []);

  return (
    <div style={gridStyle}>
      <AgGridReact
        {...styleOptions}
        rowData={rowData}
        columnDefs={columnDefs}
        suppressMenuHide
        components={{
          agColumnHeader: HeaderCell,
        }}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
      />
    </div>
  );
};
