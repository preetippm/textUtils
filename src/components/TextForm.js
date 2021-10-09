import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);

    }

    const [text, setText] =  useState("")
    //text ="new text" //wrong way to change a state
    //setText("new Text"); //correct way to change a state
    return (
        <>    
        <div className="container">
        <h1>{props.heading}</h1>     
    <div className="mb-3">
    <label for="myBox" className="form-label" placeholder="Enter Text Here.."></label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter Text here.."></textarea>
    </div>
    <button className= "btn btn-primary mx-2" onClick = {handleUpClick}>Covert To Upper Case</button>
    <button className= "btn btn-primary mx-2" onClick = {handleLoClick}>Covert To Lower Case</button>
    </div>

    <div className="container" my-3>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} charachters </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
       </>
    )
}
