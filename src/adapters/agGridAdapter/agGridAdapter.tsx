import './AgGridAdapter.css';
// import './AgGridAdapterGrid.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/agGridAlpineFont.css';

import { cn } from '../../utils/bem';
import { AgGridAdapterProps } from './helper';

const cnAgGridAdapter = cn('AgGridAdapter');

const mapHeightBySize = {
  m: 40,
  s: 32,
} as const;

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
  } = props;

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
      [className],
    ),
  };
};
