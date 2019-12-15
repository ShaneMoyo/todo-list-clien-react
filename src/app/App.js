import React, { Component } from 'react';
import Routes from './Routes';
import { checkForToken } from '../components/auth/actions';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import '../style/mystyle.css';


class App extends Component {

  componentDidMount() {
    this.props.checkForToken();
  }

  render() {
    return (
      <Router>
          <div className="App">
            <head>
              <meta charSet="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
              <link rel="stylesheet" href="https://cdnjs.com/libraries/kissui.scrollanim"/>
              <link href="http://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Alegreya:700" rel="stylesheet" type="text/css" />
              <title>Todo List</title>
            </head>

            <Routes/>

          </div>
      </Router>
    );
  }
}

export default connect(({ auth }) => ({
  error: auth.error
}),
{ checkForToken }
)(App);
