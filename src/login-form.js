
export default class LoginForm {
  constructor() {
    this.userDirectory = [
      { email: `aaron@theironyard.com`, password: `password123` },
      { email: `admin@google.com`, password: `pandas` },
      { email: `stefan@stefantheofilos.com`, password: `honeycrisp` },
    ];
  }

  validate(username, password) {
    this.username = username;
    this.password = password;

    if (username === this.userDirectory && password === this.userDirectory) {
      return this.userDirectory;
    }
    return false;
  }
}
