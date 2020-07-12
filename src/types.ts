export type Filter = {
  name: string;
  link: string;
};

export type PokemonMin = {
  name: string;
  order: number;
  photo: string;
  types: string[];
};

export type PokemonFull = {
  name: string;
  order: number;
  photos: null | string | string[];
  types: string[];
  abilities: string[];
  moves: string[];
};

export type DropdownItemProps = {
  name: string;
  onSelected: (name: string) => void;
  selected: boolean;
};

export type ListProps = {
  items: PokemonMin[] | [];
  loading: boolean;
  error: boolean;
};

export type HookReturnType = {
  data: PokemonMin[] | any[];
  loading: boolean;
  error: boolean;
};

export type FilterManageProps = {
  filters: Filter[];
  removeFilter: (name: string) => void;
};

export type FilterMinProps = {
  filter: Filter;
  onDelete: () => void;
};

export type CheckboxProps = {
  selected: boolean;
  showPreChecked: boolean;
};

export type Context = {
  filters: Filter[];
  selectedFilters: Filter[] | [];
  toggleFilterHandler: (name: string) => void;
};
