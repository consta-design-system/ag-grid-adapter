import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';
import { StandPageDecoration as standPageDecoration } from './standPageDecoration';

const groups = [
  {
    title: 'Адаптеры',
    id: 'adapters',
    initialOpen: true,
  },
  {
    title: 'Компоненты',
    id: 'components',
    initialOpen: true,
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta ag-grid-adapter',
  id: 'ag-grid-adapter',
  groups,
  group: 'Адаптеры',
  image,
  standPageDecoration,
  description:
    'Адаптер для библиотеки ag-grid-react. Стилизует таблицу для дизайн-системы Consta.',
  repositoryUrl: 'https://github.com/consta-design-system/ag-grid-adapter',
});
