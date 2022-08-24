import { DatePicker } from '@consta/uikit/DatePickerCanary';
import { IDateParams } from 'ag-grid-community';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

type Props = IDateParams & {
  size?: 's' | 'm';
};

const sizeMap = {
  m: 's',
  s: 'xs',
} as const;

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
      onChange={({ value }) => changeDate(value)}
    />
  );
});
