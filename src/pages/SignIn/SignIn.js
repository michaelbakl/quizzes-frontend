import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import {
  message, Form, Input
} from 'antd';

import FormItem from 'antd/lib/form/FormItem';

import './style.css';
import { signin } from '../../actions/auth/actions';
import EnterButton from '../../components/EnterButton/EnterButton';
import logo from '../../components/Header/img/logo4.png';
import { getRooms } from '../../actions/rooms/actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorized = useSelector(state => state.authReducer.authState);
  const errorResponse = useSelector(state => state.errorReducer.error);

  // const validateLogin = (login) => {
  //   const allLetters = /^[a-zA-Z]+$/;
  //   return allLetters.test(login);
  // };
  //
  // const validatePassword = (password) => {
  //   const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  //   return re.test(password);
  // };

  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo, 2);
  };

  const onFinish = (event) => {
    const res = dispatch(signin(event.username, event.password));
    let errorCode = 0;
    res.then(data => {
      if (data == null || data.error == null) {
        navigate('/rooms');
      }
      errorCode = data.error.errorCode;
      if (errorCode == null) {
        dispatch(getRooms);
        navigate('/rooms');
      } else if (Object.is(errorCode, 500)) {
        message.error('Server is unavailable', 2);
      } else if (Object.is(errorCode, 401) || Object.is(errorCode, 400)) {
        message.error('Incorrect data', 2);
      } else if (Object.is(errorCode, 404)) {
        message.error('Invalid login or password', 2);
      }
    });
  };

  const onClickSignup = () => {
    navigate('/signup');
  };

  useEffect(() => {
    if (isAuthorized) {
      navigate('/rooms');
    }
  }, [isAuthorized, navigate, errorResponse]);

  return (
    <div>
      <div className="form-window__page__header">
        <img className="form-window__page__header-logo" src={logo} alt="7Quizzes" />
      </div>
      <div className="form-window__page">
        <div className="form-window__wrapper">
          <p className="welcome">Fun is waiting for you! Just enter!</p>
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
              <Input size="large" placeholder="Username" />
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
              <Input.Password size="large" placeholder="Password" />
            </FormItem>
            <FormItem>
              <EnterButton text="Enter" />
            </FormItem>
          </Form>
          <div className="form-window__signup-redirect" onClick={onClickSignup}>Don`t have an account? Create now</div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
