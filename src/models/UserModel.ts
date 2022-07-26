class UserModel {
  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public role: string;

  constructor(id: string, firstName: string, lastName: string, email: string, role: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
  }
}

export default UserModel;
