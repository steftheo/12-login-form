
export default class LoginForm {
  constructor(form, email) {
    this.userDirectory = [
      { email: `aaron@theironyard.com`, password: `password123` },
      { email: `admin@google.com`, password: `pandas` },
      { email: email, password: `honeycrisp` },
    ];
  }

  validate(username, password) {
    return this.userDirectory.reduce((carry, current) => {
      if (current.email === username && current.password === password) {
        return true;
      }

      return carry;
    }, false);
  }
}
