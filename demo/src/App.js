import React from 'react';
import { useState } from 'react';

const App=()=>{

  const [toDo, setToDo]= useState("");

  const handleAddToDo=()=>{

  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input value={toDo} onChange={(event)=>{setToDo(event.target.value)}}/>
        <button onClick={()=>handleAddToDo()}>Add To Do</button>
      </div>
    </div>
  )
}

export default App;
