import React from 'react'
import { ILoadingCellRendererParams } from 'ag-grid-community'
import { ProgressSpin } from '@consta/uikit/ProgressSpin'
import { Text } from '@consta/uikit/Text'
import { cn } from '@/__private__/utils/bem'

import './LoadingCell.css'

type Props = ILoadingCellRendererParams & {
  size?: 's' | 'm'
  message?: string
}

const cnLoadingCell = cn('LoadingCell')

export const LoadingCell = (props: Props) => {
  const { size = 'm', message = 'Таблица загружается, подождите, пожалуйста...' } = props
  return (
    <div className={cnLoadingCell()}>
      <ProgressSpin size={size} />
      <Text size={size} view="secondary">
        {message}
      </Text>
    </div>
  )
}
