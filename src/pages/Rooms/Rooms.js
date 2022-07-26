import React, { useEffect, useState } from 'react';

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Button } from 'antd';
import { getQuestion } from '../../actions/question/actions';
import { getRooms, joinRoom } from '../../actions/rooms/actions';
import { getGameInfo, startGame } from '../../actions/game/actions';
import { createRoom, getRoom } from '../../actions/room/actions';
import { getWhoami } from '../../actions/whoami/actions';

let currentRoomId;

const Rooms = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disabledStartGame, setDisabledStartGame] = useState(true);
  const rooms = useSelector(state => state.roomsReducer.rooms);
  const roomInfo = useSelector(state => state.roomReducer.room);
  const isAuthorized = useSelector(state => state.authReducer.authState);
  const startGameRes = useSelector(state => state.gameReducer.game);
  const whoamiInfo = useSelector(state => state.whoamiReducer.whoami);

  const onClickRoom = (roomId) => {
    currentRoomId = roomId;
    dispatch(getGameInfo(roomId));
    dispatch(getRoom(roomId));
    setDisabledStartGame(false);
  };

  const addRoom = () => {
    // eslint-disable-next-line no-alert
    const roomName = prompt('Type room name', '');
    dispatch(createRoom(roomName));
  };

  const onClickStart = () => {
    dispatch(getRoom(currentRoomId));
    if ('NOT_CREATED'.includes(startGameRes.status)) {
      console.log('Not created');
      if (Object.is(roomInfo.ownerId, whoamiInfo.userId)) {
        dispatch(startGame(currentRoomId));
      }
    } else if ('IN_PROCESS'.includes(startGameRes.status)) {
      console.log('IN PROGRESS');
      if (!Object.is(roomInfo.ownerId, whoamiInfo.userId)) {
        dispatch(joinRoom(currentRoomId));
      }
      dispatch(getQuestion(currentRoomId, startGameRes.questionId));
      navigate('/game-start');
    } else if (startGameRes.questionId.length > 0) {
      dispatch(getQuestion(currentRoomId, startGameRes.questionId));
      navigate('/game-start');
    } else {
      // eslint-disable-next-line no-alert
      alert('You can`t start game in current room!');
    }
  };

  const onClickCheckedRoom = () => {
    const elem = document.getElementById(`room_${currentRoomId}`);
    elem.style.background = 'green';
  };

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/signin');
    }
    dispatch(getRooms());
    dispatch(getWhoami());
  }, [dispatch, startGameRes, rooms, isAuthorized, navigate]);

  return (
    <div>
      <div className="rooms-menu">
        <h1 className="rooms-menu__header">Rooms</h1>
        {rooms.length > 0 ? (
          <div className="rooms-menu__content">
            {/* eslint-disable-next-line react/jsx-key */}
            {rooms.map((room) => (
              // eslint-disable-next-line react/jsx-key
              <div
                key={room.roomId}
                className="rooms-menu__content__item"
                id={`room_${room.roomId}`}
                onClick={() => {
                  onClickRoom(room.roomId);
                }}
              >
                {room.roomName}
              </div>
            ))}
          </div>
        )
          : (
            <div className="rooms-menu__content">
              No rooms!
            </div>
          )}
        <Button className="start-game_add-new-room-button" type="primary" shape="round" onClick={addRoom}>
          Add
          room
        </Button>
        <div className="start-game_temp">a</div>
      </div>
      <Button className="start-game__button" type="primary" shape="round" onClick={onClickStart} disabled={disabledStartGame}>Start game</Button>
    </div>
  );
};

export default Rooms;
