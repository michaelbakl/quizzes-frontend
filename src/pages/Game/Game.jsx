import React from 'react';

import Question from '../../components/Question/Question';

import './style.css';

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
    <div className="game">
      <div className="game__question">
        <Question question={question} />
      </div>
    </div>
  );
}

export default Game;
