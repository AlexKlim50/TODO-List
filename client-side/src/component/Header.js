import react from 'react'

const Header = (props) => {
    return (
        <div className="header">
            <div className='headerText'>
                <h1>Список задач</h1>
            </div>
            <div className='btn'>
                <div className="btn-all">
                    <button onClick={() => props.onTimeIntervalTodos()}>Все</button>
                </div>
                <div className="btn-day">
                    <button onClick={() => props.onTimeIntervalTodos('day')}>День</button>
                </div>
                <div className="btn-week">
                    <button onClick={() => props.onTimeIntervalTodos('week')}>Неделя</button>
                </div>
                <div className="btn-month">
                    <button onClick={() => props.onTimeIntervalTodos('month')}>Месяц</button>
                </div>
            </div>
        </div>
    )
}
export default Header; 