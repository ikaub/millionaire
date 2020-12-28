import React from 'react';
import { cleanup, render, getByText, fireEvent } from '@testing-library/react';

import { Game } from './Game';
import { gameConfig } from './../../config/game.config';

afterEach(cleanup);
beforeEach(() => {
  render(<Game />);
});

describe('game', () => {
  it('should render appropriate number of tiles', () => {
    expect(document.querySelectorAll('.tile').length).toBe(Object.keys(gameConfig.questions[0].answers).length);
  });

  it('should ask the next question when right answer is selected', () => {
    const answerTile = getByText(
      document.documentElement,
      gameConfig.questions[0].answers[gameConfig.questions[0].correctAnswers[0]],
      { exact: false },
    );
    fireEvent.click(answerTile);
    setTimeout(() => {
      expect(answerTile).not.toBeVisible();
    }, 2 * gameConfig.nextQuestionTimeout);
  });
});
