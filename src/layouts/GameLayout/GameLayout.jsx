import React from 'react';
import { Outlet } from 'react-router-dom';

import './style.css';

import { Button, Layout } from 'antd';
import logo from '../../components/Header/img/image.png';

const {
  Header, Content
} = Layout;

function GameLayout() {
  return (
    <Layout>
      <Header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__info-block">
          <Button type="primary" shape="round">Game rules</Button>
          <span className="header__info-text">Points: 0</span>
        </div>
      </Header>
      <Layout>
        <Content className="game-layout">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default GameLayout;
