import { useEffect, useState } from "react";

const Modal = (props) => {
    const [value, setValue] = useState()

    useEffect(() => {
        setValue(props.todo.title)
    }, [props.todo.title])

    return (
        <div className={`modal ${props.isOpenModal ? 'open' : 'close'}`}>
            <div className="modal-body">
                <input className="modal-text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button className="modal-btn" value={value} onClick={() => props.onUpdateTitleTodo({...props.todo, title: value})}>Сохранить</button>
                <button className="modal-btn" onClick={props.onCloseModal}>Закрыть</button>
            </div>
        </div>
    )
}
export default Modal;