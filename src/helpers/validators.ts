// Constants
import { regexps, formFieldNames } from '../constants';

const {
  authFormFieldNames: {
    password,
    confirmPassword,
    lastName,
    firstName,
    email,
  },
} = formFieldNames;

const { emailRegexp } = regexps;

const validators = {
  authFormValidator: (name: string, value: string, optionalValue?: string): boolean => {
    switch (name) {
      case lastName:
      case firstName:
        return value.length > 2;
      case email:
        return emailRegexp.test(value);
      case password:
        return value.length >= 8;
      case confirmPassword:
        return value === optionalValue;
      default:
        return false;
    }
  },
};

export default validators;
