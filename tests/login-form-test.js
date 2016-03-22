'use strict';

/* global require */

const LoginForm = require(`login-form`);

test(`the LoginForm class exists`, (assert) => {
  const formEl = document.createElement(`form`);

  assert.ok(LoginForm, `The "login-form" module should export a class`);

  assert.ok(new LoginForm(formEl, `email@email.com`) instanceof LoginForm,
    `The LoginForm should be a class or constructor function`);
});

test(`the LoginForm can check for valid login attempts`, (assert) => {
  const formEl = document.createElement(`form`);
  const form = new LoginForm(formEl, `email@email.com`);

  assert.ok(form.validate(`aaron@theironyard.com`, `password123`),
    `The form should validate with credentials aaron@theironyard.com:password123`);
  assert.ok(form.validate(`admin@google.com`, `pandas`),
    `The form should validate with credentials admin@google.com:pandas`);
  assert.ok(form.validate(`email@email.com`, `honeycrisp`),
    `The form should validate with credentials email@email.com:pandas`);

  assert.notOk(form.validate(``, ``),
    `The form should not validate with empty credentials`);
  assert.notOk(form.validate(`notavalidemail`, `pass`),
    `The form should not validate with an invalid email notavalidemail:pass`);
  assert.notOk(form.validate(`email@email.com`, `pandas`),
    `The form should not validate with mixed credentials email@email.com:pandas`);

  const formDiff = new LoginForm(formEl, `ryan@theironyard.com`);

  assert.ok(form.validate(`ryan@theironyard.com`, `honeycrisp`),
    `The form should validate with email passed in to the constructor email@email.com:pandas`);
  assert.notOk(form.validate(`email@email.com`, `honeycrisp`),
    `The form should not validate with email not passed into the constructor email@email.com:pandas`);
});
