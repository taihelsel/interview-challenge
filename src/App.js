import React, { Component } from 'react';
import './App.css';

//react components
import ColorApp from "./components/ColorApp/ColorApp.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorApp />
      </div>
    );
  }
}

export default App;
