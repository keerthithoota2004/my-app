import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("upper case was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper","success");
  }
  const handleloClick=()=>{
    console.log("upper case was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower","success");
  }
  const handleclearClick=()=>{
    console.log("upper case was clicked");
    let newText="";
    setText(newText);
    props.showAlert("text cleared","success");
  }
  const handleOnChange=(event)=>{
    console.log("on change was clicked");
    setText(event.target.value);
   
  }


  const handleCopyClick=()=>{
    console.log("i am copy");
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra spaces removed","success");
  }
  const [text,setText]=useState('Enter text here');
  return (
    <>
    <div className='container'  style={{backgroundColor:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
      <form>
    
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" value ={text} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
    <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor:props.mode==='light'?'grey':'white'}} ></textarea>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  
  <button type="submit" className="btn btn-primary"onClick={handleUpClick}>Submit</button>
  <button type="submit" className="btn btn-primary"onClick={handleloClick}>Submit</button>
  <button type="submit" className="btn btn-primary"onClick={handleclearClick}>clear</button>
  <button type="submit" className="btn btn-primary"onClick={handleCopyClick}>copy</button>
  <button type="submit" className="btn btn-primary"onClick={handleExtraSpaces}>extra Spaces</button>
</form>
    </div>
    <div className='container'  style={{backgroundColor:props.mode==='dark'?'white':'black'}}>
      <h1>YOUR TEXT</h1>
      <p>{text.split(" ").length} words and {text.length} CHARACTERS</p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"enter something"}</p>
    </div>
    </>
  )
}
