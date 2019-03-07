//  DEFAULT
import React, { Component } from 'react';
import './App.css';

//  CUSTOM
import Aside from './components/aside/aside'
import Body from './components/body/body'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Aside/>
          <Body/>
      </div>
    );
  }
}

export default App;
