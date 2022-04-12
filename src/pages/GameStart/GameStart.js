import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const GameStart = () => (
  <div>
    <div className="start-game__rules-window rules-window">
      <h1 className="rules-window__header">Rules</h1>
      <div className="rules-window__content">
        Ipdb;knasldkvn as;pod l sd;lkkgn dfnblkxdfnlkdn
        b/lkdb jkghv jh,gl ikΩ≈©˙cv likzjhdsvli sdliv
        hodvhilsjhl l dihb lxih  xfjlidhf lxd iufjhlxdjkhfbnvdxfg xdf
      </div>
    </div>
    <div className="start-game__button">
      <Link to="/game">Game start</Link>
    </div>
  </div>
);

export default GameStart;
