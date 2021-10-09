import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);

    }

    const [text, setText] =  useState("Enter text here")
    //text ="new text" //wrong way to change a state
    //setText("new Text"); //correct way to change a state
    return (
        <>    
        <h1>{props.heading}</h1>     
    <div className="mb-3">
    <label for="myBox" className="form-label">Example Text Here</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className= "btn btn-primary" onClick = {handleUpClick}>Covert To Upper Case</button>
       </>
    )
}
