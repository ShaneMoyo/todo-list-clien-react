import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../auth/actions';
import logo from '../../assets/images/logo.png';


const NavBarLink = props => <NavLink {...props}
  className="nav-link"
  activeClassName="active"
/>;

class Navigation extends Component {

  state = {
    isActive: false
  }

  onClickNav = () => {
    this.setState({ isActive: !this.state.isActive });
  }
  handleSignOut = () => {
    this.props.signout();
  }

  render() {
    const { user } = this.props;
    const { isActive } = this.state;
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container is-fluid">
            <div className="navbar-brand">

              <div className="navbar-item">
                <NavBarLink className=" home-button" exact to="/"><span className="tag is-info">Home</span></NavBarLink>
              </div>

              {user ? <div className="navbar-item is-transparent">
                {`Hello, ${user.firstName}`}
              </div> : null}

              <span className={isActive ? 'navbar-burger burger is-active' : 'navbar-burger burger'} data-target="navbarMenu" onClick={() => this.onClickNav()}>
                <span></span>
                <span></span>
                <span></span>
              </span>

            </div>

            <div className={isActive ? 'animated fadeIn navbar-menu is-active is-success' : 'animated fadeIn navbar-menu'}>
              <div className="navbar-end ">

                <div className="navbar-item">
                  <NavBarLink exact to="/todos/new"><span className="tag is-info">New To Do</span></NavBarLink>
                </div>
                {user && <div className="navbar-item is-transparent">
                  <NavBarLink exact to="/todos/me" onClick={() => this.onClickNav()}><span  className="tag is-info">My To Dos</span></NavBarLink>
                </div> }
                {!user ? <div className="navbar-item is-transparent">
                  <NavBarLink exact to="/auth/signin" onClick={() => this.onClickNav()}><span  className="tag is-info">Log in</span></NavBarLink>
                </div> :
                <div className="navbar-item" onClick={() => this.handleSignOut()}>
                  <NavBarLink exact to="/"><span className="tag is-info">Log Out</span></NavBarLink>
                </div>}


              </div>
            </div>

          </div>
        </nav>

      </div>
    );
  }
}

export default connect(({ auth }) => ({
  user: auth.user
}), { signout }
)(Navigation);
