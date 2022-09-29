import { AgGridReact } from 'ag-grid-react';
import React from 'react';

import { agGridAdapter } from '##/adapters/agGridAdapter';

const rowData = [
  { user: 'Крокодил Гена', role: 'администратор', priority: '1' },
  { user: 'Чебурашка', role: 'читатель', priority: '2' },
  { user: 'Шапокляк', role: 'вредитель', приорpriorityитет: '777' },
];

const columnDefs = [
  { field: 'user', headerName: 'Пользователь' },
  { field: 'role', headerName: 'Роль' },
  { field: 'priority', headerName: 'Приоритет' },
];

export const AgGridAdapterExampleBasic = () => {
  const styleOptions = agGridAdapter({
    size: 'm',
    borderBetweenColumns: true,
    borderBetweenRows: true,
    headerVerticalAlign: 'center',
    headerView: 'default',
    verticalAlign: 'center',
  });

  return (
    <div style={{ width: 600, height: 200 }}>
      <AgGridReact
        {...styleOptions}
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
};
