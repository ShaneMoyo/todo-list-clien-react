import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { mdiPencilOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { NavLink } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

const NavBarLink = props => <NavLink {...props} className="nav-link tile is-parent" activeClassName="active"/>;
export default function ToDoItem (props){
  const { title, description } = props.todo;
  console.log('todo item ',props)
  return <li >
          <Fade>
            <article class="tile is-child notification is-success landing">
              <div class="content">
                <p class="title">{title}
                <NavBarLink exact to="/todos/new" class="icon has-text-info is-pulled-right ">
                <i class="fas fa-info-circle">
                <Icon
                  className="animated fadeIn"
                  path={ mdiPencilOutline}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="white"
                />
                </i>
                </NavBarLink>
                </p>
              </div>
            </article>
          </Fade>
          <hr/>
        </li>
}
