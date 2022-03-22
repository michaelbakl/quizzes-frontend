import React from 'react';

import GameLayout from '../../layouts/GameLayout/GameLayout';
import Question from '../../componets/Question/Question';

import './style.css';
import Button from '../../componets/Button/Button';

function Game() {
  const question = {
    header: 'Question 1',
    text: 'this.props.text',
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
        <div className="game__question"><Question question={question} /></div>
        {/* eslint-disable-next-line no-alert */}
        <Button className="answer-button" active onClick={() => alert('Answer accepted!')}>Answer</Button>
      </div>
    </GameLayout>
  );
}

// function Game() {
//   return (
//     <GameLayout>
//       <div className="game">
//         <Question question={question} />
//       </div>
//     </GameLayout>
//   );
// }

export default Game;
