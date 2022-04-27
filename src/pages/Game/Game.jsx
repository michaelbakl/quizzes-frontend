import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import Question from '../../components/Question/Question';

import './style.css';

function Game() {
  const question = useSelector(state => state.questionReducer.question, shallowEqual);

  return (
    <div className="game">
      <div className="game__question">
        <Question question={question} />
      </div>
    </div>
  );
}

export default Game;
