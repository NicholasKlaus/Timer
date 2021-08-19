import React from 'react';
import { DarkModeToggler } from '../index';

export const Header = () => {

  return (
    <div className="header">
      <div className="header__wrap">
        <h2 className="header__title title">Pomodoro Clock</h2>
        <DarkModeToggler />
      </div>
    </div>
  );
}