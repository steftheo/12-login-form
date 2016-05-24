
export default class LoginForm {
  constructor(form, email) {
    this.form = form;
    this.form.addEventListener(`submit`, (ev) => {
      ev.preventDefault();
      this.validateInputs();
    });

    this.userDirectory = [
      { username: `aaron@theironyard.com`, password: `password123` },
      { username: `admin@google.com`, password: `pandas` },
      { username: email, password: `honeycrisp` },
    ];
  }

  validate(username, password) {
    this.username = username;
    this.password = password;

    const findValid = (snowball, current) => {
      if (current.username === username && current.password === password) {
        return true;
      }

      return snowball;
    };


    return this.userDirectory.reduce(findValid, false);
  }

  validateInputs() {
    const emailInput = document.querySelector(`.login-form__email`).value;
    const passwordInput = document.querySelector(`.login-form__password`).value;

    this.addEventListener(`submit`, (ev) => {


      if (emailInput === passwordInput) {
        return ``;
      }
      return `The credentials are invalid`;
    });
  }
}
