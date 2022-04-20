import { cn } from '../utils/bem'

import './AgGridAdapter.css'
import './AgGridAdapterGrid.css'

import { AgGridAdapterProps } from './helper'

const cnAgGridAdapter = cn('AgGridAdapter')

const mapHeightBySize = {
  m: 40,
  s: 32,
} as const

export const agGridAdapter = (props: AgGridAdapterProps = {}) => {
  const {
    className,
    size = 'm',
    zebraStriped,
    borderBetweenColumns = true,
    headerView = 'default',
    verticalAlign = 'center',
    borderBetweenRows = true,
    headerVerticalAlign = 'center',
    rowClass,
    rowHeight,
    groupHeaderHeight,
    pivotGroupHeaderHeight,
    pivotHeaderHeight,
    floatingFiltersHeight,
    headerHeight,
    cellClass,
  } = props

  return {
    rowHeight: rowHeight ?? mapHeightBySize[size],
    headerHeight: headerHeight ?? mapHeightBySize[size],
    groupHeaderHeight: groupHeaderHeight ?? mapHeightBySize[size],
    floatingFiltersHeight: floatingFiltersHeight ?? mapHeightBySize[size],
    pivotHeaderHeight: pivotHeaderHeight ?? mapHeightBySize[size],
    pivotGroupHeaderHeight: pivotGroupHeaderHeight ?? mapHeightBySize[size],
    rowClass: cnAgGridAdapter('Row', [rowClass]),
    cellClass: cnAgGridAdapter('Cell', [cellClass]),
    className: cnAgGridAdapter(
      {
        size,
        zebraStriped,
        borderBetweenColumns,
        verticalAlign,
        borderBetweenRows,
        headerVerticalAlign,
        headerView,
      },
      [className]
    ),
  }
}
