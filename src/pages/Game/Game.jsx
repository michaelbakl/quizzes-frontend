import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { shallowEqual, useSelector } from 'react-redux';

import Question from '../../components/Question/Question';

import './style.css';

function Game() {
  const question = useSelector(state => state.questionReducer.question, shallowEqual);
  const room = useSelector(state => state.roomReducer.room);
  const navigate = useNavigate();
  const isAuthorized = useSelector(state => state.authReducer.state);

  useEffect(() => {
    // if (!isAuthorized) {
    //   navigate('/signin');
    // }
  }, [isAuthorized, navigate]);

  return (
    <div className="game">
      <div className="game__question">
        <Question question={question} roomId={room.roomId} />
      </div>
    </div>
  );
}

export default Game;
