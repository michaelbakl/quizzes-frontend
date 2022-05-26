import React from 'react';
import { Outlet } from 'react-router-dom';

import './style.css';

import { Layout } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import logo from '../../components/Header/img/logo4.png';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

const {
  Header, Content
} = Layout;

function GameLayout() {
  const navigate = useNavigate();
  const answerResponse = useSelector(state => state.answerReducer.answerResponse);

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
          <ModalWindow className="header__modal-window" />
          <div className="header__info-text-wrap">
            <span className="header__info-text">{`Score ${answerResponse.totalScore}`}</span>
          </div>
          <LogoutOutlined className="head__logout" onClick={onClickLogout} />
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
