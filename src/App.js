import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from "./pages/Chat";
import Profile from './pages/profile'
import NavBar from './components/NavBar'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


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
          <NavBar userName={this.state.userName} />
          <Switch>
            <Route exact path="/" >
              <img src={logo} className="logo" alt={logo} />
              <Chat userName={this.state.userName} />
            </Route>

            <Route path="/profile" >
              <Profile userName={this.state.userName} />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
