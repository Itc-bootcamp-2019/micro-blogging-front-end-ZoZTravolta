import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from "./components/chat/Chat";
//import NavBar from './components/NavBar'
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: "zoz",
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div className="navbar">

            <span className="links">
              <Link to="/">About</Link>
              <Link to="/profile">profile</Link>
            </span>
            <span className="hiUser">
              hi, {this.state.userName}
            </span>
          </div>

          <Switch>
            <Route exact path="/" >
              <img src={logo} className="logo" alt={logo} />
              <Chat userName={this.state.userName} />
            </Route>

            <Route path="/profile" >
              <div> profile</div>
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
