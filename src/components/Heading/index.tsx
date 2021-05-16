import React from 'react';

enum fontSizeToEl {
  '72px' = 'h1',
  '64px' = 'h2',
  '36px' = 'h3',
  '24px' = 'h4',
  '18px' = 'h5',
  '12px' = 'h6',
  '16px' = 'p',
}

interface IHeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size?: string;
}

const Heading: React.FC<IHeadingProps> = ({ children, tag = '', size = '' }) => {
  const style = size ? { fontSize: size, marginBottom: '50px' } : '';
  const tagName = tag ? `${tag}` : fontSizeToEl[size as keyof typeof fontSizeToEl];

  const el = React.createElement(tagName, { style }, children);

  return el;
};

export default Heading;
