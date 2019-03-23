import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import Todo2 from './Todo2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
        <Todo2 />
      </div>
    );
  }
}

export default App;
