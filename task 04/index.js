import React from 'react';
import  ReactDOM  from 'react-dom/client';

function changeColor(){
    document.getElementById("textchangeColor").style.color = "red";
}

function resetColor(){
    document.getElementById("textchangeColor").style.color = "black";
}

const changeSize = () => {
    document.getElementById("textChangeSize").style.fontSize = "20px";
}

const resetSize = () => {
    document.getElementById("textChangeSize").style.fontSize = "16px";
}

const changeToBold = () => {
    document.getElementById("textChangeToBold").style.fontWeight = "bold";
}

const resetToBold = () => {
    document.getElementById("textChangeToBold").style.fontWeight = "normal";
}


const heading = React.createElement("h2",{style:{color: "red"}},"React CDN")
const div = React.createElement("div",{},heading) 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)