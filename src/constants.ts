import { Filter } from './types';

export const filters: Filter[] = [
  {
    name: 'all',
    link: '/pokemon/?limit=150',
  },
  {
    name: 'normal',
    link: '/type/1',
  },
  {
    name: 'fighting',
    link: '/type/2',
  },
  {
    name: 'flying',
    link: '/type/3',
  },
  {
    name: 'poison',
    link: '/type/4',
  },
  {
    name: 'ground',
    link: '/type/5',
  },
  {
    name: 'rock',
    link: '/type/6',
  },
  {
    name: 'bug',
    link: '/type/7',
  },
  {
    name: 'ghost',
    link: '/type/8',
  },
  {
    name: 'steel',
    link: '/type/9',
  },
  {
    name: 'fire',
    link: '/type/10',
  },
];
