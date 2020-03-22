import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import Select from 'react-select'
import { saveTodo, loadMyTodos, updateTodo } from './actions';
import { Redirect, useParams } from 'react-router-dom';


export default function NewTodo(props) {
  let { id } = useParams();
  const todos = useSelector(state => state.todos);
  const error = useSelector(state => state.error);
  const loading = useSelector(state => state.loading);
  async function loadTodos() { await dispatch(loadMyTodos()) }

  useEffect(() => { (todos.length === 0) && loadTodos() }, []);
  const todo = todos.find(element => element._id === id );
  const titlePlaceholder = todo ? todo.title : 'Title';
  const descriptionPlaceholder = todo ? todo.description : 'Description';
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [description, setDescription] = useState(todo ? todo.description : '');
  const [todoSaved, setTodoSaved] = useState(false);

  const dispatch = useDispatch(props);
  const handleSubmit = () => {
    const save = todo ? updateTodo : saveTodo;
    const payload = { ...todo, title, description, date: moment(), status: 'todo'};
    return dispatch(save(payload)).then(() => setTodoSaved(!todoSaved))
  }

  if (todoSaved && !Object.keys(error).length) { return <Redirect to='/todos/me'/> }

  return (
        <div className="has-text-centered">
          <br/><br/>
          <section className="hero is-info is-fullheight">
            <div className="column is-waring is-one-third is-offset-one-third">
              <br/><br/><br/><br/><br/><br/>
              <div className="box animated fadeIn is-info" >
                <div>

                  <div className="field">
                    <div className="control">
                      <input className={error.title ? 'input is-medium is-danger' : 'input is-medium'} placeholder={titlePlaceholder} name="title" onChange={({ target: { value }}) => setTitle(value)}/>
                      {error.title && <p className="help is-danger">{error.title}</p>}
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <textarea className={error.description ? 'textarea is-medium is-danger' : 'textarea is-medium'} placeholder={descriptionPlaceholder} name="description" onChange={({ target: { value }}) => setDescription(value)}/>
                      {error.description && <p className="help is-danger">{error.description}</p>}
                    </div>
                  </div>

                  <hr/>

                  <div className="field">
                    <label className="label"></label>
                    <button className={loading ? "button is-medium is-info is-loading" : "button is-medium is-info"} onClick={handleSubmit}>Save Todo</button>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
  );
}
