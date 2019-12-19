import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import Select from 'react-select'
import { saveTodo, loadMyTodos, updateTodo } from './actions';
import { Redirect, useParams } from 'react-router-dom';


export default function NewTodo(props) {
  let { id } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [todoSaved, setTodoSaved] = useState(false);
  const todos = useSelector(state => state.todos);
  async function loadTodos() { await dispatch(loadMyTodos()) }

  useEffect(() => { (todos.length === 0) && loadTodos() }, []);
  const todo = todos.find(element => element._id === id );
  const titlePlaceholder = todo ? todo.title : 'Title';
  const descriptionPlaceholder = todo ? todo.description : 'Description';

  const dispatch = useDispatch(props);
  const handleSubmit = () => {
    const save = todo ? updateTodo : saveTodo;
    const payload = { ...todo, title, description, date: moment(), status: 'todo'};
    return dispatch(save(payload)).then(() => setTodoSaved(!todoSaved))
  }

  if (todoSaved) { return <Redirect to='/todos/me'/> }

  return (
        <div class="container has-text-centered">
          <br/><br/>
          <section class="hero is-info is-fullheight">
            <div class="column is-waring is-one-third is-offset-one-third">
              <br/><br/><br/><br/><br/><br/>
              <div class="box animated fadeIn is-info" >
                <div>

                  <div class="field">
                    <div class="control">
                      <input class="input is-medium" placeholder={titlePlaceholder} name="title" onChange={({ target: { value }}) => setTitle(value)}/>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <textarea class="textarea is-medium" placeholder={descriptionPlaceholder} name="description" onChange={({ target: { value }}) => setDescription(value)}/>
                    </div>
                  </div>

                  <hr/>

                  <div class="field">
                    <label class="label"></label>
                    <button class="button is-medium is-info" onClick={handleSubmit}>Save Todo</button>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
  );
}
