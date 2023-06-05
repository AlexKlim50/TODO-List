import './App.css';
import react, { Component } from 'react';
import Header from './component/Header.js';
import Content from './component/Сontent';
import { useState, useEffect } from "react";
import { getAllTodos, createTodo, deleteTodo, changeStatusTodo, getIntervalTodos } from "./services/api.req";
import { getNextTodoStatus } from "./utils/getNextTodoStatus";

function App() {

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('')

  useEffect(() => {
    getAllTodos().then((res) => setTodos(res.data))
  }, [])

  const onTimeIntervalTodos = (timeInterval) => {
    getIntervalTodos(timeInterval).then((res) => setTodos(res.data))
  }

  const onCreateTodo = () => {
    createTodo(value).then((res) => setTodos([res.data, ...todos]))
    setValue('')
  }

  const onDeleteTodo = (id) => {
    deleteTodo(id).then(() => setTodos((prev) => prev.filter((obj) => obj._id !== id)))
  }

  const onUpdateTodo = (todo) => {
    const updateTodo = { ...todo, status: getNextTodoStatus(todo.status) }
    changeStatusTodo(updateTodo).then((res) => setTodos((prev) => prev.map((todo) => {
      const newTodo = res.data
      return newTodo._id === todo._id ? newTodo : todo
    })))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header onTimeIntervalTodos={onTimeIntervalTodos} />
      </header>
      <div className="App-content">
        <Content onCreateTodo={onCreateTodo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo} value={value} setValue={setValue} todos={todos} />
      </div>
    </div>
  );
}

export default App;
