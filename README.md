# [Дизайн-система Consta](https://consta.design/) | ag-grid-adapter

Этот адаптер стилизует таблицу [ag-grid-react](https://www.ag-grid.com/react-data-grid/getting-started/) для [дизайн-системы Consta](https://consta.design/).

# Как использовать

## Установите пакет

```sh
# NPM
$ npm install @consta/ag-grid-adapter
# Yarn
$ yarn add @consta/ag-grid-adapter
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](http://portal.consta.design/libs/portal/theme-themeabout).

### Можно использовать компоненты

Например, так:

```js
import React from 'react'
import { agGridAdapter } from '@consta/ag-grid-adapter/agGridAdapter'
import { AgGridReact } from 'ag-grid-react'
const columnDefs = [
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
const defaultColDef = {
  flex: 1,
  minWidth: 100,
  enableValue: true,
  enableRowGroup: true,
  enablePivot: true,
  sortable: true,
  filter: true,
  resizable: true,
}
const App = () => {
   const styleOptions = agGridAdapter({
    size: 'm',
    borderBetweenColumns: true,
    borderBetweenRows: true,
    headerVerticalAlign: 'center',
    headerView: 'default',
    verticalAlign: 'center',
  })
  return  (
    <AgGridReact
      {...styleOptions}
      rowData={[...]}
      columnDefs={columnDefs}
      defaultColDef={defaultColDef}
    />
  )
}
```

## Документация

[Посмотреть документацию и примеры](http://consta.design/libs/ag-grid-adapter)

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Запуск локального сервера для разработки
$ yarn start

# Сборка пакета
$ yarn build

# Сборка стенда
$ yarn stand:build

# Запуск тестов
$ yarn test
```

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](https://consta.design/libs/portal/contributers-code).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется на условиях открытой [лицензии MIT](https://consta.design/static/licence_mit.pdf).
