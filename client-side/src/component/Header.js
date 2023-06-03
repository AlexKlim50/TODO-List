import react from 'react'

const Header = () => {
    return (
        <div className="header">
            <div className='headerText'>
                <h1>Список задач</h1>
            </div>
            <div className='btn'>
                <div className="btn-all">
                    <button >Все</button>
                </div>
                <div className="btn-day">
                    <button>День</button>
                </div>
                <div className="btn-week">
                    <button>Неделя</button>
                </div>
                <div className="btn-month">
                    <button>Месяц</button>
                </div>
            </div>
        </div>
    )
}
export default Header; 