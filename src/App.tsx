import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Game } from './pages/Game/Game';
import { GameOver } from './pages/GameOver/GameOver';
import { Start } from './pages/Start/Start';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Start />
      </Route>
      <Route path="/game" exact>
        <Game />
      </Route>
      <Route path="/game-over" exact>
        <GameOver />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
