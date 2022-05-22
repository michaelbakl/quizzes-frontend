import React from 'react';

import GameLayout from '../../layouts/GameLayout/GameLayout';
import Question from '../../components/Question/Question';

import './style.css';

// eslint-disable-next-line import/order
import { Button } from 'antd';

function Game() {
  const question = {
    header: 'Question 1',
    text: 'KBJDBkajsdbv slkdjvncsldkvc rsljgkfneldv lskjdfnveslkdjfnv ldkfnv efv awkljfnvlskdv slihvkn;svd',
    answers: [
      {
        id: 'qwerty123',
        text: 'Nope',
      },
      {
        id: 'qwerty333',
        text: 'No',
      },
      {
        id: 'qwerty444',
        text: 'Yeap',
      },
    ],
  };

  return (
    <GameLayout>
      <div className="game">
        <div className="game__question">
          <Question question={question} />
        </div>
        {/* eslint-disable-next-line no-alert */}
        <Button type="primary" shape="round" className="answer-button" active onClick={() => alert('Answer accepted')}>Answer</Button>
      </div>
    </GameLayout>
  );
}

export default Game;
