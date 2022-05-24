import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

import './style.css';
import { signin } from '../../actions/auth/actions';
import EnterButton from '../../components/EnterButton/EnterButton';
import logo from '../../components/Header/img/image.png';
import { getRooms } from '../../actions/rooms/actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthorized = useSelector(state => state.authReducer.authState);

  const validateLogin = (login) => {
    const allLetters = /^[a-zA-Z]+$/;
    return allLetters.test(login);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  };

  const onFinish = (event) => {
    dispatch(signin(event.username, event.password));
    dispatch(getRooms);
    navigate('/rooms');
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onClick = () => {
    navigate('/rooms');
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
              <Input />
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
              <Input.Password />
            </FormItem>
            <FormItem>
              <EnterButton text="Enter" />
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
