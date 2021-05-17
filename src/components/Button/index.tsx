import React from 'react';

import cn from 'classnames';

import s from './Button.module.scss';

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'normal' | 'small';
  color?: 'green' | 'yellow';
  display?: 'inline' | 'block';
}

const Button: React.FC<IButtonProps> = ({ children, onClick, size, color, display }) => {
  const colorClass: string = s[color || ('green' as keyof typeof s)];
  const sizeClass: string = s[size || ('normal' as keyof typeof s)];
  const displayClass: string = s[display || ('inline' as keyof typeof s)];
  return (
    <button type="button" className={cn(s.root, colorClass, sizeClass, displayClass)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
