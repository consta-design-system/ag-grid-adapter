import { createPart } from 'ag-grid-community';

const params = {
  inputTextColor: {
    ref: 'textColor',
  },
  inputPlaceholderTextColor: {
    ref: 'inputTextColor',
    mix: 0.5,
  },
  inputHeight: {
    calc: 'max(iconSize, fontSize) + spacing * 2',
  },
  inputFocusBackgroundColor: {
    ref: 'inputBackgroundColor',
  },
  inputFocusTextColor: {
    ref: 'inputTextColor',
  },
  inputDisabledBorder: {
    ref: 'inputBorder',
  },
  inputInvalidBackgroundColor: {
    ref: 'inputBackgroundColor',
  },
  inputInvalidTextColor: {
    ref: 'inputTextColor',
  },
  inputIconColor: {
    ref: 'inputTextColor',
  },
  pickerButtonFocusBorder: { ref: 'inputFocusBorder' },
  pickerButtonBackgroundColor: { ref: 'backgroundColor' },
  pickerButtonFocusBackgroundColor: { ref: 'backgroundColor' },
  pickerListBackgroundColor: { ref: 'backgroundColor' },
  inputBackgroundColor: {
    ref: 'backgroundColor',
  },
  inputBorder: true,
  inputBorderRadius: {
    ref: 'borderRadius',
  },
  inputPaddingStart: {
    ref: 'spacing',
  },
  inputFocusBorder: {
    color: 'accentColor',
  },
  inputFocusShadow: {
    ref: 'focusShadow',
  },
  inputDisabledBackgroundColor: 'foregroundBackgroundMix(0.06)',
  inputDisabledTextColor: {
    ref: 'textColor',
    mix: 0.5,
  },
  inputInvalidBorder: {
    color: { ref: 'invalidColor' },
  },
  pickerButtonBorder: true,
  pickerListBorder: true,
};

