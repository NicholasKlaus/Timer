import React from 'react';
import { useSelector } from 'react-redux';

export const SessionLength = () => {
  const { SessionLength } = useSelector(({timer}:AppState) => timer)
  return (
    <div className="preset">
      <i className="icofont-caret-left arrow"></i>
      <div className="values-wrap">
        <h4 className="values-title">Session Length</h4>
        {SessionLength}
      </div>
      <i className="icofont-caret-right arrow"></i>
    </div>
  );
}