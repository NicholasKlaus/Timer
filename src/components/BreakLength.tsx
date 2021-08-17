import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decBreak, incBreak } from '../redux/actions';

export const BreakLength = () => {
  const { breakLength } = useSelector(({timer}:AppState) => timer);
  const dispatch = useDispatch();

  const decreaseBreak = () => {
    if( breakLength === 1) {
      return null;
    }
    dispatch(decBreak());
  }

  const increaseBreak = () => {
    if( breakLength === 60) {
      return null;
    }
    dispatch(incBreak());
  }

  return (
    <div>
      <h4>Break Length</h4>
      <div className="interval-container">
        <i className="icofont-caret-left arrow" onClick={decreaseBreak}></i>
        <p className="interval-length"> {breakLength} </p>
        <i className="icofont-caret-right arrow" onClick={increaseBreak}></i>
      </div>
    </div>
  );
}