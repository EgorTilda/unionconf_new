
const Menu = ({active, setActive}) => {
    return (
        <nav className={active ? 'menu active' : 'menu'}>
            <div className="menu__inner">
                <a href="#main" className="menu__link menu__link--first">Главная</a>
                <a href="#about" className="menu__link">О платформе</a>
                <a href="#benefits" className="menu__link">Преимущества</a>
                <a href="#spaces" className="menu__link">Локации</a>
                <a href="#scale" className="menu__link">Функционал</a>
            </div>
        </nav>
    );
};

export default Menu;