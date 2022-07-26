import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  message, Form, Input
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

import './style.css';
import { signup } from '../../actions/auth/actions';
import EnterButton from '../../components/EnterButton/EnterButton';
import logo from '../../components/Header/img/logo4.png';
import QuizzException from '../../exceptions/QuizzException';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filledLogin, setFilledLogin] = useState(false);
  const [filledPassword, setFilledPassword] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  const isAuthorized = useSelector(state => state.authReducer.authState);

  const validateLogin = (login) => {
    const allLetters = /^[a-zA-Z]+$/;
    return allLetters.test(login);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onFinish = (event) => {
    try {
      if (!validateLogin(event.login)) {
        throw new QuizzException(401, 'Invalid data');
      }
      const res = dispatch(signup(event.username, event.password));
      let errorCode = 0;
      res.then(data => {
        if (data == null || data.error == null) {
          navigate('/signin');
        }
        errorCode = data.error.errorCode;
        if (errorCode == null) {
          navigate('/signin');
        } else if (Object.is(errorCode, 500)) {
          message.error('Server is unavailable', 2);
        } else if (Object.is(errorCode, 401) || Object.is(errorCode, 400)) {
          message.error('Incorrect data', 2);
        }
      });
    } catch (e) {
      onFinishFailed('Unable to sign up! Try again later.');
      message.error('Invalid data!', 2);
    }
  };

  const onClickSignin = () => {
    navigate('/signin');
  };

  useEffect(() => {
    if (isAuthorized) {
      navigate('/rooms');
    }
  }, [isAuthorized, navigate]);

  return (
    <div>
      <div className="form-window__page__header">
        <img className="form-window__page__header-logo" src={logo} alt="7Quizzes" />
      </div>
      <div className="form-window__page">
        <div className="form-window__wrapper">
          <p className="welcome">Sign up for fun!</p>
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <FormItem
              name="username"
              className="form-window__page__login-input"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Username"
                onChange={() => {
                  setFilledLogin(true);
                  if (filledLogin && filledPassword) {
                    setDisabledButton(false);
                  } else {
                    setDisabledButton(true);
                  }
                }}
              />
            </FormItem>
            <FormItem
              name="password"
              className="form-window__page__password-input"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Password"
                onChange={() => {
                  setFilledPassword(true);
                  if (filledLogin && filledPassword) {
                    setDisabledButton(false);
                  } else {
                    setDisabledButton(true);
                  }
                }}
              />
            </FormItem>
            <FormItem>
              <EnterButton text="Sign up" disabled={disabledButton} />
            </FormItem>
          </Form>
          <div className="form-window__signin-redirect" onClick={onClickSignin}>
            Already have an account? Just enter
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
