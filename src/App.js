import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from "./components/chat/Chat";
import NavBar from './components/NavBar'

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
        <NavBar userName={this.state.userName} />
        <img src={logo} className="logo" alt={logo} />
        <Chat />
      </div>
    );
  }
}

export default App;
