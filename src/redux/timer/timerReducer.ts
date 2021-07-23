import { TYPES } from '../constants/types';

const initialState = {
  SessionLength: 25,
  BreackLength: 5,
  interval: 'Session',
  secondsLeft: 25 * 60,
  timerSecond: 0,
  timerRunning: false,
};

export const timerReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case TYPES.INC_SESSION:
      return {

      }
    case TYPES.DEC_SESSION:
      return {
        
      }
    case TYPES.INC_BREAK:
      return {

      }
    case TYPES.DEC_BREAK:
      return {

      }
    case TYPES.DEC_SECONDS:
      return {

      }
    case TYPES.SWITCH_SESSION:
      return {

      }
    case TYPES.SWITCH_BREAK:
      return {

      }
    case TYPES.START_TIMER:
      return {

      }
    case TYPES.STOP_TIMER:
      return {

      }
    case TYPES.RESET_TIMER:
      return {

      }
    default:
      return state;
  }
}