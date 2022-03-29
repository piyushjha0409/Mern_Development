import React, {useState} from 'react'

export const TextForm = (props) => {
 
//function for the uppercase
    const handleUpclick =  ()=>{
       setText("You have clicked the button of the uppercase!" + Text);
       let newUpper = Text.toUpperCase();
       setText(newUpper);
       props.showAlert("Words have been capitalized!", "success");
    }
 //function for the lowecase
 const handleLowclick = ()=>{
     setText("You have clicked the button of the lowercase!"+ Text);
     let newLower = Text.toLowerCase();
     setText(newLower);
 }
 //function for the clear text
 const handleClear = () =>{
     let clearTxt =  document.getElementById("exampleFormControlTextarea1").value = "";
     setText(clearTxt);
     props.showAlert("Text have been cleared up!", "success");
 }
 //function for handling the extra spaces 
 const handleExtraSpace = () =>{
     let newText = Text.split(/[ ]+/);
     setText(newText.join(" "));
     
     props.showAlert("Text have been Beautified!", "success");
 }
    //function for the handle change
    const handleOnChange  = (event)=>{
        console.log("handleOnChange function called!");
        setText(event.target.value);
    }

    const [Text, setText] = useState("Enter the text")
    return (
    <>
        <div className='container'>
            <h1 style={{color:props.mode==="light"?"black":"white"}}>{props.heading} </h1>
        </div>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" value= {Text} onChange={handleOnChange} rows="8" style={{backgroundColor:props.mode==="light"?"white":"grey"}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Beautify</button>
      <div className="container mx-0 my-3">
          <h1 style={{color:props.mode==="light"?"black":"white"}}>This is your summary</h1>
          <p style={{color:props.mode==="light"?"black":"white"}} >{Text.split(" ").length} words and {Text.length} characters</p>
          <p style={{color:props.mode==="light"?"black":"white"}} >{0.008*Text.split(" ").length} minutes to read</p>

      <div className="preview">
          <h1 style={{color:props.mode==="light"?"black":"white"}}>Preview</h1>
          <p style={{color:props.mode==="light"?"black":"white"}} >{Text.length>0?Text: "Enter something to preview here!"}</p>
      </div>
      </div>
        </>
    )
}
