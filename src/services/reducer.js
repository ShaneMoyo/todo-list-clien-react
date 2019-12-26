import * as actions from '../utils/constants';

export function loading (state = false, { type }) {
  switch (type) {
    case actions.LOADING:
      return true;
    case actions.DONE_LOADING:
    case actions.ERROR:
      return false;
    default:
      return state;
  }
}

export function error (state = {}, { type, payload }) {
  switch (type) {
    case actions.ERROR:
      console.log('catching error in reducer', payload)
      return payload;
    case actions.LOADING:
      return {};
    default:
      return state;
  }
}
