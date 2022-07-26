import formFieldNames from './formFieldNames';

const { authFormFieldNames: {
  password,
  confirmPassword,
  lastName,
  firstName,
  email,
} } = formFieldNames;

const authFormNames = [firstName, lastName, email, password, confirmPassword];

export default authFormNames;
