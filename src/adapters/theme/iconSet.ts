import { createPart } from 'ag-grid-community';

const iconStylesCSS = `:where(.ag-icon):before{align-items:center;background-color:currentcolor;color:inherit;content:"";display:flex;font-family:inherit;font-size:var(--ag-icon-size);font-style:normal;font-variant:normal;height:var(--ag-icon-size);justify-content:center;line-height:var(--ag-icon-size);-webkit-mask-size:contain;mask-size:contain;text-transform:none;width:var(--ag-icon-size)}.ag-icon{background-position:50%;background-repeat:no-repeat;background-size:contain;display:block;height:var(--ag-icon-size);position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:var(--ag-icon-size)}`;

const agIcons: Record<string, string> = {
  'aggregation': '<path d="M18 7V4H6l6 8-6 8h12v-3"/>',
  'color-picker':
    '<path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"/>',
  'cut':
    '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
  'minus': '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/>',
  'none': '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
  'plus':
    '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>',
  'tree-indeterminate': '<path d="M5 12h14"/>',
  'unlinked':
    '<path d="M9 17H7A5 5 0 0 1 7 7"/><path d="M15 7h2a5 5 0 0 1 4 8"/><line x1="8" x2="12" y1="12" y2="12"/><line x1="2" x2="22" y1="2" y2="22"/>',

  'settings':
    '<path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />',
};

