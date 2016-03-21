'use strict';

/* global require */

const LoginForm = require(`login-form`);

test(`the LoginForm class exists`, (assert) => {
  assert.ok(LoginForm, `The "login-form" module should export a class`);

  assert.ok(new LoginForm() instanceof LoginForm,
    `The LoginForm should be a class or constructor function`);
});
