import React from 'react';
import { NavLink } from 'react-router-dom';
import LandingMain from './LandingMain'

const NavBarLink = props => <NavLink {...props} className="nav-link tile is-parent" activeClassName="active"/>;

export default function Landing(){
  return(
    <body>
      <LandingMain/>
      <div class="box is-white">
      </div>
    </body>
  );
}
