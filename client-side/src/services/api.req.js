import axios from 'axios'

const url = 'http://localhost:3001';

const getAllTodos = () => {
    return axios.get(`${url}/todos`)
}

const createTodo = (title) => {
    return axios(`${url}/create-todo`, { method: 'POST', data: { title } })
}

const deleteTodo = (id) => {
    return axios(`${url}/todo/${id}`, { method: 'DELETE'})
}

const changeTodo = (todo) => {
    return axios(`${url}/update-todo/${todo._id}`, { method: 'PATCH', data: todo })
}
const getIntervalTodos =(timeInterval) => {
    return axios(`${url}/todos/${timeInterval}`)
}

export { url, getAllTodos, createTodo, deleteTodo, changeTodo, getIntervalTodos  };
