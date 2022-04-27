import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.min.css';
import Game from './pages/Game/Game';
import GameStart from './pages/GameStart/GameStart';
import GameFinish from './pages/GameFinish/GameFinish';

import './index.css';
import GameLayout from './layouts/GameLayout/GameLayout';

import store from './store/store';
import BasicLayout from './layouts/BasicLayout/BasicLayout';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<GameStart />} />
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
