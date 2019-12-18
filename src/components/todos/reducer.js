import * as actions from '../../utils/constants';

export default function todos(state = [], { type, payload }) {
  switch(type) {
    case actions.ADD_TODO:
      return [ ...state, payload ];
    case actions.UPDATE_TODO:
      return state.map(todo => todo._id === payload._id ? { ...todo, ...payload } : todo);
    case actions.LOAD_TODOS:
      return payload;
    case actions.DELETE_TODO:
      return state.filter(todo => todo._id !== payload);
    default:
      return state;
  }
}
