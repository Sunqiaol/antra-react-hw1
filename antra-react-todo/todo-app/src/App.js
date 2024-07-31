import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from "./components/todo";
import Todoform from "./components/todo-form";

function App() {
  const [todos, setTodos] = useState([]);

  const deleteHandler = (index) => {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
  };

  const addNewTodo = (newTodoValue) => {
    if (newTodoValue != "") {
      const newTodos = [...todos, { title: newTodoValue }];
      setTodos(newTodos);
    }

  };

  return (
    <div>
      <Todoform addNewTodo={addNewTodo} />
      {
        todos.map((todo, index) => {
          return (
            <Todo
              title={todo.title}
              deleteHandler={() => deleteHandler(index)}
              key={index}
            />
          );
        })
      }
    </div>
  );
}

export default App;
