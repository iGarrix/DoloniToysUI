export type FormikDropdownProps = {
  name: string;
  title: string,
  options: Array<IOptionPair>;
};

export interface IOptionPair {
  key: string,
  value: string,
}
