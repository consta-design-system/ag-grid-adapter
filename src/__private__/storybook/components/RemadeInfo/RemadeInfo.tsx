import React from 'react'

import { Informer } from '@consta/uikit/Informer'
import { Text } from '@consta/uikit/Text'

import { cn } from '@/__private__/storybook/bem'

import './RemadeInfo.css'

const cnRemadeInfo = cn('RemadeInfo')

export const RemadeInfo: React.FC<{ apiUrl: string; commponentName: string }> = props => {
  const { apiUrl } = props
  return (
    <Informer className={cnRemadeInfo()} status="system" view="bordered">
      <Text>
        Это компонент из библиотеки{' '}
        <Text
          className={cnRemadeInfo('Link')}
          as="a"
          view="link"
          href="https://www.ag-grid.com/react-data-grid/getting-started/"
          target="_blank"
        >
          ag-grid-react
        </Text>
        , к нему добавили тематизацию из{' '}
        <Text
          className={cnRemadeInfo('Link')}
          as="a"
          view="link"
          href="https://consta.design"
          target="_blank"
        >
          дизайн-системы Consta
        </Text>
        .
      </Text>
      <Text style={{ marginTop: 'var(--space-m)' }}>
        Здесь описаны только основные свойства, подробности — в{' '}
        <Text className={cnRemadeInfo('Link')} as="a" view="link" href={apiUrl} target="_blank">
          документации ag-grid
        </Text>
        .
      </Text>
    </Informer>
  )
}

export const RemadeTableInfo: React.FC<{ apiUrl: string }> = props => {
  const { apiUrl } = props
  return (
    <Informer className={cnRemadeInfo()} status="system" view="bordered">
      <Text>
        Здесь описаны только основные свойства компонента.{' '}
        <Text className={cnRemadeInfo('Link')} as="a" view="link" href={apiUrl} target="_blank">
          Посмотреть все свойства
        </Text>
      </Text>
    </Informer>
  )
}
