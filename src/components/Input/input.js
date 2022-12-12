import {Fragment, useState} from 'react';
import './input.css';


function Input() {
const[test , setText] = useState(true)
const handleText = event =>{
    setText(event.target.value)
    console.log(event.target.value);
}
  return (
    <div className='input'>
        <input type="text" value="text" onChange={handleText} placeholder='title'/>
        <button className='inputButton'>HIGH</button>
        <button className='inputButton'>Add</button>

    </div>
  );
}
export default Input;
