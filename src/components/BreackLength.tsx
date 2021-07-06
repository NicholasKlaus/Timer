import React from 'react';
import { useSelector } from 'react-redux';

export const BreackLength = () => {
  const { BreackLength } = useSelector(({timer}:AppState) => timer)
  return (
    <div className="preset">
      <i className="icofont-caret-left arrow"></i>
      <div className="values-wrap">
        <h4 className="values-title">Breack Length</h4>
        {BreackLength}
      </div>
      <i className="icofont-caret-right arrow"></i>
    </div>
  );
}