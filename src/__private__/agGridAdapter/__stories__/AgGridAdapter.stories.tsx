import React, { useEffect, useState, useRef } from 'react'
import { createMetadata } from '@/__private__/storybook'
import { AgGridReact } from 'ag-grid-react'
import { columnDefs, defaultColDef } from '../__mocks__/mock.data'

import mdx from './AgGridAdapter.docs.mdx'
import { agGridAdapter } from '../AgGridAdapter'
import 'ag-grid-enterprise'

import './AgGridAdapter.stories.css'
import { cn } from '@/__private__/utils/bem'
import { boolean, select } from '@storybook/addon-knobs'

const defaultKnobs = () => ({
  size: select('size', ['m', 's'], 'm'),
  zebraStriped: select('zebraStriped', ['odd', 'even', ''], ''),
  borderBetweenColumns: boolean('borderBetweenColumns', true),
  borderBetweenRows: boolean('borderBetweenRows', true),
  headerView: select('headerView', ['default', 'clear'], 'default'),
  headerVerticalAlign: select('headerVerticalAlign', ['center', 'bottom'], 'center'),
  verticalAlign: select('verticalAlign', ['top', 'center', 'bottom'], 'center'),
  withPaginatiion: boolean('withPaginatiion', false),
  withSidebar: boolean('withSidebar', true),
})

const cnAgGridAdapterStories = cn('AgGridAdapterStories')

export const Playground = () => {
  const {
    size,
    zebraStriped,
    borderBetweenColumns,
    borderBetweenRows,
    headerVerticalAlign,
    verticalAlign,
    headerView,
    withPaginatiion,
    withSidebar,
  } = defaultKnobs()
  const gridRef = useRef(null)
  const [rowData, setRowData] = useState()

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(resp => resp.json())
      .then(data => setRowData(data))
  }, [])

  const styleOptions = agGridAdapter({
    size,
    zebraStriped: zebraStriped === '' ? undefined : zebraStriped,
    borderBetweenColumns,
    borderBetweenRows,
    headerVerticalAlign,
    headerView,
    verticalAlign,
  })

  return (
    <div className={cnAgGridAdapterStories()}>
      <AgGridReact
        {...styleOptions}
        rowData={rowData}
        ref={gridRef}
        pagination={withPaginatiion}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        sideBar={withSidebar}
      />
    </div>
  )
}

export default createMetadata({
  title: 'Utils|/agGridAdapter',
  id: 'Utils/agGridAdapter',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
