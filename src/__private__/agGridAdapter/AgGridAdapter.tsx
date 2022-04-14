import { cn } from '../utils/bem'

import './AgGridAdapter.css'
import './AgGridAdapterGrid.css'

import { AgGridAdapterProps } from './helper'

const cnAgGridAdapter = cn('AgGridAdapter')

export const agGridAdapter = (props?: AgGridAdapterProps) => {
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
  } = props || ({} as AgGridAdapterProps)

  return {
    rowHeight: rowHeight ?? size === 'm' ? 40 : 32,
    headerHeight: headerHeight ?? size === 'm' ? 40 : 32,
    groupHeaderHeight: groupHeaderHeight ?? size === 'm' ? 40 : 32,
    floatingFiltersHeight: floatingFiltersHeight ?? size === 'm' ? 40 : 32,
    pivotHeaderHeight: pivotHeaderHeight ?? size === 'm' ? 40 : 32,
    pivotGroupHeaderHeight: pivotGroupHeaderHeight ?? size === 'm' ? 40 : 32,
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
      [className, 'ag-theme-alpine']
    ),
  }
}
