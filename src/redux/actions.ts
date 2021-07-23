import { TYPES } from './constants/types';

export const incSession = () => ({type: TYPES.INC_SESSION})

export const decSession = () => ({type: TYPES.DEC_SESSION})

export const incBreak = () => ({type: TYPES.INC_BREAK})

export const decBreak = () => ({type: TYPES.DEC_BREAK})

export const decSeconds = () => ({type: TYPES.DEC_SECONDS})

export const switchSession = () => ({type: TYPES.SWITCH_SESSION})

export const switchBreak = () => ({type: TYPES.SWITCH_BREAK})

export const startTimer = () => ({type: TYPES.START_TIMER})

export const stopTimer = () => ({type: TYPES.STOP_TIMER})

export const resetTimer = () => ({type: TYPES.RESET_TIMER})