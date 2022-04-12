import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router';

import './style.css';

const GameFinish = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="game-finish__result-window result-window">
          <h1 className="result-window__header">Results</h1>
          <div className="result-window__content">
            Your total: 10 points
            Record: 10 points
          </div>
        </div>
        <Button
          type="primary"
          shape="round"
          className="game-finish__button"
          active
          onClick={() => navigate('/', { replace: true })}
        >
          Start again
        </Button>
      </div>
    </div>
  );
};

export default GameFinish;
