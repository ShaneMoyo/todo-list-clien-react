import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { loadMyTodos } from './actions';
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from './ToDoItem'

const NavBarLink = props => <NavLink {...props} className="nav-link tile is-parent" activeClassName="active"/>;
export default function LandingMain() {
  const loading = useSelector(state => state.loading);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  async function loadTodos() { await dispatch(loadMyTodos()) }
  useEffect(() => { loadTodos() }, []);
  const todoItems = todos.map(todo => <ToDoItem todo={todo}/>)
  return <section class="animated fadeIn hero is-info is-fullheight">
          <br/><br/>
          <div class="hero-body">
            <div class="column is-6 is-offset-3 has-text-centered">

              <ul>{todoItems}</ul>
              <NavBarLink exact to="/todos/new" class="tile is-parent">
                <article class="tile is-child notification is-success landing">
                  <div class="content">
                    <p class="title">Add New Todo +</p>
                  </div>
                </article>
              </NavBarLink>

            </div>
          </div>
        </section>

}
