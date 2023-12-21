import React, { useState, UseEffect, useEffect} from "react";

const FloatBtn = () => {
    const [FloatBtn, setFloatBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 800) {
                setFloatBtn(true);
            } else {
                setFloatBtn(false)
            }
        })
    });

    return (
       <a className={FloatBtn ? 'float-btn active' : 'float-btn'} href="#main">
            <img className="float-btn__icon" src="./icon/arrow-link-top-white.svg" alt="НАВЕРХ" />
       </a>
    )
}

export default FloatBtn;