import * as actions from '../../utils/constants';
import todosApi from '../../services/todosApi';

export function saveTodo(todo){
  return dispatch => {
    dispatch({ type: actions.LOADING })
    return todosApi.book(todo)
      .then( savedTodo => dispatch({type: actions.ADD_TODO, payload: savedTodo}))
      .then(() => dispatch({ type: actions.DONE_LOADING}))
      .catch(error => dispatch({ type: actions.ERROR , payload: error }));
  }
}

export function loadMyTodos(){
  return dispatch => {
    dispatch({ type: actions.LOADING })
    return todosApi.getMy()
      .then( todos => dispatch({type: actions.LOAD_TODOS, payload: todos}))
      .then(() => dispatch({ type: actions.DONE_LOADING}))
      .catch(error => dispatch({ type: actions.ERROR , payload: error }));
  }
}

export function updateTodo(update) {
  return dispatch => {
    dispatch({ type: actions.LOADING })
    return todosApi.update(update)
      .then( updatedTodo => dispatch({type: actions.UPDATE_TODO, payload: updatedTodo}))
      .then(() => dispatch({ type: actions.DONE_LOADING}))
      .catch(error => dispatch({ type: actions.ERROR , payload: error }));
  }
}

export function deleteTodo(id) {
  return dispatch => {
    dispatch({ type: actions.LOADING })
    return todosApi.remove(id).then(() => id)
      .then( id => dispatch({type: actions.DELETE_TODO, payload: id}))
      .then(() => dispatch({ type: actions.DONE_LOADING}))
      .catch(error => dispatch({ type: actions.ERROR , payload: error }));
  }
}
