import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.min.css';
import { Navigate } from 'react-router';
import Game from './pages/Game/Game';
import GameStart from './pages/GameStart/GameStart';
import GameFinish from './pages/GameFinish/GameFinish';

import './index.css';
import GameLayout from './layouts/GameLayout/GameLayout';

import store from './store/store';
import BasicLayout from './layouts/BasicLayout/BasicLayout';
import Rooms from './pages/Rooms/Rooms';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Whoami from './pages/Whoami/Whoami';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate replace to="/signin" />} />
        <Route path="/" element={<BasicLayout />}>
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/game-start" element={<GameStart />} />
          <Route path="/whoami" element={<Whoami />} />
        </Route>
        <Route path="/game" element={<GameLayout />}>
          <Route index element={<Game />} />
        </Route>
        <Route path="/" element={<BasicLayout />}>
          <Route path="/game-finish" element={<GameFinish />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
