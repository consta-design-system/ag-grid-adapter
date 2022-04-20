# [Дизайн-система Consta](https://consta.design/)

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

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](http://uikit.consta.design/?path=/docs/components-theme--playground).

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

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn, необходимые версии можно узнать в файле [package.json](./package.json) в блоке **engines**.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Сборка и старт Storybook
$ yarn start

# Сборка для production
$ yarn build

# Линтинг всех файлов
$ yarn lint

# Форматирование всех файлов prettier
$ yarn format

# Запуск юнит-тестов
$ yarn unit

# Запуск юнит-тестов, тестирование TS, линтинг файлов
$ yarn test
```

## Документация

[Посмотреть документацию и примеры](http://ag-grid-adapter.consta.design/)

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](http://uikit.consta.design/?path=/docs/common-develop-contributors--page).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется ПАО «Газпром нефть» на условиях открытой [лицензии MIT](https://consta.design/static/licence_mit.pdf).
