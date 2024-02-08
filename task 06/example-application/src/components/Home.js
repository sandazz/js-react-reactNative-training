import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

function Home () {
    const [darkMode, setDarkMode] = useState(false);
    const [count, setCount] = useState(0);

    const lightModeStyle ={
        color:"black",
        backgroundColor:"white"
    }

    const darkModeStyle ={ 
        color:"white",
        backgroundColor:"black"
    }

    return (
        <div style={darkMode?darkModeStyle:lightModeStyle}>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 style={darkMode?darkModeStyle:lightModeStyle}>Welcome to the react world</h1>
            <hr />
            <div style={darkMode?darkModeStyle:lightModeStyle}>
                <h1 id="text" style={darkMode?darkModeStyle:lightModeStyle} > Mode {darkMode?"dark mode":"light mode"} </h1>
                <button onClick={ ()=>setDarkMode(!darkMode) }>DarkMode</button>
            </div>
            <hr /> 
            <div>
            <p style={darkMode?darkModeStyle:lightModeStyle}>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} style={darkMode?darkModeStyle:lightModeStyle}>
                Click me
            </button>
            </div> 
        </div>
    );
}

export default Home;