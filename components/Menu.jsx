
const Menu = ({active, setActive}) => {
    return (
        <nav className={active ? 'menu active' : 'menu'}>
            <div className="menu__inner">
                <a href="#main" onClick={() => close()} className="menu__link menu__link--first">Главная</a>
                <a href="#about" onClick={() => close()} className="menu__link">О платформе</a>
                <a href="#benefits" onClick={() => close()} className="menu__link">Преимущества</a>
                <a href="#spaces" onClick={() => close()} className="menu__link">Локации</a>
                <a href="#scale" onClick={() => close()} className="menu__link">Функционал</a>
            </div>
        </nav>
    );
};

export default Menu;