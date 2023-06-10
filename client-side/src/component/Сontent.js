import Todo from "./Todo";

const Content = (props) => {

    return (
        <div className="content">
            <div className="contentTask">
                <input className="inp-content" type="text" value={props.value} onChange={(e) => props.setValue(e.target.value)} />
                <button className="btn-contentTask" onClick={props.onCreateTodo}> добавление новой задачи</button>
            </div>
            <div className="textTask">
                {
                    props.todos.map((obj) => {
                        return <Todo task={obj} key={obj._id} onDeleteTodo={props.onDeleteTodo} onUpdateStatusTodo={props.onUpdateStatusTodo} setModal={props.setModal} modal={props.modal} />
                    })
                }
            </div>
            <div className="contentTask">
                <input className="inp-content" type="text" value={props.value} onChange={(e) => props.setValue(e.target.value)} />
                <button className="btn-contentTask" onClick={props.onCreateTodo} > добавление новой задачи</button>
            </div>
        </div>
    )
}
export default Content;