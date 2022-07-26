import { useState, useCallback } from 'react';


// Types
import { IFormState, IFormStateValue } from './types';


const useFormState = <V>(...values: string[]): IFormStateValue<V> => {

  const setInitialValues = (): IFormState => {
    const initialValues: IFormState = {};

    values.forEach((value: string) => {
      initialValues[value] = {
        value: '',
        valid: false,
        touched: false,
      };
    });

    return initialValues;
  };

  const [formValues, setFormValues] = useState<IFormState>(setInitialValues);

  const resetFormValues = useCallback(() => {
    setFormValues(setInitialValues);
  }, [setFormValues]);

  const getValues = useCallback((): V => {
    // Todo improve this function
    const data: {[index: string]: any} = {};

    Object.entries(formValues).forEach(([key, value]: [string, any]) => {
      data[key] = value.value;
    });

    return data as V;
  }, [formValues]);


  return { formValues, setFormValues, resetFormValues, getValues };
};

export default useFormState;
