import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import moment from 'moment'
import Select from 'react-select'
import { saveTodo } from './actions';
import { Redirect } from 'react-router-dom';


export default function NewTodo(props) {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [todoSaved, setTodoSaved] = useState(false);
  const dispatch = useDispatch(props);

  console.log('todo props', )
  const handleSubmit = () => {
    return dispatch(saveTodo({ title, description, date: moment(), status: 'todo'})).then(() => setTodoSaved(!todoSaved))
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
                      <input class="input is-medium" placeholder="Title" name="title" onChange={({ target: { value }}) => setTitle(value)}/>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <input class="input is-medium" placeholder="Description" name="description" onChange={({ target: { value }}) => setDescription(value)}/>
                    </div>
                  </div>

                  <hr/>

                  <div class="field">
                    <label class="label"></label>
                    <button class="button is-medium is-info" onClick={handleSubmit}>Add Todo</button>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
  );
}
