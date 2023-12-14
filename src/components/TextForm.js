import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Clicked"  + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!!" , "success");
    }
    const handleLoClick = () => {
        // console.log("Clicked"  + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!!" , "success");
    }
    const handleOnChange = (event) => {    
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!!" , "success");
    }

    const handleClear = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!!" , "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!!" , "success");

    }

    const [text, setText] = useState('');
    // setText('newText');
  return (
    <>
      <div className='container' style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
        <div className="mb-3">
             <h1>{props.heading} </h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white' , color: props.mode === 'dark'? 'white' : '#042743'}} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Handle Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>


    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter something in the text above to preview it here"}</p>
    </div>
    </>

  
  )
}
