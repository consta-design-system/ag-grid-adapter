import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

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
  description:
    'Адптер для библиотеки ag-grid-react. Стилизует таблицу для дизайн-системы Consta.',
  repositoryUrl: 'https://github.com/consta-design-system/ag-grid-adapter',
  figmaUrl:
    'https://www.figma.com/file/LKYyjgQ3khFHvXraZAG1n1?embed_host=share&kind=&node-id=404%3A29189&viewer=1',
});
