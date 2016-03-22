
export default class LoginForm {
  constructor() {
    this.userDirectory = [
      { email: `aaron@theironyard.com`, password: `password123` },
      { email: `admin@google.com`, password: `pandas` },
      { email: `email@email.com`, password: `honeycrisp` },
    ];
}

validate(username, password) {
  this.username = username;
  this.password = password;

  const findValid = (snowball, current);
    if (current.username === username && current.password === password) {
      return true;
    }
    return snowball;
  };
}
