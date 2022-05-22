import React, { useEffect } from 'react';

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Button } from 'antd';
import { getRules } from '../../actions/rules/actions';
import { getRooms } from '../../actions/rooms/actions';

const GameStart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorized = useSelector(state => state.authReducer.state);
  const questionId = useSelector(state => state.questionReducer.question.questionId);

  // eslint-disable-next-line no-shadow
  const rules = useSelector(state => state.rulesReducer.rules.rules);

  const onClick = () => {
    dispatch(getRooms());
    navigate('/game');
  };

  useEffect(() => {
    // if (!isAuthorized) {
    //   navigate('/signin');
    // }
    dispatch(getRules());
  }, [dispatch, rules]);

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
