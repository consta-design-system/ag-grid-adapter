import './AgGridAdapterVariants.css';
import 'ag-grid-enterprise';

import { useBoolean, useSelect } from '@consta/stand';
import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useRef, useState } from 'react';

import { cn } from '##/utils/bem';

import {
  columnSpanning,
  defaultOptions,
  filterHeader,
  groups,
  headerGroup,
  Item,
  rowSpanning,
  stickyColumn,
} from '../__mocks__/mock.data';
import { agGridAdapter } from '../agGridAdapter';

const cnAgGridAdapterVariants = cn('AgGridAdapterVariants');

const examplesMap = {
  'По умолчанию': defaultOptions,
  'С фильтром в загаловке': filterHeader,
  'Закрепленная колонка': stickyColumn,
  'С группировкой колонок': headerGroup,
  'С вложенными заголовками': groups,
  'Со строкой в несколько колонок': columnSpanning,
  'С колонкой в несколько строк': rowSpanning,
};

const Variants = () => {
  const size = useSelect('size', ['m', 's'], 'm');
  const type =
    useSelect(
      'type',
      [
        'По умолчанию',
        'С фильтром в загаловке',
        'С группировкой колонок',
        'Закрепленная колонка',
        'С вложенными заголовками',
        'Со строкой в несколько колонок',
        'С колонкой в несколько строк',
      ],
      'По умолчанию',
    ) ?? 'По умолчанию';
  const zebraStriped = useSelect('zebraStriped', ['odd', 'even', ''], '');
  const borderBetweenColumns = useBoolean('borderBetweenColumns', true);
  const borderBetweenRows = useBoolean('borderBetweenRows', true);
  const headerView = useSelect('headerView', ['default', 'clear'], 'default');
  const headerVerticalAlign = useSelect(
    'headerVerticalAlign',
    ['center', 'bottom'],
    'center',
  );
  const verticalAlign = useSelect(
    'verticalAlign',
    ['top', 'center', 'bottom'],
    'center',
  );
  const withPaginatiion = useBoolean('withPaginatiion');
  const withSidebar = useBoolean('withSidebar', true);
  const withStatusBar = useBoolean('withStatusBar');
  const noRowsOverlay = useBoolean('noRowsOverlay');
  const loadingOverlay = useBoolean('loadingOverlay');

  const gridRef: React.MutableRefObject<AgGridReact<Item> | null> =
    useRef(null);
  const [rowData, setRowData] = useState<Item[]>([]);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  useEffect(() => {
    gridRef.current?.api?.[
      noRowsOverlay ? 'showNoRowsOverlay' : 'hideOverlay'
    ]();
  }, [noRowsOverlay]);

  useEffect(() => {
    gridRef.current?.api?.[
      loadingOverlay ? 'showLoadingOverlay' : 'hideOverlay'
    ]();
  }, [loadingOverlay]);

  const styleOptions = agGridAdapter({
    size,
    zebraStriped: zebraStriped === '' ? undefined : zebraStriped,
    borderBetweenColumns,
    borderBetweenRows,
    headerVerticalAlign,
    headerView,
    verticalAlign,
  });

  return (
    <div
      className={cnAgGridAdapterVariants()}
      key={cnAgGridAdapterVariants({ withStatusBar, type })}
    >
      <AgGridReact
        {...styleOptions}
        rowData={rowData}
        ref={gridRef}
        pagination={withPaginatiion}
        sideBar={withSidebar}
        {...examplesMap[type]}
        statusBar={
          withStatusBar
            ? {
                statusPanels: [
                  {
                    key: 'agAggregationComponent',
                    statusPanel: 'agAggregationComponent',
                    align: 'left',
                    statusPanelParams: {
                      aggFuncs: ['count', 'sum', 'min', 'max', 'avg'],
                    },
                  },
                ],
              }
            : undefined
        }
      />
    </div>
  );
};

export default Variants;
