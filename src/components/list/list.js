import './list.css';
import Item from '../items/items'
import { Fragment } from 'react';

function List({list}) {
  return (
    <div className='list' >

      {list.map(item => {
    return <Item 
    todo = {item.todo}
    priority = {item.priority}
    visible = {1}
    />
      })}


        </div>

  );
}

export default List;
