import React, { useState } from 'react';

import './style.css';

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validateLogin = (login) => {
    const allLetters = /^[a-zA-Z]+$/;
    return allLetters.test(login) && login.length > 3;
  };

  const validatePassword = (password) => {
    const smallLetters = /^[a-z]/;
    const uppercaseLetters = /^[A-Z]+$/;
    const number = /[0-9]/;
    // eslint-disable-next-line max-len
    return (smallLetters.test(password) && uppercaseLetters.test(password) && number.test(password)) && password.length > 5;
  };

  const onClick = () => {
    const logInput = document.getElementsByTagName('input')[0];
    const pswdInput = document.getElementsByTagName('input')[1];
    const login = logInput.value;
    const password = pswdInput.value;
    // eslint-disable-next-line no-console
    console.log(login);
    // eslint-disable-next-line no-console
    console.log(password);

    if (!validateLogin(login)) {
      // eslint-disable-next-line no-alert
      alert('Wrong login');
    }
    if (!validatePassword(password)) {
      // eslint-disable-next-line no-alert
      alert('Wrong password');
    }
  };

  const Style = showPassword ? 'input-window__password-input__eye' : 'input-window__password-input__no-eye';

  return (
    <div className="password-window">
      <div className="input-window">
        <div className="input-window__container">
          <input
            className="input-window__password-input"
            type={showPassword ? 'text' : 'password'}
            placeholder="Введите пароль"
          />
        </div>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          className={Style}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
