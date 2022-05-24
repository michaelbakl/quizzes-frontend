import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Question from '../../components/Question/Question';

import './style.css';
import { getGameInfo } from '../../actions/game/actions';

function Game() {
  const dispatch = useDispatch();
  const question = useSelector(state => state.questionReducer.question, shallowEqual);
  const room = useSelector(state => state.roomReducer.room);
  const navigate = useNavigate();
  const isAuthorized = useSelector(state => state.authReducer.authState);
  const gameInfo = useSelector(state => state.gameReducer.game);

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/signin');
    }
    console.log('GameInfo: ');
    console.log(gameInfo);
    dispatch(getGameInfo(room.roomId));
  }, [dispatch, isAuthorized, navigate, room.roomId, gameInfo]);

  return (
    <div className="game">
      <div className="game__question">
        <Question
          question={question}
          roomId={room.roomId}
          questionsCount={gameInfo.questionsCount}
          questionNumber={gameInfo.questionNumber}
        />
      </div>
    </div>
  );
}

export default Game;
