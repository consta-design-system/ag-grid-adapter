import './DateInput.css';

import { DatePicker } from '@consta/uikit/DatePicker';
import { IDateParams } from 'ag-grid-community';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { cn } from '##/utils/bem';

type Props = IDateParams & {
  size?: 's' | 'm';
};

const sizeMap = {
  m: 's',
  s: 'xs',
} as const;

const cnDateInput = cn('DateInput');

export const DateInput = forwardRef((props: Props, ref) => {
  const { size = 'm', onDateChanged } = props;
  const [date, setDate] = useState<Date | null>(null);

  const changeDate = (newDate: Date | null) => {
    setDate(newDate);
    onDateChanged();
  };

  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date;
      },

      setDate(newDate: Date) {
        setDate(newDate);
      },
    };
  });

  return (
    <DatePicker
      size={sizeMap[size]}
      value={date}
      onChange={changeDate}
      className={cnDateInput()}
      dropdownClassName={cnDateInput('Popover', ['ag-custom-component-popup'])}
    />
  );
});
