import React, { useState } from 'react';

import { gameConfig } from './../../config/game.config';

type TileAnswerProps = {
  variant: string;
  answer: string;
  correctAnswers?: string[];
  onSelect: (selectedAnswer: string) => void;
};

export const TileAnswer: React.FC<TileAnswerProps> = ({
  variant,
  answer,
  correctAnswers,
  onSelect,
}: TileAnswerProps) => {
  const [className, setClassName] = useState('tile');

  const handleSelect = () => {
    setTimeout(() => {
      setClassName(correctAnswers?.includes(variant) ? 'tile__correct' : 'tile__wrong');
    }, gameConfig.nextQuestionTimeout);
    setClassName('tile__selected');
    onSelect(variant);
  };

  return (
    <svg
      className={className}
      height="72"
      viewBox="0 0 421 72"
      width="421"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleSelect}
    >
      <path d="M404 36L421 36" />
      <path d="M0 36L17 36" />
      <path d="M39.8137 5.09773C41.9857 2.2033 45.3933 0.5 49.012 0.5H371.988C375.607 0.5 379.014 2.2033 381.186 5.09773L404.375 36L381.186 66.9023C379.014 69.7967 375.607 71.5 371.988 71.5H49.012C45.3933 71.5 41.9857 69.7967 39.8137 66.9023L16.6251 36L39.8137 5.09773Z" />
      <text alignmentBaseline="middle" className="tile__text" dominantBaseline="middle" x="10%" y="50%">
        <tspan className="tile__variant">{variant}</tspan>
        <tspan className="tile__answer" x="15%">
          {answer}
        </tspan>
      </text>
    </svg>
  );
};
