import './Tooltip.css';

import { ITooltipParams } from 'ag-grid-community';
import React, { useEffect } from 'react';

import { cn } from '##/utils/bem';

type Props = ITooltipParams & {
  children?: (data: ITooltipParams) => React.ReactElement;
};

const cnTooltipComponent = cn('TooltipComponent');

export const Tooltip = (props: Props) => {
  const { children, ...otherProps } = props;

  useEffect(() => {
    props.rowIndex && props.api?.getDisplayedRowAtIndex(props.rowIndex);
  }, [props.rowIndex]);

  return <div className={cnTooltipComponent()}>{children?.(otherProps)}</div>;
};
