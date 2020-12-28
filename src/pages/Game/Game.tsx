import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Hamburger } from '../../components/Hamburger/Hamburger';
import { TileAnswer } from '../../components/TileAnswer/TileAnswer';
import { TileGain } from '../../components/TileGain/TileGain';

import { gameConfig } from './../../config/game.config';

export const Game: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [openPanel, setOpenPanel] = useState(false);
  const history = useHistory();

  const handleAnswer = (selectedAnswer: string) => {
    const { correctAnswers } = gameConfig.questions[currentQuestion];

    setTimeout(() => {
      if (correctAnswers.includes(selectedAnswer)) {
        if (currentQuestion !== gameConfig.questions.length - 1) setCurrentQuestion(currentQuestion + 1);
        else
          history.push({
            pathname: '/',
            state: gameConfig.gain[currentQuestion],
          });
      } else
        history.push({
          pathname: '/',
          state: currentQuestion === 0 ? '$0' : gameConfig.gain[currentQuestion - 1],
        });
    }, 2 * gameConfig.nextQuestionTimeout);
  };

  const togglePanel = () => {
    setOpenPanel(!openPanel);
  };

  return (
    <div className="game">
      <div className="game__mobile__nav" onClick={togglePanel}>
        <Hamburger />
      </div>
      <div className="game__questions">
        <span className="game__questions__body">{gameConfig.questions[currentQuestion].body}</span>
        <div className="game__questions__answers-box">
          {Object.keys(gameConfig.questions[currentQuestion].answers).map((key) => (
            <div key={key + currentQuestion} className="game__questions__answer">
              <TileAnswer
                answer={gameConfig.questions[currentQuestion].answers[key]}
                correctAnswers={gameConfig.questions[currentQuestion].correctAnswers}
                variant={key}
                onSelect={handleAnswer}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`${openPanel ? 'game__mobile__open' : ''}`}>
        <div className="game__gain">
          <span className="game__mobile__close" onClick={togglePanel}>
            &#10006;
          </span>
          {gameConfig.gain.map((gain, index) => (
            <div key={gain}>
              <TileGain
                gain={gain}
                state={currentQuestion === index ? 'active' : currentQuestion > index ? 'previous' : 'next'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
