export const propSize = ['s', 'm'] as const;
export type PropSize = typeof propSize[number];
export const defaultPropSize: PropSize = propSize[0];

export type AgGridAdapterProps = {
  size?: PropSize;
  className?: string;
  zebraStriped?: 'odd' | 'even';
  borderBetweenColumns?: boolean;
  borderBetweenRows?: boolean;
  headerView?: 'default' | 'clear';
  verticalAlign?: 'top' | 'center' | 'bottom';
  headerVerticalAlign?: 'center' | 'bottom';
  rowHeight?: number;
  headerHeight?: number;
  groupHeaderHeight?: number;
  floatingFiltersHeight?: number;
  pivotHeaderHeight?: number;
  pivotGroupHeaderHeight?: number;
  rowClass?: string;
  cellClass?: string;
};
