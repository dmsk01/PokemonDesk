import React from 'react';

// interface fontSizeToEl {
//   h1: '72px';
//   h2: '64px';
//   h3: '36px';
//   h4: '24px';
//   h5: '18px';
//   h6: '12px';
//   p: '16px';
// }

interface IFontSize {
  [fontSize: string]: string;
}
const fontSizeToEl: IFontSize = {
  '72px': 'h1',
  '64px': 'h2',
  '36px': 'h3',
  '24px': 'h4',
  '18px': 'h5',
  '12px': 'h6',
  '16px': 'p',
};

interface IHeadingProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size?: '72px' | '64px' | '36px' | '24px' | '18px' | '16px' | '12px';
}

const Heading: React.FC<IHeadingProps> = ({ children, tag, size }) => {
  const style = size ? { fontSize: size } : '';
  const tagName = tag || fontSizeToEl[size as keyof typeof fontSizeToEl];

  const el = React.createElement(tagName, { style }, children);

  return el;
};

export default Heading;
