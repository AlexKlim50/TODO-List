const Todo = (props) => {

    function addZero(d) {
        return (d < 10) ? '0' + d : d;
    }
    const todoDate = () => {
        let dateObj = new Date(props.task._createdAt);
        let month = addZero(dateObj.getMonth() + 1);
        let year = dateObj.getFullYear();
        let date = dateObj.getDate()
        return (
            `${year}/${date}/${month}`
        )
    }

    return (
        <div className="task">
            <div className="taskTitle">
                <div>
                    {props.task.title}
                </div>
                <div>
                    {todoDate()}
                </div>
                <button onClick={() => props.onUpdateTodo(props.task)}>
                    {props.task.status}
                </button>
            </div>
            <button>Редактировать</button>
            <button onClick={() => props.onDeleteTodo(props.task._id)}>Удалить</button>
        </div>
    )
}
export default Todo;