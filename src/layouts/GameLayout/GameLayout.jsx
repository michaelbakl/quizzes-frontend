import React from 'react';
import { Outlet } from 'react-router-dom';

import './style.css';

import { Layout } from 'antd';
import logo from '../../components/Header/img/image.png';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

const {
  Header, Content
} = Layout;

function GameLayout() {
  return (
    <Layout>
      <Header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__info-block">
          <ModalWindow className="header__modal-window" />
          <div className="header__info-text-wrap">
            <span className="header__info-text">Points: 0</span>
          </div>
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
