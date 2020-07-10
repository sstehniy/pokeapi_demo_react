export type Filter = {
  name: string;
  link: string;
};

export type Pokemon = {
  name: string;
  order: number;
  photo: string;
  types: string[];
};

export type FilterProps = {
  filters: Filter[];
  selectedFilters: Filter[] | [];
  toggleFilter: (name: string) => void;
};

export type DropdownItemProps = {
  name: string;
  onSelected: (name: string) => void;
  selected: boolean;
};

export type ListProps = {
  items: Pokemon[] | [];
  loading: boolean;
  error: boolean;
};

export type HookReturnType = {
  data: Pokemon[] | any[];
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
