export const textFieldSet = new Set([
  'color',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'tel',
  'text',
  'time',
  'url',
  'week',
]);

export const checkRadioFieldSet = new Set(['checkbox', 'radio']);

export const multiFieldSet = new Set(['checkbox']);

export interface FieldOption {
  label: string;
  value: string;
  default?: boolean;
}

export type FormField = {
  type: string;
  name: string;
  label: string;
  options?: FieldOption[];
  placeholder?: string | number;
  required?: boolean;
  shortStyle?: boolean;
  sectionTitle?: string;
};
