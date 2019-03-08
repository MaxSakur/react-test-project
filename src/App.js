//  DEFAULT
import React, { Component } from 'react';
import './App.css';

//  CUSTOM
import Aside from './components/aside/aside'
import Body from './components/body/body'
import OffCanvas from './components/offCanvas/offCanvas'

class App extends Component {
  render() {
    return (
      <div className="App" style={{position: 'relative'}}>
          <Aside/>
          <Body/>
          <OffCanvas/>
      </div>
    );
  }
}

export default App;
