import './LoadingCell.css';

import { ProgressSpin } from '@consta/uikit/ProgressSpin';
import { Text } from '@consta/uikit/Text';
import { ILoadingCellRendererParams } from 'ag-grid-community';
import React from 'react';

import { cn } from '##/utils/bem';

type Props = ILoadingCellRendererParams & {
  size?: 's' | 'm';
  message?: string;
};

const cnLoadingCell = cn('LoadingCell');

export const LoadingCell = (props: Props) => {
  const {
    size = 'm',
    message = 'Таблица загружается, подождите, пожалуйста...',
  } = props;
  return (
    <div className={cnLoadingCell()}>
      <ProgressSpin size={size} />
      <Text size={size} view="secondary" lineHeight="m">
        {message}
      </Text>
    </div>
  );
};
