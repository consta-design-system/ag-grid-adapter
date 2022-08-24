import './OverlayExample.css';

import { Button } from '@consta/uikit/Button';
import { ILoadingOverlayParams } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useMemo, useRef, useState } from 'react';

import { cn } from '@/__private__/utils/bem';
import { agGridAdapter } from '@/agGridAdapter';

import { Overlay } from '../../../Overlay';

const cnOverlayExample = cn('OverlayExample');

export const OverlayExample = () => {
  const gridRef = useRef<AgGridReact>(null);
  const containerStyle = { width: '100%', height: '300px' };
  const gridStyle = { height: '100%', width: '100%' };
  const [rowData, setRowData] = useState();
  const columnDefs = [
    { field: 'athlete', width: 150 },
    { field: 'age', width: 90 },
    { field: 'country', width: 120 },
    { field: 'year', width: 90 },
    { field: 'date', width: 110 },
    { field: 'sport', width: 110 },
    { field: 'gold', width: 100 },
    { field: 'silver', width: 100 },
    { field: 'bronze', width: 100 },
    { field: 'total', width: 100 },
  ];

  const defaultColDef = {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  };

  const loadingOverlayComponent = useMemo(() => {
    return (props: ILoadingOverlayParams) => (
      <Overlay type="loading" {...props} />
    );
  }, []);

  const noRowsOverlayComponent = useMemo(() => {
    return (props: ILoadingOverlayParams) => (
      <Overlay type="message" {...props} />
    );
  }, []);

  const styleOptions = agGridAdapter();

  const onGridReady = useCallback(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data);
      });
  }, []);

  const onBtShowLoading = () => {
    gridRef?.current?.api.showLoadingOverlay();
  };

  const onBtShowNoRows = () => {
    gridRef?.current?.api.showNoRowsOverlay();
  };

  const onBtHide = () => {
    gridRef?.current?.api.hideOverlay();
  };

  return (
    <div style={containerStyle} className={cnOverlayExample()}>
      <div className={cnOverlayExample('Container')}>
        <div className={cnOverlayExample('Buttons')}>
          <Button onClick={onBtShowLoading} label="Показать загрузчик" />
          <Button onClick={onBtShowNoRows} label="Показать сообщение" />
          <Button onClick={onBtHide} label="Закрыть все" />
        </div>

        <div style={gridStyle}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            {...styleOptions}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            loadingOverlayComponent={loadingOverlayComponent}
            noRowsOverlayComponent={noRowsOverlayComponent}
            onGridReady={onGridReady}
          />
        </div>
      </div>
    </div>
  );
};
