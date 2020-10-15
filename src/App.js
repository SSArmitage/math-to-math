import React, { Component } from 'react';
import SpeechRecognition from './SpeechRecognition';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>
            <h1>Math-to-Math</h1>
          </header>
          
          <SpeechRecognition />
        </div>
      </div>
    )
  }
}

export default App;
