import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="header">
            <div class="container">
                    <div class="header__row">
                        <a href="#main" class="logo">
                            <img src="./img/logo.svg" alt="UNIONCONF Логотип" />
                        </a>
                        <Navbar /> 
                        <button class="menu-btn">
                            <img src="./icon/menu-btn.svg" alt="Меню" />
                        </button>
                    </div>
                </div>
        </header>
    )
}

export default Header;