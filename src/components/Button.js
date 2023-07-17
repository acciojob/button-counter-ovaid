import React,{useState} from 'react'

function Button() {

    let [button, setButton] = useState(0);


    // function increase(){
    //     setButton(button+1);
    // }
  return (
    <div>
        <p>Button clicked 0 time</p>
        <button onClick={()=>setButton(button+1)}>Click me</button>
    </div>
  )
}

export default Button;