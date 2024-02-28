export type SelectOption = {
  label: string;
  value: string | number;
};

// props for single selected option
export type SingleSelectProps = {
  multiple?: false;
  onChange: (value: SelectOption | undefined) => void;
  value?: SelectOption; // single option or undefined => use value?
};

// props for multiselect
export type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[]; // array of options
  onChange: (value: SelectOption[]) => void;
};

export type SelectProps = {
  options: SelectOption[]; // array of different options
} & (SingleSelectProps | MultipleSelectProps); // adding props depends on number of selected
