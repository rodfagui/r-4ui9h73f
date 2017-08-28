import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { value: '' };
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.repeat.bind(this)} />
        <p className="repeater">{this.state.value}</p>
      </div>
    );
  }
  repeat(event) {
    this.setState({
      value: event.target.value
    });
  }

}

export default App;
