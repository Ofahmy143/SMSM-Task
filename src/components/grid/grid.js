import './grid.css';
import List from '../list/list';
import Input from '../Input/input'


function Grid() {
  let list = [{todo: "go to GYM" , priority: 'HIGH' , visible: 1},{todo: "do your hw" , priority: 'LOW', visible: 1}]

  const highprList = list.filter(item =>  item.priority.toLowerCase() === 'high')
  const medprList = list.filter(item =>  item.priority.toLowerCase() === 'med')

  const lowprList = list.filter(item =>  item.priority.toLowerCase() === 'low')


  return (
    <div className='grid'>
    <Input />
    <List
    list = {highprList} />

    </div>
  );
}

export default Grid;