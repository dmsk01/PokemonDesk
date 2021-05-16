import React from 'react';

import cn from 'classnames';

import s from './Button.module.scss';

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: string;
  color?: string;
  display?: string;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, size = '', color = '', display = '' }) => {
  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.small]: size === 'small',
        [s.normal]: size === 'normal',
        [s.yellow]: color === 'yellow',
        [s.green]: color === 'green',
        [s.inline]: display === 'inline',
        [s.block]: display === 'block',
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
