import React from 'react';

type ButtonProps = {
  children: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }: ButtonProps) => {
  return (
    <div className="btn" onClick={onClick}>
      {children}
    </div>
  );
};
