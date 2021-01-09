import React, {useState} from 'react';
import './App.css'

function Todo({todo, index, completeTodo, deleteTodo}){
  return (
    <div key={index} style={{textDecoration: todo.isComplete ? 'line-through' : ''}}className='todo'>
      {todo.text}
      
      <button onClick={() => completeTodo(index) }>Complete</button>
      <button onClick={() => deleteTodo(index) }>x</button>
    </div> 
  )
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // if(!value) return;
    addTodo(value);
    setValue('');
  };
  return(
    <form onSubmit={handleSubmit}>
        <input type='text' className='input'  placeholder='write a new todo' value={value} onChange={e => setValue(e.target.value)}/>
        <input type='submit'/>
    </form>
  )
}
function App() {
  const [todos, setTodos] = useState([
    {text: 'Learn about react',
      isComplete: false
    },
    {text: 'Go to gym',
      isComplete: false
    },
    {text: 'Practice archery',
      isComplete: false
    },
  ])
  const addTodo = text => {
    console.log(text)
    console.log(todos)
    const newTodos = [...todos, {text, isComplete:false}];
    setTodos(newTodos);
  }
  const completeTodo = i => {
    const newTodos = [...todos];
   
    newTodos[i].isComplete = !newTodos[i].isComplete;
    setTodos(newTodos)
    
  }

  const deleteTodo = i => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className='todoList'>
        {todos.map((todo, i) =>
          <Todo key={i} todo={todo} index={i} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        )}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
