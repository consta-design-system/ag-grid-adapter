import React, { useEffect } from 'react'
import { cn } from '@/__private__/utils/bem'
import { ITooltipParams } from 'ag-grid-community'

import './Tooltip.css'

type Props = ITooltipParams & {
  children?: (data: ITooltipParams) => React.ReactElement
}

const cnTooltipComponent = cn('TooltipComponent')

export const Tooltip = (props: Props) => {
  const { children, ...otherProps } = props

  useEffect(() => {
    props.rowIndex && props.api?.getDisplayedRowAtIndex(props.rowIndex)
  }, [props.rowIndex])

  return <div className={cnTooltipComponent()}>{children?.(otherProps)}</div>
}
