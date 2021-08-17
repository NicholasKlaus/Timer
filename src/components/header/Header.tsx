import React from 'react';
import { DarkModeToggler } from '../index';

export const Header = () => {

  return (
    <div className="header">
      <div className="header-wrap">
        <h2 className="header-title">Pomodoro Clock</h2>
        <DarkModeToggler />
      </div>
    </div>
  );
}