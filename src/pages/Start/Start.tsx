import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button/Button';

import hand from './../../assets/hand.svg';

export const Start: React.FC = () => {
  return (
    <div className="start-screen">
      <img alt="Hand" src={hand} />
      <div>
        <span className="welcome-label">Who wants to be a millionaire?</span>
        <Link to="/game">
          <Button>Start</Button>
        </Link>
      </div>
    </div>
  );
};
