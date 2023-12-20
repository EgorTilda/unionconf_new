import Navbar from './Navbar';

import React, { useState } from "react";
import Menu from './Menu';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <header className="header">
            <div class="container">
                    <div class="header__row">
                        <a href="#main" class="logo">
                            <img src="./img/logo.svg" alt="UNIONCONF Логотип" />
                        </a>
                        <Navbar /> 
                        <button class="menu-btn" onClick={() => setMenuActive(!menuActive)}>
                            <img src="./icon/menu-btn.svg" alt="Меню" />
                        </button>
                    </div>
                </div>
                <Menu active={menuActive} setActive={setMenuActive}/>
        </header>
    )
}

export default Header;