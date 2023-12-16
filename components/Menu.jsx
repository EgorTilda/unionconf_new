import React, { useState } from "react";
const Menu = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <nav className="menu">
            <div className="menu__inner">
                <a href="#" onClick={() => close()} className="menu__link  menu__link--active menu__link--first">Главная</a>
                <a href="#" onClick={() => close()} className="menu__link">О платформе</a>
                <a href="#" onClick={() => close()} className="menu__link">Преимущества</a>
                <a href="#" onClick={() => close()} className="menu__link">Локации</a>
                <a href="#" onClick={() => close()} className="menu__link">Функционал</a>
            </div>
        </nav>
    );
};

export default Menu;