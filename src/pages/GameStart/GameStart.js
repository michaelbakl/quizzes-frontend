import React, { useEffect } from 'react';

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Button } from 'antd';
import { getRules } from '../../actions/rules/actions';

const GameStart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorized = useSelector(state => state.authReducer.authState);
  const rules = useSelector(state => state.rulesReducer.rules.rules);

  const onClick = () => {
    navigate('/game');
  };

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/signin');
    }
    dispatch(getRules());
  }, [dispatch, isAuthorized, navigate, rules]);

  return (
    <div>
      <div className="start-game__rules-window rules-window">
        <h1 className="rules-window__header">Rules</h1>
        <div className="rules-window__content">
          {rules}
        </div>
      </div>
      <Button className="start-game__button" type="primary" shape="round" onClick={onClick}>Start game</Button>
    </div>
  );
};

export default GameStart;
