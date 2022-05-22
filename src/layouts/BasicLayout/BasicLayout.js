import React from 'react';
import { Outlet } from 'react-router-dom';

import './style.css';

import { Layout } from 'antd';
import logo from '../../components/Header/img/image.png';

const {
  Header, Content
} = Layout;

function BasicLayout() {
  return (
    <Layout>
      <Header className="header">
        <img className="header__logo" src={logo} alt="logo" />
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
