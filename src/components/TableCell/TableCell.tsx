import './TableCell.css';

import { IconProps } from '@consta/icons/Icon';
import { Text, TextProps } from '@consta/uikit/Text';
import { ICellRendererParams } from 'ag-grid-community';
import React from 'react';

import { cn } from '##/utils/bem';

type Props = ICellRendererParams &
  Omit<TextProps, 'size'> & {
    size?: 's' | 'm';
    children?: React.ReactElement;
    icon?: React.FC<IconProps>;
  };

const cnTableCell = cn('TableCell');

const sizeMap = {
  m: 's',
  s: 'xs',
} as const;

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
  } = props;

  const Icon = icon;

  return (
    <div className={cnTableCell({ align })}>
      {Icon && <Icon view="secondary" size="s" />}
      <Text {...otherProps} size={sizeMap[size]} align={align} lineHeight="m">
        {valueFormatted ?? formatValue?.(value) ?? value}
      </Text>
      {children}
    </div>
  );
};
