
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Hi', age: 29}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Devi Courier</h1>
        <p>This is a Great Courier Website.</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
    //return React.createElement('div',null,'h1', "Devi");
  }
}

export default App;
