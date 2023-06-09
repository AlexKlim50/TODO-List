import './App.css';
import Header from './component/Header.js';
import Content from './component/Сontent';
import { useState, useEffect } from "react";
import { getAllTodos, createTodo, deleteTodo, changeTodo, getIntervalTodos } from "./services/api.req";
import { getNextTodoStatus } from "./utils/getNextTodoStatus";
import Modal from './component/Modal';

function App() {

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const [modal, setModal] = useState({ modal: false, todo: null })

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

  const onUpdateStatusTodo = (todo) => {
    const updateTodo = { ...todo, status: getNextTodoStatus(todo.status) }
    changeTodo(updateTodo).then((res) => setTodos((prev) => prev.map((todo) => {
      const newTodo = res.data
      return newTodo._id === todo._id ? newTodo : todo
    })))
  }

  const onCloseModal = () => {
    setModal({ modal: false, todo: null })
  }

  const onUpdateTitleTodo = (updatedTodo) => {
    changeTodo(updatedTodo).then((res) => {
      setTodos((prev) => prev.map((todo) => {
        const newTodo = res.data
        return newTodo._id === todo._id ? newTodo : todo
      }))
      onCloseModal()
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header onTimeIntervalTodos={onTimeIntervalTodos} />
      </header>
      {modal.modal && <Modal isOpenModal={modal.modal} onCloseModal={onCloseModal} todo={modal.todo} onUpdateTitleTodo={onUpdateTitleTodo} />}
      <div className="App-content">
        <Content onCreateTodo={onCreateTodo} onDeleteTodo={onDeleteTodo} onUpdateStatusTodo={onUpdateStatusTodo} value={value} setValue={setValue} todos={todos} setModal={setModal} modal={modal} />
      </div>
    </div>
  );
}

export default App;
