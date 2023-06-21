import { GridOptions, RowSpanParams } from 'ag-grid-community';

export type Item = {
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
};

export const defaultOptions: GridOptions<Item> = {
  columnDefs: [
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
  ],
  rowDragManaged: true,
  rowDragMultiRow: true,
  enableRangeSelection: true,
  enableRangeHandle: true,
  rowSelection: 'multiple',
  animateRows: true,
  defaultColDef: {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  },
};

export const filterHeader: GridOptions<Item> = {
  columnDefs: [
    { field: 'athlete' },
    { field: 'sport' },
    { field: 'age', type: 'numberColumn' },
    { field: 'year', type: 'numberColumn' },
    { field: 'date', type: ['dateColumn', 'nonEditableColumn'], width: 220 },
    {
      headerName: 'Medals',
      groupId: 'medalsGroup',
      children: [
        { headerName: 'Gold', field: 'gold', type: 'medalColumn' },
        { headerName: 'Silver', field: 'silver', type: 'medalColumn' },
        { headerName: 'Bronze', field: 'bronze', type: 'medalColumn' },
        {
          headerName: 'Total',
          field: 'total',
          type: 'medalColumn',
          columnGroupShow: 'closed',
        },
      ],
    },
  ],
  defaultColDef: {
    width: 150,
    editable: true,
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    resizable: true,
    cellDataType: false,
  },
  defaultColGroupDef: {
    marryChildren: true,
  },
  columnTypes: {
    numberColumn: { width: 130, filter: 'agNumberColumnFilter' },
    medalColumn: { width: 100, columnGroupShow: 'open', filter: false },
    nonEditableColumn: { editable: false },
    dateColumn: {
      filter: 'agDateColumnFilter',
      filterParams: {
        comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
          const dateParts = cellValue.split('/');
          const day = Number(dateParts[0]);
          const month = Number(dateParts[1]) - 1;
          const year = Number(dateParts[2]);
          const cellDate = new Date(year, month, day);
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }
          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
          return 0;
        },
      },
    },
  },
};

export const headerGroup: GridOptions<Item> = {
  columnDefs: [
    { field: 'athlete' },
    { field: 'age' },
    { field: 'country' },
    { field: 'sport' },
    { field: 'year' },
    { field: 'date' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ],
  defaultColDef: {
    sortable: true,
    resizable: true,
    width: 100,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
  },
  sideBar: {
    toolPanels: ['columns'],
  },
  rowGroupPanelShow: 'always',
  pivotPanelShow: 'always',
};

export const stickyColumn: GridOptions<Item> = {
  columnDefs: [
    {
      headerName: 'Athlete Details',
      suppressStickyLabel: true,
      children: [
        { field: 'athlete', pinned: true, colId: 'athlete' },
        { field: 'country', colId: 'country' },
        { field: 'age', colId: 'age' },
      ],
    },
    {
      headerName: 'Sports Results',
      suppressStickyLabel: true,
      openByDefault: true,
      children: [
        { field: 'sport', colId: 'sport' },
        { field: 'gold', colId: 'gold', columnGroupShow: 'open' },
        { field: 'silver', colId: 'silver', columnGroupShow: 'open' },
        { field: 'bronze', colId: 'bronze', columnGroupShow: 'open' },
        { field: 'total', colId: 'total', columnGroupShow: 'closed' },
      ],
    },
  ],
  defaultColDef: {
    resizable: true,
    width: 400,
  },
};

export const groups: GridOptions<Item> = {
  columnDefs: [
    {
      headerName: 'Group A',
      groupId: 'GroupA',
      children: [
        {
          headerName: 'Athlete 1',
          field: 'athlete',
          width: 150,
          filter: 'agTextColumnFilter',
        },
        {
          headerName: 'Group B',
          groupId: 'GroupB',
          children: [
            { headerName: 'Country 1', field: 'country', width: 120 },
            {
              headerName: 'Group C',
              groupId: 'GroupC',
              children: [
                { headerName: 'Sport 1', field: 'sport', width: 110 },
                {
                  headerName: 'Group D',
                  groupId: 'GroupD',
                  children: [
                    {
                      headerName: 'Total 1',
                      field: 'total',
                      width: 100,
                      filter: 'agNumberColumnFilter',
                    },
                    {
                      headerName: 'Group E',
                      groupId: 'GroupE',
                      openByDefault: true,
                      children: [
                        {
                          headerName: 'Gold 1',
                          field: 'gold',
                          width: 100,
                          filter: 'agNumberColumnFilter',
                        },
                        {
                          headerName: 'Group F',
                          groupId: 'GroupF',
                          openByDefault: true,
                          children: [
                            {
                              headerName: 'Silver 1',
                              field: 'silver',
                              width: 100,
                              filter: 'agNumberColumnFilter',
                            },
                            {
                              headerName: 'Group G',
                              groupId: 'GroupG',
                              children: [
                                {
                                  headerName: 'Bronze',
                                  field: 'bronze',
                                  width: 100,
                                  filter: 'agNumberColumnFilter',
                                },
                              ],
                            },
                            {
                              headerName: 'Silver 2',
                              columnGroupShow: 'open',
                              field: 'silver',
                              width: 100,
                              filter: 'agNumberColumnFilter',
                            },
                          ],
                        },
                        {
                          headerName: 'Gold 2',
                          columnGroupShow: 'open',
                          field: 'gold',
                          width: 100,
                          filter: 'agNumberColumnFilter',
                        },
                      ],
                    },
                    {
                      headerName: 'Total 2',
                      columnGroupShow: 'open',
                      field: 'total',
                      width: 100,
                      filter: 'agNumberColumnFilter',
                    },
                  ],
                },
                {
                  headerName: 'Sport 2',
                  columnGroupShow: 'open',
                  field: 'sport',
                  width: 110,
                },
              ],
            },
            {
              headerName: 'Country 2',
              columnGroupShow: 'open',
              field: 'country',
              width: 120,
            },
          ],
        },
        {
          headerName: 'Age 2',
          columnGroupShow: 'open',
          field: 'age',
          width: 90,
          filter: 'agNumberColumnFilter',
        },
      ],
    },
    {
      headerName: 'Athlete 2',
      columnGroupShow: 'open',
      field: 'athlete',
      width: 150,
      filter: 'agTextColumnFilter',
    },
  ],
  defaultColDef: {
    sortable: true,
    resizable: true,
    filter: true,
  },
};

export const columnSpanning: GridOptions<Item> = {
  columnDefs: [
    { field: 'athlete', pinned: 'left' },
    { field: 'age', pinned: 'left' },
    {
      field: 'country',
      colSpan: (params: RowSpanParams<Item>) => {
        const country = params.data ? params.data.country : undefined;
        if (country === 'Russia') {
          return 2;
        }
        if (country === 'United States') {
          return 4;
        }
        return 1;
      },
    },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ],
  defaultColDef: {
    width: 150,
    resizable: true,
  },
};

export const rowSpanning: GridOptions<Item> = {
  columnDefs: [
    {
      field: 'athlete',
      rowSpan: (params: RowSpanParams<Item>) => {
        const athlete = params.data ? params.data.athlete : undefined;
        if (athlete === 'Aleksey Nemov') {
          return 2;
        }
        if (athlete === 'Ryan Lochte') {
          return 4;
        }
        return 1;
      },
      width: 200,
    },
    { field: 'age', width: 100 },
    { field: 'country' },
    { field: 'year', width: 100 },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ],
  defaultColDef: {
    width: 170,
    resizable: true,
  },
  suppressRowTransform: true,
};
