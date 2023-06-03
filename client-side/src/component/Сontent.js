
import Todo from "./Todo";
import { useState, useEffect } from "react";
import { getAllTodos, createTodo, deleteTodo, changeStatusTodo } from "../services/api.req";
import { getNextTodoStatus } from "../utils/getNextTodoStatus";

const Content = () => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('')

    useEffect(() => {
        getAllTodos().then((res) => setTodos(res.data))
    }, [])

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
        <div className="content">
        
            <div className="contentTask">
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={onCreateTodo}> добавление новой задачи</button>
            </div>
            <div className="textTask">
                {
                    todos.map((obj) => {
                        return <Todo task={obj} key={obj._id} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo} />
                    })
                }
            </div>
            <div className="contentTask">
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={onCreateTodo} > добавление новой задачи</button>
            </div>
        </div>
    )
}
export default Content;