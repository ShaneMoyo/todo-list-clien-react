import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Fade from 'react-reveal/Fade';


export default function AppointmentItem (props){
  const { title, description } = props.todo;
  console.log('todo item ',props)
  return <li class="appointments">
          <Fade>
            <article class="tile is-child notification is-success landing">
              <div class="content">
                <p class="title">{title}</p>
              </div>
            </article>
          </Fade>
          <hr/>
        </li>
}
