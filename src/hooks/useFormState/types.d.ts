import { Dispatch, SetStateAction } from 'react';

export interface IFormState {
  [key: string]: {
    value: string | any[];
    valid: boolean;
    touched: boolean;
  };
}

interface IFormStateValue<V> {
  formValues: IFormState;
  setFormValues: Dispatch<SetStateAction<IFormState>>;
  resetFormValues: () => void;
  getValues: () => V;
}
