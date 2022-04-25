import React from 'react'
import { ILoadingOverlayParams } from 'ag-grid-community'
import { Loader } from '@consta/uikit/Loader'
import { Text } from '@consta/uikit/Text'
import { cn } from '@/__private__/utils/bem'

import './Overlay.css'
import { IconProps } from '@consta/uikit/Icon'

type Props = ILoadingOverlayParams & {
  size?: 's' | 'm'
  type?: 'loading' | 'message'
  message?: string
  icon?: React.FC<IconProps>
}

const cnOverlay = cn('Overlay')

const sizeMap = {
  m: 's',
  s: 'xs',
} as const

export const Overlay = (props: Props) => {
  const { size = 'm', type = 'loading', message = 'Результаты не найдены', icon } = props

  const Icon = icon

  return (
    <div className={cnOverlay()}>
      <div className={cnOverlay('Background')} />
      <div className={cnOverlay('Content')}>
        {type === 'loading' ? (
          <Loader size={size} />
        ) : (
          <>
            {Icon && <Icon size={sizeMap[size]} view="secondary" />}
            <Text size="l" weight="semibold" view="secondary">
              {message}
            </Text>
          </>
        )}
      </div>
    </div>
  )
}
