import React from 'react';

import './style.css';
import Button from '../Button/Button';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">7 quizzes</div>
      <div className="header__info-block">
        <Button className="header__button">Game rules</Button>
        <span className="header__info-text">Points: 0</span>
      </div>
    </header>
  );
}

export default Header;
