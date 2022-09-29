import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
  {
    title: 'Адаптеры',
    id: 'adapters',
  },
  {
    title: 'Компоненты',
    id: 'components',
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta ag-grid-adapter',
  id: 'ag-grid-adapter',
  groups,
  group: 'Адаптеры',
  image,
  description:
    'Адптер для библиотеки ag-grid-react. Стилизует таблицу для дизайн-системы Consta.',
});
