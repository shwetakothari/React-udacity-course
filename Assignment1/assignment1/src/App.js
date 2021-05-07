import React, { Component } from 'react';
import './App.css';
import './UserInput/UserInput'
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    persons : [
      { name: 'Shweta' ,age: 30},
      { name: 'Kimaya' ,age: 0.99}
  ]
  };

  switchNameHandler = (newName) =>{
    this.setState(
      { persons : [
        { name: newName ,age: 32  },
        { name: 'Kimaya' ,age: 0.99}
    ] }
    );
  }

  namechangeEventhandler = (event) => {
    this.setState( {
      persons : [
        { name: event.target.value, age: 20},
        {}
      ]}
    );
  }

  render() {
    return (
      <div className="App">
        <h1>I am shweta's app</h1>
        <button onClick={ this.switchNameHandler.bind(this, 'shwetttta')}> Switch Satte</button>
        <UserInput name= {this.state.persons[0].name} age={this.state.persons[0].age} changed={this.namechangeEventhandler} />
        <UserInput name={this.state.persons[1].name} age={this.state.persons[1].age} 
        changed={this.namechangeEventhandler}> I am UserInput kimaya's child</UserInput>

      </div>
    );
  }
}

export default App;
