import { ChangeEvent, Dispatch, SetStateAction } from 'react';

// Types
import { IFormState } from '../hooks/useFormState/types';

type validationFnType = (name: string, value: string, optionalValue?: string) => boolean;
type setterFnTypeEvent = (e: ChangeEvent<HTMLInputElement>) => void;
type setterFnTypeGroup = (newValues: any[]) => void;
type setterFnType = setterFnTypeEvent | setterFnTypeGroup;

const handleStateChange = (setValuesCallBack: Dispatch<SetStateAction<IFormState>>, validatorFn: validationFnType) => (e: any): void => {
  const { name, value, dataset: { dependency } } = e.target;

  setValuesCallBack((prevValues) => {
    return {
      ...prevValues,
      [name]: {
        ...prevValues[name],
        value,
        touched: true,
        valid: validatorFn(name, value, dependency),
      },
    };
  });
};

export default handleStateChange;
