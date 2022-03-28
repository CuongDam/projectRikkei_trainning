import { useState } from 'react';
import './App.css';
import React  from 'react';

function handleSubmit(name, age){
  //CALL API
  
}
function App() {
  
  const [name, setName] = useState();
  const [age, setAge] = useState();
  
  return (
    <div className="App">
    <form>
      <label>Enter your name
        <input 
         value ={name}
          type="text\" 
          onChange={e => setName(e.target.value)}
          ></input>
      </label>

        <label>Enter your age
        <input   
        value={age}
        type='text' 
        onChange={e => setAge(e.target.value)}
        ></input>
        </label>

        <button onClick={() => handleSubmit}>submit</button>

    </form>
    </div>
  );
}

export default App;
