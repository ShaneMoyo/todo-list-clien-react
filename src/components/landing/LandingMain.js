import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = props => <NavLink {...props} className="nav-link tile is-parent" activeClassName="active"/>;
export default function LandingMain() {
  return <section className="animated fadeIn hero is-info is-fullheight">
          <div className="hero-body">
            <div className="column is-6 is-offset-3 has-text-centered">
              <NavBarLink exact to="todos/me" className="tile is-parent">
                <article className="tile is-child notification is-success landing">
                  <div className="content">
                    <p className="title">Todos</p>
                  </div>
                </article>
              </NavBarLink>
            </div>
          </div>
        </section>

}
