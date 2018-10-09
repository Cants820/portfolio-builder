import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Welcome from './components/start/welcome';
import Profile from './components/profile/profile';
import Login from './components/login/login';
import Build from './components/portfolio/build';
import Portfolio from './components/portfolio/portfolio';
import Reports from './components/portfolio/reports';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/login" component={Login}/>
      <NavTabs />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/build" component={Build} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/reports" component={Reports} />
    </div>
  </Router>
);

export default App;
