import React from 'react'
import { ICellRendererParams } from 'ag-grid-community'
import { Text, TextProps } from '@consta/uikit/Text'
import { IconProps } from '@consta/uikit/Icon'
import { cn } from '../../utils/bem'

import './TableCell.css'

type Props = ICellRendererParams &
  Omit<TextProps, 'size'> & {
    size?: 's' | 'm'
    children?: React.ReactElement
    icon?: React.FC<IconProps>
  }

const cnTableCell = cn('TableCell')

const sizeMap = {
  m: 's',
  s: 'xs',
} as const

export const TableCell = (props: Props) => {
  const {
    size = 'm',
    align = 'left',
    value,
    valueFormatted,
    icon,
    children,
    formatValue,
    ...otherProps
  } = props

  const Icon = icon

  return (
    <div className={cnTableCell({ align })}>
      {Icon && <Icon view="secondary" size="s" />}
      <Text {...otherProps} size={sizeMap[size]} align={align}>
        {valueFormatted ?? formatValue?.(value) ?? value}
      </Text>
      {children}
    </div>
  )
}
