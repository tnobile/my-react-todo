import React, { useState } from "react";
import './App.css';
import Todos from "./components/Todos/Todos"

function App() {
  const [todos, setTodos] = useState(DATA);

  const addTodo = (text) => setTodos([...todos, { text }]);
  
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
    console.log('complete todo with ' + index);
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <Todos
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        addTodo={addTodo} />
    </div>
  );
}


const DATA = [
  {
    id: 1,
    text: 'learn about react',
    isCompleted: false
  },
  {
    id: 2,
    text: 'meet friends',
    isCompleted: false
  },
  {
    id: 3,
    text: 'build app',
    isCompleted: false
  },
  {
    id: 4,
    text: 'learn azure',
    isCompleted: true
  },
]

export default App;
