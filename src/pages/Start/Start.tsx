import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '../../components/Button/Button';

import hand from './../../assets/hand.svg';

export const Start: React.FC = () => {
  const { state }: { state: string | undefined } = useLocation();

  return (
    <div className={state ? 'end-game' : 'start-screen'}>
      <img alt="Hand" src={hand} />
      <div>
        {state && <span className="total-score">Total score:</span>}
        <span className="welcome-label">{state ? `${state} earned` : 'Who wants to be a millionaire?'}</span>
        <Link to="/game">
          <Button>{state ? 'Try again' : 'Start'}</Button>
        </Link>
      </div>
    </div>
  );
};
