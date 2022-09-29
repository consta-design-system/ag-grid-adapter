import { GridOptions } from 'ag-grid-community';

export const columnDefs: GridOptions['columnDefs'] = [
  {
    field: 'athlete',
    rowDrag: true,
    filter: 'agTextColumnFilter',
    minWidth: 200,
  },
  {
    headerName: 'age',
    field: 'age',
    editable: true,
  },
  {
    field: 'country',
    width: 180,
    editable: true,
  },
  { field: 'year' },
  {
    field: 'date',
    minWidth: 150,
    rowDrag: true,
  },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
];

export const defaultColDef: GridOptions['defaultColDef'] = {
  editable: true,
  sortable: true,
  flex: 1,
  minWidth: 100,
  filter: true,
  resizable: true,
};

export const data = [
  {
    age: 23,
    athlete: 'Michael Phelps',
    bronze: 0,
    country: 'United States',
    date: '24/08/2008',
    gold: 8,
    silver: 0,
    sport: 'Swimming',
    total: 8,
    year: 2008,
  },
  {
    age: 19,
    athlete: 'Michael Phelps',
    bronze: 2,
    country: 'United States',
    date: '29/08/2004',
    gold: 6,
    silver: 0,
    sport: 'Swimming',
    total: 8,
    year: 2004,
  },
];
