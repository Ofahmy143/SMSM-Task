import logo from './logo.svg';
import './header.css';

function header() {
  return (
    <div className='head'>
        <h1>Todo-List</h1>  
        <div className='links'>
        <a href='#'>Home</a>
        <a href='#'>Login</a>      
        <a href='#'>Signup</a> 
        </div>
     
      
    </div>
  );
}

export default header;