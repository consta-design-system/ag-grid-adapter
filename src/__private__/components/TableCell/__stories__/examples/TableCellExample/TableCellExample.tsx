import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { agGridAdapter } from '@/agGridAdapter'
import { TableCell } from '../../../TableCell'
import { ICellRendererParams } from 'ag-grid-community'
import { IconCrown } from '@consta/uikit/IconCrown'

export const TableCellExample = () => {
  const gridStyle = { height: '300px', width: '100%' }
  const [rowData, setRowData] = useState()
  const columnDefs = [
    { field: 'athlete' },
    { field: 'year' },
    {
      field: 'gold',
      cellRenderer: (props: ICellRendererParams) => <TableCell icon={IconCrown} {...props} />,
    },
    { field: 'silver', cellRenderer: TableCell },
    { field: 'bronze', cellRenderer: TableCell },
    { field: 'total', minWidth: 175, cellRenderer: TableCell },
  ]

  const defaultColDef = {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  }

  const styleOptions = agGridAdapter()

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(resp => resp.json())
      .then(data => {
        setRowData(data)
      })
  }, [])

  return (
    <div style={gridStyle}>
      <AgGridReact
        {...styleOptions}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  )
}
