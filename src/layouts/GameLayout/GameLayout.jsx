import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import Header from '../../componets/Header/Header';

import './style.css';

function GameLayout(props) {
  return (
    <>
      <Header />
      <main className="page">
        {props.children}
        {/* eslint-disable-next-line react/prop-types */}
        {props.button}
      </main>
    </>
  );
}

GameLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GameLayout;
