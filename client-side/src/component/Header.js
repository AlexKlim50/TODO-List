

const Header = (props) => {
    return (
        <div className="header">
            <div className='headerText'>
                <h1>Список задач</h1>
            </div>
            <div className='header-btn'>
                <div className="btn-all">
                    <button className="btn-all-title" onClick={() => props.onTimeIntervalTodos()}>Все</button>
                </div>
                <div className="btn-day">
                    <button className="btn-day-title"  onClick={() => props.onTimeIntervalTodos('day')}>День</button>
                </div>
                <div className="btn-week">
                    <button className="btn-week-title"  onClick={() => props.onTimeIntervalTodos('week')}>Неделя</button>
                </div>
                <div className="btn-month">
                    <button className="btn-month-title"  onClick={() => props.onTimeIntervalTodos('month')}>Месяц</button>
                </div>
            </div>
        </div>
    )
}
export default Header; 