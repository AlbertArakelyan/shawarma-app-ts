import validators from '../validators';

const { authFormValidator } = validators;

describe('authFormValidator()', () => {
  it('should return proper boolean value for firstName and lastName', () => {
    const firstNameResult = authFormValidator('firstName', 'Albert');
    const lastNameResult = authFormValidator('lastName', 'Arakelyan');

    expect(typeof firstNameResult).toBe('boolean');
    expect(typeof lastNameResult).toBe('boolean');
  });

  it('should return false when firstName and lastName value length is smaller than 2', () => {
    const firstNameResult = authFormValidator('firstName', 'A');
    const lastNameResult = authFormValidator('lastName', 'A');

    expect(firstNameResult).toBe(false);
    expect(lastNameResult).toBe(false);
  });

  it('should return false in case of empty strings for all kind of fields', () => {
    const firstNameResult = authFormValidator('firstName', '');
    const lastNameResult = authFormValidator('lastName', '');
    const emailResult = authFormValidator('email', '');
    const passwordResult = authFormValidator('password', '');
    const confirmPasswordResult = authFormValidator('confirmPassword', '');

    expect(firstNameResult).toBe(false);
    expect(lastNameResult).toBe(false);
    expect(emailResult).toBe(false);
    expect(passwordResult).toBe(false);
    expect(confirmPasswordResult).toBe(false);
  });

  it('should return false when invalid name is passed', () => {
    const result = authFormValidator('notExistingField', 'no matter what');

    expect(result).toBe(false);
  });

  it('should return true in case of valid email value', () => {
    const emailResult = authFormValidator('email', 'test@mail.loc');

    expect(emailResult).toBe(true);
  });

  it('should return false in case of valid email value', () => {
    const emailResult = authFormValidator('email', 'nutSuchAMail');

    expect(emailResult).toBe(false);
  });

  it('should return false when passwords length is smaller than 8', () => {
    const passwordResult = authFormValidator('password', 'test');

    expect(passwordResult).toBe(false);
  });

  it('should return true when passwords length is equal or greater than 8', () => {
    const passwordResult = authFormValidator('password', 'passwordMoreThan8Symbols');

    expect(passwordResult).toBe(true);
  });

  it('should return false when password and confirmPassword values are not equal', () => {
    const passwordResult = authFormValidator('confirmPassword', 'testtest', 'testtest1');

    expect(passwordResult).toBe(false);
  });

  it('should return true when password and confirmPassword values are equal', () => {
    const passwordResult = authFormValidator('confirmPassword', 'testtest1', 'testtest1');

    expect(passwordResult).toBe(true);
  });
})

