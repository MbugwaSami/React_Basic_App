import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Signup} />
      </Switch>
    </div>
  </Router>
);

export default App;
