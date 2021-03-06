import React from 'react'
import { TableEditorText } from '../../../TableEditorText'
import { AgGridReact } from 'ag-grid-react'
import { agGridAdapter } from '@/agGridAdapter'
import { IconUser } from '@consta/uikit/IconUser'

export const TableEditorTextExample = () => {
  const rowData = [
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
  ]

  const columnDefs = [
    {
      headerName: 'Doubling',
      field: 'name',
      cellEditor: TableEditorText,
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
      width: 280,
    },
  ]

  const styleOptions = agGridAdapter()

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <AgGridReact
        {...styleOptions}
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={{
          cellEditorParams: {
            leftSide: IconUser,
          },
          editable: true,
          sortable: true,
          flex: 1,
          minWidth: 100,
          filter: true,
          resizable: true,
        }}
      />
    </div>
  )
}
