import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './style.css';

import { Button, Layout } from 'antd';
import logo from '../../components/Header/img/image.png';

const {
  Header, Content
} = Layout;

function GameLayout(props) {
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
        <Content>
          {props.children}
          {/* eslint-disable-next-line react/prop-types */}
          {props.radio}
          {/* eslint-disable-next-line react/prop-types */}
          {props.button}
        </Content>
      </Layout>
    </Layout>
  );
}

GameLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GameLayout;
