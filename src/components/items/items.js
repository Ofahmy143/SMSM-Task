import {Fragment, useState} from 'react';
import './items.css';


function Item({todo , priority , visible}) {
  //if(visible == 1) alert('YES')
  const [vis, setVisible] = useState(true);

  const del = (e) => {
    e.preventDefault()
    setVisible((prev) => !prev);
  };

  return (
    <Fragment>

          {vis && (
                <div className='item'>

             <button id='del' onClick={del}>del </button>
             <p className='title'>{todo} </p>
            <p className='priority'>{priority}</p>
            </div>



    )}


  </Fragment>

  );
}


export default Item;
