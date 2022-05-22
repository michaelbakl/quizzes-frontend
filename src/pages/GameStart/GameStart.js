import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const GameStart = () => {
  const [rules, setRules] = useState('Rules');

  useEffect(() => {
    fetch('/data.json').then(response => response.json()).then(data => setRules(data.rules)).catch(() => {
      setRules('Rules');
    });
  }, []);

  return (
    <div>
      <div className="start-game__rules-window rules-window">
        <h1 className="rules-window__header">Rules</h1>
        <div className="rules-window__content">
          {rules}
        </div>
      </div>
      <div className="start-game__button">
        <Link to="/game">Game start</Link>
      </div>
    </div>
  );
};
export default GameStart;
