export const columnDefs = [
  { field: 'athlete', filter: 'agTextColumnFilter', minWidth: 200 },
  { field: 'age' },
  { field: 'country', minWidth: 180 },
  { field: 'year' },
  { field: 'date', minWidth: 150 },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
]

export const defaultColDef = {
  flex: 1,
  minWidth: 100,
  enableValue: true,
  enableRowGroup: true,
  enablePivot: true,
  sortable: true,
  filter: true,
  resizable: true,
}
