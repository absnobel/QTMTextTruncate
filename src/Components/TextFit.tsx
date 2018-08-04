import React from "react";
interface ITextFitProps extends React.Props<TextFit> {
    length:number; // known length to truncate children to.
}

interface ITextFitState {
   
}
// class textfit - Will take a length prop and children..
// if children is a string.. it will truncate the length of the string by the incoming length prop
class TextFit extends React.Component<ITextFitProps,ITextFitState> {
    constructor(props:ITextFitProps) {
        super(props);
     }
    render(){ 
      
     return (
       <div className="textfit">
       
       <div className="content">
       <h3>Text Truncate</h3>
       <p>
          <span> <b>Before truncation:</b> {this.props.children} </span><br />
          <span> <b>Desired Length:</b> {this.props.length} </span><br/>
          <span> <b>'Children' is a string?:</b> {typeof this.props.children == "string" ? "true":"false"} </span>
          <br/>
      {this.props.length && typeof this.props.children == "string"&&
       <span><b>After truncation:</b> {this.props.children.substr(0,this.props.length)}</span>
      }
      </p>
        </div>
           </div>
     );}
   }
   
   export default TextFit;