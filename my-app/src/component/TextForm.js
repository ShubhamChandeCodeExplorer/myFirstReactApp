import React,{useState} from 'react'

export default function TextForm(props) {
  const[text,setText]=useState("");

  const handleupClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Convertd To UpperCase","success")
  }

  const handleloClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Convertd TO LowerCase","success")
  }

  const handleclearClick=()=>{
    let newText="";
    setText(newText)
    props.showAlert("All Data Is Cleared","success")

    
  }

  const handleOnChange=(event)=>{
      setText(event.target.value)
  }

  const handleCopy=()=>{
    let text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("All Data is Selected","success")

  }

  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces is Managed","success")

  }

  return(
<>
<div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
  <h3 className='mb-4'>{props.heading}</h3>
  <div className='mb-3'>
    <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#13466e":"white",color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleupClick}>Click To UpperCase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleloClick}>Click To LowerCase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleclearClick}>Clear</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleCopy}>Click To CopyText</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleExtraSpace}>Handle Extra Space</button>
</div>


<div className='conatiner my-3' style={{color:props.mode==="dark"?"white":"#042743"}}>
  <h2>Your Text Summary</h2>
  <p> Total No. of words {text.split(" ").filter((element)=>{return element.length!==0}).length} and Charactre are {text.length}</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing To Preview"}</p>
</div>
</>
  );
}
