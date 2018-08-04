import React from "react";
import { render } from "react-dom";
import TextFit from 'Components/TextFit'
import "./styles.css";

class App extends React.Component<any,any> {
 render(){ 
   
  return (
    <div className="App">
    <TextFit length={10}>lorem ipsum dollar per solarium.</TextFit>
     
        </div>
  );}
}

const rootElement = document.getElementById("app");
render(<App />, rootElement);