const css = `
:where(.ag-input-field-input[type='number']:not(.ag-number-field-input-stepper)) {
    appearance: textfield;
}

:where(.ag-input-field-input[type='number']:not(.ag-number-field-input-stepper))::-webkit-outer-spin-button,
:where(.ag-input-field-input[type='number']:not(.ag-number-field-input-stepper))::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
}

:where(
        input.ag-input-field-input:not([type]),
        input.ag-input-field-input[type='text'],
        input.ag-input-field-input[type='number'],
        input.ag-input-field-input[type='tel'],
        input.ag-input-field-input[type='date'],
        input.ag-input-field-input[type='datetime-local'],
        textarea.ag-input-field-input
    ) {
    border: var(--ag-input-border);
    padding: 0;
    margin: 0;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    background-color: var(--ag-input-background-color);
    border-radius: var(--ag-input-border-radius);
    color: var(--ag-input-text-color);
    padding-left: var(--ag-input-padding-start);
    min-height: var(--ag-input-height);
}

:where(
        input.ag-input-field-input:not([type]),
        input.ag-input-field-input[type='text'],
        input.ag-input-field-input[type='number'],
        input.ag-input-field-input[type='tel'],
        input.ag-input-field-input[type='date'],
        input.ag-input-field-input[type='datetime-local'],
        textarea.ag-input-field-input
    ):where(:disabled) {
    background-color: var(--ag-input-disabled-background-color);
    border: var(--ag-input-disabled-border);
    color: var(--ag-input-disabled-text-color);
}

:where(
        input.ag-input-field-input:not([type]),
        input.ag-input-field-input[type='text'],
        input.ag-input-field-input[type='number'],
        input.ag-input-field-input[type='tel'],
        input.ag-input-field-input[type='date'],
        input.ag-input-field-input[type='datetime-local'],
        textarea.ag-input-field-input
    ):where(:focus) {
    outline: none;
    box-shadow: var(--ag-input-focus-shadow);
    background-color: var(--ag-input-focus-background-color);
    border: var(--ag-input-focus-border);
    color: var(--ag-input-focus-text-color);
}

:where(
        input.ag-input-field-input:not([type]),
        input.ag-input-field-input[type='text'],
        input.ag-input-field-input[type='number'],
        input.ag-input-field-input[type='tel'],
        input.ag-input-field-input[type='date'],
        input.ag-input-field-input[type='datetime-local'],
        textarea.ag-input-field-input
    ):where(:invalid) {
    background-color: var(--ag-input-invalid-background-color);
    border: var(--ag-input-invalid-border);
    color: var(--ag-input-invalid-text-color);
}

:where(
        input.ag-input-field-input:not([type]),
        input.ag-input-field-input[type='text'],
        input.ag-input-field-input[type='number'],
        input.ag-input-field-input[type='tel'],
        input.ag-input-field-input[type='date'],
        input.ag-input-field-input[type='datetime-local'],
        textarea.ag-input-field-input
    ):where(.invalid) {
    background-color: var(--ag-input-invalid-background-color);
    border: var(--ag-input-invalid-border);
    color: var(--ag-input-invalid-text-color);
}

:where(
        input.ag-input-field-input:not([type]),
        input.ag-input-field-input[type='text'],
        input.ag-input-field-input[type='number'],
        input.ag-input-field-input[type='tel'],
        input.ag-input-field-input[type='date'],
        input.ag-input-field-input[type='datetime-local'],
        textarea.ag-input-field-input
    )::placeholder {
    color: var(--ag-input-placeholder-text-color);
}

:where(.ag-column-select-header-filter-wrapper, .ag-filter-toolpanel-search, .ag-mini-filter, .ag-filter-filter) .ag-input-wrapper::before {
    position: absolute;
    display: block;
    margin-left: var(--ag-spacing);
    width: 12px;
    height: 12px;
    color: var(--ag-input-icon-color);
    background-color: currentcolor;
    mask-image: url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNNS4zIDlhMy43IDMuNyAwIDEgMCAwLTcuNSAzLjcgMy43IDAgMCAwIDAgNy41Wk0xMC41IDEwLjUgOC4zIDguMiIvPjwvc3ZnPg==');
    mask-position: center;
    mask-repeat: no-repeat;
    opacity: 0.5;
    content: '';
}

input.ag-input-field-input,
textarea.ag-input-field-input {
    padding-left: var(--ag-spacing);
}

.ag-column-select-header-filter-wrapper .ag-text-field-input,
.ag-column-select-header-filter-wrapper .ag-number-field-input,
.ag-filter-toolpanel-search .ag-text-field-input,
.ag-filter-toolpanel-search .ag-number-field-input,
.ag-mini-filter .ag-text-field-input,
.ag-mini-filter .ag-number-field-input,
.ag-filter-filter .ag-text-field-input,
.ag-filter-filter .ag-number-field-input {
    padding-left: calc(var(--ag-spacing) * 1.5 + 12px);
}

:where(
        input.ag-input-field-input:not([type]),
        input.ag-input-field-input[type='text'],
        input.ag-input-field-input[type='number'],
        input.ag-input-field-input[type='tel'],
        input.ag-input-field-input[type='date'],
        input.ag-input-field-input[type='datetime-local'],
        textarea.ag-input-field-input
    ):hover {
    border-color: var(--color-control-bg-border-default-hover);
}

:where(
        input.ag-input-field-input:not([type]),
        input.ag-input-field-input[type='text'],
        input.ag-input-field-input[type='number'],
        input.ag-input-field-input[type='tel'],
        input.ag-input-field-input[type='date'],
        input.ag-input-field-input[type='datetime-local'],
        textarea.ag-input-field-input
    ):focus {
    border-color: var(--color-control-bg-border-focus);
    
}
`;

export const inputStyle = createPart({
  feature: 'inputStyle',
  params,
  css,
});
