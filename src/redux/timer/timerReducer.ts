import { TYPES } from '../constants/types';

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  interval: 'Session',
  secondsLeft: 25 * 60,
  timerRunning: false,
};

export const timerReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case TYPES.INC_SESSION:
      return {
        ...state,
        sessionLength: state.sessionLength + 1,
        secondsLeft: (state.sessionLength + 1) * 60
      }
    case TYPES.DEC_SESSION:
      return {
        ...state,
        sessionLength: state.sessionLength - 1,
        secondsLeft: (state.sessionLength - 1) * 60
      }
    case TYPES.INC_BREAK:
      return {
        ...state,
        breakLength: state.breakLength + 1
      }
    case TYPES.DEC_BREAK:
      return {
        ...state,
        breakLength: state.breakLength - 1
      }
    case TYPES.DEC_SECONDS:
      return {
        ...state,
        secondsLeft: state.secondsLeft - 1
      }
    case TYPES.SWITCH_SESSION:
      return {
        ...state,
        interval: 'Session',
        secondsLeft: state.sessionLength * 60
      }
    case TYPES.SWITCH_BREAK:
      return {
        ...state,
        interval: 'Break',
        secondsLeft: state.breakLength * 60
      }
    case TYPES.START_TIMER:
      return {
        ...state,
        timerRunning: true
      }
    case TYPES.STOP_TIMER:
      return {
        ...state,
        timerRunning: false
      }
    case TYPES.RESET_TIMER:
      return {
        ...state,
        breakLength: 5,
        sessionLength: 25,
        interval: 'Session',
        secondsLeft: 25 * 60,
        timerRunning: false,
      }
    default:
      return state;
  }
}