const constaIcons: Record<string, string> = {
  'arrows':
    '<path d="M6.75 4.5 12 0l5.25 4.5H13.5v6h6V6.75L24 12l-4.5 5.25V13.5h-6v6h3.75L12 24l-5.25-4.5h3.75v-6h-6v3.75L0 12l4.5-5.25v3.75h6v-6H6.75z" />',
  'asc': ' <path d="M3 8h6V6H3v2zm0 8v2h18v-2H3zm0-3h12v-2H3v2z" />',
  'cancel':
    '<path d="m12 13.414 7.778 7.778 1.414-1.414L13.414 12l7.778-7.778-1.414-1.414L12 10.586 4.222 2.808 2.808 4.222 10.586 12l-7.778 7.778 1.414 1.414L12 13.414z" />',
  'chart':
    '<path d="m20.707 6.293-4.79-4.79-4.092 5.116-4-3-4.606 5.756 1.562 1.25 3.394-4.243 4 3 3.908-4.885 3.21 3.21 1.414-1.414ZM15 10v11h2V10h-2Zm-8 1v10h2V11H7Zm-4 3v7h2v-7H3Zm8-2v9h2v-9h-2Zm8 2v7h2v-7h-2Z" />',
  'columns': '<path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z" />',
  'contracted':
    '<path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z" />',
  'copy':
    '<path d="M8 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1.001 1.001 0 0 1-1 1h-3V7a1 1 0 0 0-1-1H8V3z" /><path d="M3 8a1 1 0 0 0-1 1v12a.996.996 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z" />',
  'cross':
    '<path d="m12 13.414 7.778 7.778 1.414-1.414L13.414 12l7.778-7.778-1.414-1.414L12 10.586 4.222 2.808 2.808 4.222 10.586 12l-7.778 7.778 1.414 1.414L12 13.414z" />',
  'csv':
    '<path fillRule="evenodd" clipRule="evenodd" d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-5.707-5.707A1 1 0 0 0 13.586 2H6zm8 7a1 1 0 0 1-1-1V3.5L18.5 9H14zm-7 4h10v2H7v-2zm6 3H7v2h6v-2z"/>',
  'desc': '<path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />',
  'down': '<path d="m6.5 9 5.5 6 5.5-6h-11Z" />',
  'excel':
    '<path fillRule="evenodd" clipRule="evenodd" d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-5.707-5.707A1 1 0 0 0 13.586 2H6zm8 7a1 1 0 0 1-1-1V3.5L18.5 9H14zm-7 4h10v2H7v-2zm6 3H7v2h6v-2z"/>',
  'expanded':
    '<path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z" />',
  'eye-slash':
    '<path clipRule="evenodd" d="M1 12c1.73-4.39 6-7.5 11-7.5 2.389 0 4.611.71 6.47 1.93l-2.514 2.513A4.993 4.993 0 0 0 12 7c-2.76 0-5 2.24-5 5a4.99 4.99 0 0 0 1.943 3.956L6.67 18.23A11.886 11.886 0 0 1 1 12zm7.697 7.031c1.048.305 2.156.469 3.303.469 5 0 9.27-3.11 11-7.5a11.877 11.877 0 0 0-2.947-4.325l-3.184 3.184a5.002 5.002 0 0 1-6.01 6.01l-2.162 2.162zM9 12c0-1.66 1.34-3 3-3 .716 0 1.373.25 1.888.666l-4.214 4.232A2.99 2.99 0 0 1 9 12z"/><path d="m4.901 19.998-1.414-1.414L19.043 3.028l1.414 1.414z" />',
  'eye':
    '<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />',
  'filter':
    '<path d="M22 2H2v2.24a2 2 0 0 0 .505 1.328l6.99 7.864A2 2 0 0 1 10 14.76V23l4-2v-6.24a2 2 0 0 1 .505-1.328l6.99-7.864A2 2 0 0 0 22 4.24V2z" />',
  'first':
    '<path fillRule="evenodd" clipRule="evenodd" d="M6 5h2v14H6V5Zm12 1.414L12.414 12 18 17.586 16.586 19l-7-7 7-7L18 6.414Z"/>',
  'group':
    '<path d="M6 7.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-3zm0 6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-3z" /><path fillRule="evenodd" clipRule="evenodd" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm17.5 0a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h15z"/>',
  'last':
    '<path fillRule="evenodd" clipRule="evenodd" d="M6 6.414 11.586 12 6 17.586 7.414 19l7-7-7-7L6 6.414ZM18 5h-2v14h2V5Z" />',
  'left':
    '<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />',
  'linked':
    '<path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />',
  'loading':
    '<path d="M14.2 3.79c.214-.8-.261-1.635-1.084-1.728A10 10 0 1 0 21.31 8.35c-.302-.77-1.231-1.014-1.949-.6-.717.414-.945 1.33-.693 2.12a6.999 6.999 0 0 1-10.93 7.684 7 7 0 0 1 4.594-12.546c.828.04 1.654-.418 1.868-1.218Z" />',
  'maximize':
    '<path fillRule="evenodd" clipRule="evenodd" d="M19 5h-8V3h10v10h-2V5zM5 19v-8H3v10h10v-2H5z"/>',
  'menu': '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />',
  'menu-alt':
    '<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />',
  'minimize': '<path d="M15 3v6h6v2h-8V3h2zM9 21v-6H3v-2h8v8H9z" />',
  'next': '<path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z" />',
  'not-allowed':
    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z" />',
  'paste':
    '<path d="M10 2a2 2 0 1 1 4 0h1a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1h1z" /><path d="M5 3h1v17h12V3h1a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M16 9v2H8V9h8zm-2 4H8v2h6v-2z" />',
  'pin':
    '<path d="m18.966 2.622 2.55 2.543c.646.644.646 1.69 0 2.334l-5.692 5.676.142.255c1.076 1.933.872 4.477-.695 6.04l-2.23 2.225-4.294-4.283L2.716 22 2 21.286l4.6-6.016-4.294-4.282 2.23-2.225c1.568-1.563 4.111-1.792 6.049-.718l.255.141L16.53 2.51c.646-.645 1.569-.752 2.435.112Z" />',
  'pivot':
    '<path fillRule="evenodd" clipRule="evenodd" d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm2 7v4h7v-4H4Zm7-2H4V4h7v4Zm2 2v4h7v-4h-7Zm7-2h-7V4h7v4Zm0 8h-7v4h7v-4Zm-9 4v-4H4v4h7Z"/>',
  'previous':
    '<path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z" />',
  'right':
    '<path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />',
  'save':
    '<path d="M22 22v-2H2v2h20zM18.59 8.59 20 10l-8 8-8-8 1.41-1.41L11 14.17V2h2v12.17l5.59-5.58z" />',
  'small-left':
    '<path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z" />',
  'small-right':
    '<path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z" />',
  'tree-closed':
    '<path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z" />',
  'tick':
    '<path fillRule="evenodd" clipRule="evenodd" d="M10.181 16.255 3.287 10.47 2 12.004l8.427 7.07 11.57-13.789L20.465 4 10.18 16.255z" />',
  'tree-open':
    '<path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41Z" />',
  'up': '<path d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8-8 8Z" />',
  'grip':
    '<path d="M15 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM9 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />',
  'settings':
    '<path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />',
  'small-down': '<path d="m6.5 9 5.5 6 5.5-6h-11Z" />',
  'small-up': '<path d="M6.5 15 12 9l5.5 6h-11Z" />',
};

const renderAgIcon = (inner: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" class="ag-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-width="1.5" viewBox="0 0 24 24">${inner}</svg>`;

const renderConstaIcon = (inner: string) =>
  `<svg viewBox="0 0 24 24" class="ag-icon" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

const getSvg = (name: string) => {
  const agIcon = agIcons[name];
  if (agIcon) return renderAgIcon(agIcon);

  const constaIcon = constaIcons[name];
  if (constaIcon) return renderConstaIcon(constaIcon);

  if (!constaIcon) throw new Error(`Missing icon data for ${name}`);
  return '';
};

const getIconsCss = () => {
  let result = iconStylesCSS;
  for (const iconName of [
    ...Object.keys(agIcons),
    ...Object.keys(constaIcons),
  ]) {
    const svg = getSvg(iconName);
    result += `.ag-icon-${iconName}::before { mask-image: url('data:image/svg+xml,${encodeURIComponent(
      svg,
    )}'); }\n`;
  }
  return result;
};

export const iconSet = createPart({
  feature: 'iconSet',
  css: getIconsCss(),
});
