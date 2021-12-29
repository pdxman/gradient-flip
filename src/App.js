import React, { useState } from 'react'
import './App.css';

function App() {

const [toggle, setToggle] = useState(false)  

const [colorOne, setColorOne]  = useState("#ee7752")
const [colorTwo, setColorTwo]  = useState("#e73c7e")
const [colorThree, setColorThree]  = useState("#23a6d5")
const [colorFour, setColorFour]  = useState("#23d5ab")


const [sizeOne, setSizeOne]  = useState("300%")
const [sizeTwo, setSizeTwo]  = useState("300%")

const [sizeThree, setSizeThree]  = useState("200%")
const [sizeFour, setSizeFour]  = useState("200%")

const myStyle = {
  //background: `linear-gradient(to right, ${colorOne}, ${colorTwo})`,
  background: `linear-gradient(45deg, ${colorOne}, ${colorTwo}, ${colorThree}, ${colorFour})`,
  backgroundSize: `${sizeOne}  ${sizeTwo}`
}

const otherStyle = {
  background: `linear-gradient(to right, ${colorOne}, ${colorTwo})`,
  backgroundSize: `${sizeThree}  ${sizeFour}`
}

function handleChange(){
  //setColorOne(colorThree)
  setSizeOne("100%")
  setToggle(prevToggle => !prevToggle)
}

function handleChangeTwo(){
  setSizeOne("400%")
  setToggle(prevToggle => !prevToggle)
}
console.log(toggle)

  return (
    <div className="App" style={myStyle}>
      <h1>Watch Yer Background!</h1>
     { !toggle ? 
      <button onClick={handleChange}>Change the Background</button> : 
      <button onClick={handleChangeTwo}>Change it back!</button>
    }
    </div>
  );
}

export default App;
