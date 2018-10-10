import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Welcome from './components/start/welcome';
import Profile from './components/profile/profile';
import Build from './components/portfolio/build';
import Portfolio from './components/portfolio/portfolio';
import Reports from './components/portfolio/reports';
import logo from './logo.svg';
//import 'App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome}/>
      <Navbar/> 
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/build" component={Build} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/reports" component={Reports} />
    </div>
  </Router>
);

export default App;
