import React from 'react';
import { Outlet } from 'react-router-dom';

import './style.css';

import { Button, Layout } from 'antd';
import { useNavigate } from 'react-router';
import logo from '../../components/Header/img/image.png';

const {
  Header, Content
} = Layout;

function BasicLayout() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/whoami');
  };

  return (
    <Layout>
      <Header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__info-block">
          <div className="header__whoami-wrap">
            <Button type="primary" onClick={onClick}>Who am i?</Button>
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
