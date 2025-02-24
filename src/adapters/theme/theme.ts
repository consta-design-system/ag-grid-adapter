import { themeQuartz } from 'ag-grid-community';

import { iconSet } from './iconSet';
import { inputStyle } from './inputStyle';
import { themeParams } from './themeParams';

export const theme = themeQuartz
  .withPart(inputStyle)
  .withPart(iconSet)
  .withParams(themeParams);
