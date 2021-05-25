import React, { useState } from 'react';
import s from './Input.module.scss';

interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<IInput> = ({ onChange, value }) => {
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };
  
  return (
    <div className={s.inputWrapper}>
      <input
        placeholder="Enter the name of the pokemon"
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeHandle}
      />
    </div>
  );
};

export default Input;
