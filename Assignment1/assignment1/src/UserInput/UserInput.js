import React from 'react';


const userInput = (props) => {
    return (
        <div>
          <h1>I am in UserInput component { props.name } of {props.age}</h1>
          <h1> {props.children}</h1>
          <input onChange={props.changed}></input>
        </div>
      );
}

export default userInput; 
