import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
import Game from './pages/Game/Game';
import GameStart from './pages/GameStart/GameStart';
import GameFinish from './pages/GameFinish/GameFinish';

import './index.css';
import GameLayout from './layouts/GameLayout/GameLayout';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GameLayout />}>
        <Route index element={<GameStart />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-finish" element={<GameFinish />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
