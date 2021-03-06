import React, { useEffect, useRef, useState, useImperativeHandle, memo, forwardRef } from 'react'
import { cn } from '@/__private__/utils/bem'
import { ICellEditorParams } from 'ag-grid-community'
import { TextField, TextFieldProps } from '@consta/uikit/TextField'
import { useFlag } from '@consta/uikit/useFlag'

import './TableEditorText.css'
const cnTableEditorText = cn('TableEditorText')

type Props = ICellEditorParams &
  TextFieldProps<'text' | 'textarea'> & {
    size?: 's' | 'm'
  }

const sizeMap = {
  m: 's',
  s: 'xs',
} as const

export const TableEditorText = memo(
  forwardRef((props: Props, ref) => {
    const {
      size = 'm',
      eventKey,
      value: valueProp,
      key,
      charPress,
      onKeyDown: onKeyDownProp,
      className,
      ...otherProps
    } = props
    const createInitialState = () => {
      let startValue
      let highlightAllOnFocus = true

      if (eventKey === 'Backspace' || eventKey === 'Delete') {
        startValue = ''
      } else if (charPress) {
        startValue = charPress
        highlightAllOnFocus = false
      } else {
        startValue = valueProp
        if (eventKey === 'F2') {
          highlightAllOnFocus = false
        }
      }

      return {
        value: startValue,
        highlightAllOnFocus,
      }
    }

    const initialState = createInitialState()

    const [value, setValue] = useState<string | null | undefined>(initialState.value)
    const [highlightAllOnFocus, setHighlightAllOnFocus] = useFlag(initialState.highlightAllOnFocus)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      inputRef.current?.focus()
      if (highlightAllOnFocus) {
        inputRef.current?.select()

        setHighlightAllOnFocus.off()
      } else {
        const length = inputRef.current?.value ? inputRef.current?.value.length : 0
        if (length > 0) {
          inputRef.current?.setSelectionRange(length, length)
        }
      }
    }, [])

    const cancelBeforeStart = props.charPress && '1234567890'.indexOf(props.charPress) < 0

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' || event.key === 'Tab') {
        props.stopEditing()
      }
      onKeyDownProp?.(event)
    }

    useImperativeHandle(ref, () => {
      return {
        getValue() {
          return value
        },

        isCancelBeforeStart() {
          return cancelBeforeStart
        },
      }
    })

    return (
      <TextField
        className={cnTableEditorText(null, [className])}
        inputRef={inputRef}
        value={value}
        size={sizeMap[size]}
        onKeyDown={onKeyDown}
        onChange={val => setValue(val.value)}
        {...otherProps}
      />
    )
  })
)
