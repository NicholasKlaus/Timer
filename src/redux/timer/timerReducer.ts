import { START } from '../constants/types';

const initialState = {

};

export const timerReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case START:
      return null;
    default:
      return state;
  }
}