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
      userName: this.getTweetsFromLocalStorage(),
    }
  }
  getTweetsFromLocalStorage = () => {
    let userName = JSON.parse(localStorage.getItem("UserName"));
    if (userName === null || userName === undefined) {
      console.log('no user', userName)
      return null;
    } else {
      return userName.userName;
    }
  };
  saveNameToLocalStorage = (userName) => {
    this.setState({ userName: userName })
    localStorage.setItem(
      "UserName",
      JSON.stringify({
        userName: userName
      })
    );
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar userName={this.state.userName} />
          <Switch>
            <Route path={this.state.userName !== null ? "/profile" : "/"}  >
              <Profile userName={this.state.userName} saveNameToLocalStorage={this.saveNameToLocalStorage.bind(this)} />
            </Route>
            <Route path="/" >
              <img src={logo} className="logo" alt={logo} />
              <Chat userName={this.state.userName} />
            </Route>
          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;
