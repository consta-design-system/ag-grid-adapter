import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { agGridAdapter } from '@/__private__/agGridAdapter/AgGridAdapter'

const rowData = [
  { пользователь: 'Крокодил Гена', роль: 'администратор', приоритет: '1' },
  { пользователь: 'Чебурашка', роль: 'читатель', приоритет: '2' },
  { пользователь: 'Шапокляк', роль: 'вредитель', приоритет: '777' },
]

const columnDefs = [{ field: 'пользователь' }, { field: 'роль' }, { field: 'приоритет' }]

export const AgGridAdapterExampleBasic = () => {
  const styleOptions = agGridAdapter({
    size: 'm',
    borderBetweenColumns: true,
    borderBetweenRows: true,
    headerVerticalAlign: 'center',
    headerView: 'default',
    verticalAlign: 'center',
  })

  return (
    <div style={{ width: 600, height: 200 }}>
      <AgGridReact {...styleOptions} rowData={rowData} columnDefs={columnDefs} />
    </div>
  )
}
