
import "./styles.css"

const Navbar = () => (
    <nav className="navbar">
        <div className="NavContent">
            <p className="logo">MINECRAFT SERVER</p>
            <ul className="nav">
                <li className="nav__item"><a href="#">Главная</a></li>
                <li className="nav__item"><a href="#">Сервера</a></li>
                <li className="nav__item"><a href="#">Магазин</a></li>
                <li className="nav__item"><a href="#">Правила</a></li>
            </ul>
            <button><a className="lk" href="#">Личный Кабинет</a></button>
        </div>

    </nav>
)

export default Navbar
