import React, { useState } from "react";

const AboutCard = ({ title, text, isGray, srcIcon }) => {
    const [isRotated, setRotate] = useState(false);

    return (
        <div className={isRotated ? 'about-card rotate' : 'about-card'} onClick={() => setRotate(!isRotated)}>
            <div className={isGray ? 'about-card__inner about-card__inner--gray' : 'about-card__inner'}>
                <h3 className="about-card__title">
                    {title}
                </h3>
                <div className="about-card__back-content">
                    <div className="about-card__back-inner">
                        <img className="about-card__back-img" src={`./img/about-block/${srcIcon}`}/>
                        <p className="about-card__back-text">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;