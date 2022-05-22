import React, { useEffect } from 'react';

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Button } from 'antd';
import { getQuestion } from '../../actions/question/actions';
import { getRooms, joinRoom } from '../../actions/rooms/actions';
import { getGameInfo, startGame } from '../../actions/game/actions';
import { createRoom, getRoom } from '../../actions/room/actions';

let currentRoomId;

const Rooms = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rooms = useSelector(state => state.roomsReducer.rooms);

  const startGameRes = useSelector(state => state.gameReducer.game);

  const onClick = () => {
    navigate('/game');
  };

  const onClickRoom = (roomId) => {
    currentRoomId = roomId;
    dispatch(getGameInfo(roomId));
  };

  const addRoom = () => {
    // eslint-disable-next-line no-alert
    const roomName = prompt('Type room name', '');
    dispatch(createRoom(roomName));
  };

  const onClickStart = () => {
    dispatch(getRoom(currentRoomId));
    if ('NOT_CREATED'.includes(startGameRes.status)) {
      dispatch(startGame(currentRoomId));
    } else if ('IN_PROCESS'.includes(startGameRes.status)) {
      dispatch(joinRoom(currentRoomId));
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

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch, startGameRes, rooms]);

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
                  const elem = document.getElementById(`room_${room.roomId}`);
                  elem.style.background = 'green';
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
        <Button type="primary" shape="round" onClick={addRoom}>Add room</Button>
      </div>
      <Button className="start-game__button" type="primary" shape="round" onClick={onClickStart}>Start game</Button>
    </div>
  );
};

export default Rooms;
