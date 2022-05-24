import React, { useEffect } from 'react';

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Button } from 'antd';
import { getRooms } from '../../actions/rooms/actions';
import { getWhoami } from '../../actions/whoami/actions';

const Whoami = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorized = useSelector(state => state.authReducer.authState);
  const whoamiInfo = useSelector(state => state.whoamiReducer.whoami);

  const onClick = () => {
    dispatch(getRooms());
    navigate('/rooms');
  };

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/signin');
    }
    dispatch(getWhoami());
  }, [dispatch, isAuthorized, navigate]);

  return (
    <div>
      <div className="whoami-window">
        <h1 className="whoami__header">Your info</h1>
        <div className="whoami-window__content">
          {whoamiInfo.email}
        </div>
      </div>
      <Button className="whoami__button" type="primary" shape="round" onClick={onClick}>Check rooms</Button>
    </div>
  );
};

export default Whoami;
