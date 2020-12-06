import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import LandingPage from '../screens/LandingPage';
import About from '../screens/About';
import '../css/Content.scss';

function Content() {
  return (
    <Router>
      <Route path={"/"} exact component={LandingPage} />
      <Route path={"/about"} component={About} />
    </Router>
  );
}

export default Content;
