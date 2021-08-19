import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decBreak, incBreak } from '../redux/actions';

export const BreakLength = () => {
  const { breakLength } = useSelector(({ timer }:AppState) => timer);
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
    <div className="interval__break interval_item">
      <h4 className="interval__title title">Break Length</h4>
      <div className="interval__container">
        <i className="icofont-caret-left interval__arrow" onClick={decreaseBreak}></i>
        <p className="interval__length"> {breakLength} </p>
        <i className="icofont-caret-right interval__arrow" onClick={increaseBreak}></i>
      </div>
    </div>
  );
}