import 'ag-grid-enterprise';
import './AgGridAdapterVariants.css';

import { useBoolean, useSelect } from '@consta/stand';
import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useRef, useState } from 'react';

import { cn } from '##/utils/bem';

import { columnDefs, defaultColDef } from '../__mocks__/mock.data';
import { agGridAdapter } from '../agGridAdapter';

const cnAgGridAdapterVariants = cn('AgGridAdapterVariants');

const Variants = () => {
  const size = useSelect('size', ['m', 's'], 'm');
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
  const withPaginatiion = useBoolean('withPaginatiion', false);
  const withSidebar = useBoolean('withSidebar', true);

  const gridRef = useRef(null);
  const [rowData, setRowData] = useState();

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

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
    <div className={cnAgGridAdapterVariants()}>
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
  );
};

export default Variants;
