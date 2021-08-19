import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incSession, decSession } from '../redux/actions';

export const SessionLength = () => {
  const { sessionLength } = useSelector(({ timer }:AppState) => timer);
  const dispatch = useDispatch();

  const decreaseSession = () => {
    if( sessionLength === 1) {
      return null;
    }
    dispatch(decSession());
  }

  const increaseSession = () => {
    if( sessionLength === 60) {
      return null;
    }
    dispatch(incSession());
  }

  return (
    <div className="interval__session interval_item">
      <h4 className="interval__title title">Session Length</h4>
      <div className="interval__container">
        <i className="icofont-caret-left interval__arrow" onClick={decreaseSession}></i>
        <p className="interval__length"> {sessionLength} </p>
        <i className="icofont-caret-right interval__arrow" onClick={increaseSession}></i>
      </div>
    </div>
  );
}