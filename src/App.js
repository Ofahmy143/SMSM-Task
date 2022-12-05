import './App.css';

function App({todo , priority}) {
  return (
    <div className='contain'>
      {todo} 
      <p>{priority}</p>
    </div>
  );
}

export default App;
