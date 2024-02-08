import React, { useState } from 'react';

function DarkModeConvertor () {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div>
            <h1 id="text" style={{backgroundColor: darkMode?"red":"green"}} > Mode {darkMode?"dark mode":"light mode"} </h1>
            <button onClick={ ()=>setDarkMode(true) }>DarkMode</button>
            <button onClick={  ()=>setDarkMode(false)}>LightMode</button>

           
        </div>
    ); 
}





function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export  {DarkModeConvertor, Example};