
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
    return this.userDirectory.reduce((carry, current) => {
      if (current.email === username && current.password === password) {
        return true;
      }

      return carry;
    }, false);
  }

  validateInputs() {
    const emailInput = document.querySelector(`.login-form__email`);
    const passwordInput = document.querySelector(`.login-form__password`);

    this.addEventListener(`submit`, (ev) => {


      if (emailInput === passwordInput) {
        return ``;
      }
      return `The credentials are invalid`;
    });
  }
}
