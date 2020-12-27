import React from 'react';

type TileGainProps = {
  state: 'previous' | 'active' | 'next';
  gain: string;
};

export const TileGain: React.FC<TileGainProps> = ({ state, gain }: TileGainProps) => {
  return (
    <svg className={`tile__${state}`} height="32" viewBox="0 0 320 32" width="320" xmlns="http://www.w3.org/2000/svg">
      <path d="M41 16H0" />
      <path d="M320 16H279" />
      <path d="M53.5303 3.70404C55.6719 1.64809 58.5256 0.5 61.4944 0.5H258.506C261.474 0.5 264.328 1.64809 266.47 3.70404L279.278 16L266.47 28.296C264.328 30.3519 261.474 31.5 258.506 31.5H61.4944C58.5256 31.5 55.6719 30.3519 53.5303 28.296L40.722 16L53.5303 3.70404Z" />
      <text className="tile__gain__text" dominantBaseline="middle" textAnchor="middle" x="50%" y="50%">
        {gain}
      </text>
    </svg>
  );
};
