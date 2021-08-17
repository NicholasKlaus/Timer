import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incSession, decSession } from '../redux/actions';

export const SessionLength = () => {
  const { sessionLength } = useSelector(({timer}:AppState) => timer);
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
    <div>
      <h4>Session Length</h4>
      <div className="interval-container">
        <i className="icofont-caret-left arrow" onClick={decreaseSession}></i>
        <p className="interval-length"> {sessionLength} </p>
        <i className="icofont-caret-right arrow" onClick={increaseSession}></i>
      </div>
    </div>
  );
}