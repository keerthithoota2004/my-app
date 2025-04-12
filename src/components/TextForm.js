import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleclearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div className='container' style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'black', color: props.mode === 'dark' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <textarea className='form-control mb-3' value={text} onChange={handleOnChange} id="myBox" rows="10" style={{ backgroundColor: props.mode === 'light' ? 'grey' : 'white', color: props.mode === 'light' ? 'white' : 'black' }}></textarea>
        <button className="btn btn-primary m-1" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary m-1" onClick={handleloClick}>Lowercase</button>
        <button className="btn btn-primary m-1" onClick={handleclearClick}>Clear</button>
        <button className="btn btn-primary m-1" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'black' : 'white' }}>
        <h2>Your text summary</h2>
        <p>{text.trim().split(/\s+/).filter(word => word !== '').length} words and {text.length} characters</p>
        <p>{0.008 * text.trim().split(/\s+/).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
