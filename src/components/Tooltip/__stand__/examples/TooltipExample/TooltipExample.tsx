import { Text } from '@consta/uikit/Text';
import { ITooltipParams } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';

import { agGridAdapter } from '##/adapters/agGridAdapter';
import { Tooltip } from '##/components/Tooltip';

export const TooltipExample = () => {
  const gridStyle = { height: '300px', width: '100%' };
  const [rowData, setRowData] = useState();
  const columnDefs = [
    {
      field: 'athlete',
      minWidth: 150,
      tooltipField: 'athlete',
    },
    { field: 'age' },
    { field: 'country', minWidth: 130, tooltipField: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];

  const defaultColDef = {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
    tooltipComponent: Tooltip,
    tooltipComponentParams: {
      children: (props: ITooltipParams) => (
        <Text lineHeight="m" size="m" view="primary">
          Имя: {props.data.athlete}, возраст: {props.data.age}
        </Text>
      ),
    },
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
    <div style={gridStyle}>
      <AgGridReact
        {...styleOptions}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        tooltipShowDelay={0}
        tooltipHideDelay={1000}
      />
    </div>
  );
};
