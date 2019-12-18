import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = props => <NavLink {...props} className="nav-link tile is-parent" activeClassName="active"/>;
export default function LandingMain() {
  return <section class="animated fadeIn hero is-info is-fullheight">
          <div class="hero-body">
            <div class="column is-6 is-offset-3 has-text-centered">
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
