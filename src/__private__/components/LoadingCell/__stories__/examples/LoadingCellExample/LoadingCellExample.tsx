import React, { useCallback } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-enterprise'
import { LoadingCell } from '../../../LoadingCell'
import { agGridAdapter } from '@/agGridAdapter/index'

type Params = {
  success: (data: { rowData: Array<Record<string, unknown>>; rowCount: number }) => void
  fail: () => void
  request: {
    startRow: number
    endRow: number
  }
}

type Server = {
  getResponse: (
    request: Params['request']
  ) => {
    success: boolean
    rows: Array<Record<string, unknown>>
    lastRow: number
  }
}

const getServerSideDatasource = (server: Server) => {
  return {
    getRows: (params: Params) => {
      setTimeout(() => {
        const response = server.getResponse(params.request)
        if (response.success) {
          params.success({
            rowData: response.rows,
            rowCount: response.lastRow,
          })
        } else {
          params.fail()
        }
      }, 2000)
    },
  }
}

const getFakeServer = (allData: Array<Record<string, unknown>>): Server => {
  return {
    getResponse: (request: Params['request']) => {
      const rowsThisPage = allData.slice(request.startRow, request.endRow)
      const lastRow = allData.length <= (request.endRow || 0) ? allData.length : -1
      return {
        success: true,
        rows: rowsThisPage,
        lastRow,
      }
    },
  }
}

export const LoadingCellExample = () => {
  const gridStyle = { width: '100%', height: '300px' }

  const columnDefs = [
    { field: 'id' },
    { field: 'athlete', width: 150 },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ]
  const defaultColDef = {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  }

  const onGridReady = useCallback(params => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(resp => resp.json())
      .then((data: Array<Record<string, unknown>>) => {
        let idSequence = 0
        data.forEach(item => {
          item.id = idSequence++
        })
        const server = getFakeServer(data)
        const datasource = getServerSideDatasource(server)
        params.api.setServerSideDatasource(datasource)
      })
  }, [])

  const styleOptions = agGridAdapter()

  return (
    <div style={gridStyle}>
      <AgGridReact
        {...styleOptions}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        loadingCellRenderer={LoadingCell}
        rowModelType={'serverSide'}
        serverSideStoreType={'partial'}
        cacheBlockSize={100}
        maxBlocksInCache={10}
        animateRows={true}
        onGridReady={onGridReady}
      />
    </div>
  )
}
