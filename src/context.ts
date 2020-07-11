import { createContext } from 'react';
import { Context as ContextType } from './types';

export const Context = createContext<ContextType>({
  filters: [],
  selectedFilters: [],
  toggleFilterHandler: () => {},
});
