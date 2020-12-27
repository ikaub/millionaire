import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Game } from './pages/Game/Game';
import { Start } from './pages/Start/Start';

import './styles/index.scss';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Start />
      </Route>
      <Route path="/game" exact>
        <Game />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
