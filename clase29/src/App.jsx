//npm
import React, { useState } from 'react';
//Components
import Card from "../components/card/card"
//Mocks
import texts from "../mocks/texts";
import gradients from '../mocks/colors';
//Styles
import("./App.css")
/* 
export default function Cards(){
  return(
    {
      (()=>{
        for(let i ; i < len;i++){
          return(
            <li>
               <Card text={} style={}/> 
            </li>  
          )
        }
      })()
    }
  )  Alternativa Juan
} */
function App() {
  let [textos,setTextos] = useState(texts)
  let [gradientes,setGradientes] = useState(gradients)
  return (
    <section>
      <div className="grid">
        {textos.map((text,i)=> <Card key={i} currentCards={textos} currentColors={gradientes} changeCards={setTextos} text={text} dltColor={setGradientes} color={gradientes[i]}/>)}
      </div>
    </section>
  )
}

export default App
