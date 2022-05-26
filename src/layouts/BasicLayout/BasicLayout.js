import React from 'react';
import { Outlet } from 'react-router-dom';

import './style.css';

import { Button, Layout } from 'antd';
import { useNavigate } from 'react-router';
import { LogoutOutlined } from '@ant-design/icons';
import logo from '../../components/Header/img/logo4.png';

const {
  Header, Content
} = Layout;

function BasicLayout() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/whoami');
  };

  const onClickLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
    navigate('/signin');
  };

  return (
    <Layout>
      <Header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__info-block">
          <div className="header__whoami-wrap">
            <Button type="primary" onClick={onClick}>Who am i?</Button>
            <LogoutOutlined className="head__logout" onClick={onClickLogout} />
          </div>
        </div>
      </Header>
      <Layout>
        <Content className="basic-layout">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
