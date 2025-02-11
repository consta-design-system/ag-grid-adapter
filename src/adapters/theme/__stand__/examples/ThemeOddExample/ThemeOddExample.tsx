import './ThemeOddExample.css';

import { Example } from '@consta/stand';
import {
  AllCommunityModule,
  ClientSideRowModelModule,
  ModuleRegistry,
} from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';

import { cn } from '##/utils/bem';

import { theme } from '../../..';
import { defaultOptions, Item } from '../../../__mocks__/mock.data';

ModuleRegistry.registerModules([AllCommunityModule, ClientSideRowModelModule]);

const myTheme = theme.withParams({
  oddRowBackgroundColor: 'var(--color-bg-stripe)',
});

const cnThemeOddExample = cn('ThemeOddExample');

export const ThemeOddExample = () => {
  const [rowData, setRowData] = useState<Item[]>([]);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <Example col={1}>
      <div className={cnThemeOddExample()}>
        <AgGridReact {...defaultOptions} rowData={rowData} theme={myTheme} />
      </div>
    </Example>
  );
};
