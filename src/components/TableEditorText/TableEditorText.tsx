import './TableEditorText.css';

import { TextField, TextFieldProps } from '@consta/uikit/TextField';
import { useFlag } from '@consta/uikit/useFlag';
import { useForkRef } from '@consta/uikit/useForkRef';
import { ICellEditorParams } from 'ag-grid-community';
import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { cn } from '##/utils/bem';

const cnTableEditorText = cn('TableEditorText');

type Props = ICellEditorParams &
  (TextFieldProps<'text'> | TextFieldProps<'textarea'>) & {
    size?: 's' | 'm';
  };

const sizeMap = {
  m: 's',
  s: 'xs',
} as const;

export const TableEditorText = memo(
  forwardRef((props: Props, ref) => {
    const {
      size = 'm',
      eventKey,
      value: valueProp,
      onKeyDown: onKeyDownProp,
      className,
      inputRef: inputRefProp,
      ...otherProps
    } = props;
    const createInitialState = () => {
      let startValue;
      let highlightAllOnFocus = true;

      if (eventKey === 'Backspace' || eventKey === 'Delete') {
        startValue = '';
      } else {
        startValue = valueProp;
        if (eventKey === 'F2') {
          highlightAllOnFocus = false;
        }
      }

      return {
        value: startValue,
        highlightAllOnFocus,
      };
    };

    const initialState = createInitialState();

    const [value, setValue] = useState<string | null | undefined>(
      initialState.value,
    );
    const [highlightAllOnFocus, setHighlightAllOnFocus] = useFlag(
      initialState.highlightAllOnFocus,
    );

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      inputRef.current?.focus();
      if (highlightAllOnFocus) {
        inputRef.current?.select();

        setHighlightAllOnFocus.off();
      } else {
        const length = inputRef.current?.value
          ? inputRef.current?.value.length
          : 0;
        if (length > 0) {
          inputRef.current?.setSelectionRange(length, length);
        }
      }
    }, []);

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' || event.key === 'Tab') {
        props.stopEditing();
      }
      onKeyDownProp?.(event);
    };

    useImperativeHandle(ref, () => {
      return {
        getValue() {
          return value;
        },
        isCancelBeforeStart() {
          return false;
        },
      };
    });

    return (
      <TextField
        className={cnTableEditorText(null, [className])}
        inputRef={useForkRef([
          inputRef,
          inputRefProp as React.RefObject<HTMLInputElement>,
        ])}
        value={value}
        size={sizeMap[size]}
        onKeyDown={onKeyDown}
        onChange={setValue}
        {...otherProps}
      />
    );
  }),
);
