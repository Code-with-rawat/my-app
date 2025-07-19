import React, {useState}from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    props.showAlert("Converted to Uppercase", "success");
    setText(newText);
  }
  const handleLoClick =()=>{
    // console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    props.showAlert("Converted to Lowercase", "success");  
    setText(newText);
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  // const enableDark = () => {
  //   // console.log("Uppercase was clicked" + text)
  //   if(myStyle.color === 'black') {
  //     setStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //     })
  //     setBtn("Enable Light mode")
  //   }
  //   else {
  //     setStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //       border: '2px solid white',
  //     })
  //     setBtn("Enable Dark mode")
  //   }
  // }
  // const[myStyle,setStyle] = useState({ 
  //   color: 'black',
  //   backgroundColor: 'white',
  // }) 
  //  const[btn, setBtn] = useState('Enable Dark mode')
  //how  to handle evnts//
  const[text, setText] = useState(''); 
  return (
    <>
    <div className="container" >
        <div className="mb-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="6" style={{backgroundColor: props.mode==='dark' ? '#13446e': 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}></textarea>
        
        </div>
         <button disabled ={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
         <button disabled ={text.length ===0}x className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
    <h2>Text Summary Here..</h2>
    <p>{text.split(" ").filter((element)=>{
    return element.length !== 0;
    }).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{
    return element.length !== 0;
    }).length} minutes read</p>
    <h2>Preview</h2>
    
    <p>{text.length>0?text : 'Nothing to preview !' }</p>
    </div>
    </>
  )
}
