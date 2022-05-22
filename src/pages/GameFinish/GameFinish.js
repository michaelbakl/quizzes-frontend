import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router';

import './style.css';
import { useSelector } from 'react-redux';

const GameFinish = () => {
  const navigate = useNavigate();
  const isAuthorized = useSelector(state => state.authReducer.state);

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/signin');
    }
  }, [isAuthorized, navigate]);

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
