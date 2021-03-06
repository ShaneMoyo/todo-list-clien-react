import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { mdiPencilOutline, mdiUnfoldMoreHorizontal, mdiUnfoldLessHorizontal } from '@mdi/js';
import Icon from '@mdi/react';
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import { deleteTodo } from './actions';

import Fade from 'react-reveal/Fade';

const NavBarLink = props => <NavLink {...props} className="nav-link tile is-parent" activeClassName="active"/>;
export default function ToDoItem (props){
  const [expanded, setExpanded] = useState(false);
  const { title, description, date, _id } = props.todo;
  const dispatch = useDispatch(props);
  const handleDeleteTodo = () => dispatch(deleteTodo(props.todo._id))

  return <li >
          <Fade>
            <article className="tile is-child notification is-success landing">
              <div className="content">
                <p className="title">{title}
                  <div exact to="/todos/new" props={props.todo} className="icon has-text-info is-pulled-right ">
                    <i className="fas fa-info-circle animated fadeIn" onClick={() => setExpanded(!expanded)}>
                      <Icon
                        className="animated fadeIn"
                        path={ expanded ? mdiUnfoldLessHorizontal : mdiUnfoldMoreHorizontal }
                        title="User Profile"
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                      />
                    </i>
                  </div>
                </p>
              </div>
              {expanded &&
                <div>
                <p className="animated fadeIn">{description}</p>
                <br/>
                <p className="animated fadeIn">{moment(date).format('M/DD h:mm a')}</p>
                <br/>
                <p className="buttons is-centered">
                  <NavBarLink todo={props.todo} exact to={`/todos/edit/${props.todo._id}`} className="button animated fadeIn is-white is-outlined is-rounded">edit</NavBarLink>
                  <div className="button animated fadeIn is-white is-outlined is-rounded" onClick={handleDeleteTodo}>done</div>
                </p>
                </div>
              }
            </article>
          </Fade>
          <hr/>
        </li>
}
