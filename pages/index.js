import Head from 'next/head';
import { useState, useRef, useEffect } from "react";
import Header from './../components/Header';
import FloatBtn from './../components/FloatBtn';
import AboutCard from './../components/AboutCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';

export default function Home() {
  const ref = useRef(null);
  const [isVisibleText, setVisibleText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setVisibleText(entry.isIntersecting);
    });
    observer.observe(ref.current);
  }, []);
 

  return (
    <>
      <Head>
        <title>Unionconf</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page">
      
            <div className="page-top"  id="main">
                <Header />
                <section className="intro">
                    <div className="container intro__container">
                    <div className="intro__inner">
                        <div className="intro__cta-content">
                                    <h1 className="intro__title">Весь мир online</h1>
                                    <p className="intro__subtitle">на вашем событии Unionconf</p>
                            </div>
                    </div>
                    </div>
                    <div className="intro__btn-wrap">
                        <button class="btn-cta intro__btn">Попробовать</button>
                    </div>
                </section>
            </div>

          <main className="main">
            <section className="about" id="about">
                <h2 className="ticker-title">
                    <div className="ticker-title__inner">
                        <span className="ticker-title__item">
                            <span>Web3</span>
                            <span>Выставки</span>
                            <span>Хакатоны</span>
                            <span>Конференции</span>
                            <span>Презентации</span>
                        </span>
                        <span className="ticker-title__item">
                            <span>Web3</span>
                            <span>Выставки</span>
                            <span>Хакатоны</span>
                            <span>Конференции</span>
                            <span>Презентации</span>
                        </span>
                    </div>
                </h2>
                
                <div className="about__main">
                    <div className="container about__container">
                        <h3 className="about__title title">Unionconf – платформа для проведения мероприятий в виртуальной
                            реальности
                        </h3>

                        <div className="about__card-row">
                            <div className="about-card-wrapper">
                                <AboutCard title="Цифровые пространcтва" 
                                text="Все события проходят в брендированных виртуальных локациях"
                                srcIcon="Location-icon.png" />
                            </div>
                            <div className="about-card-wrapper">
                                <AboutCard title="Нетворк&CRM" 
                                    text="Удобный функционал для коммуникации с клиентами и партнёрами во время мероприятия"
                                    isGray
                                    srcIcon="Scale-icon.png" />
                            </div>
                            <div className="about-card-wrapper about-card__item--3">
                                <AboutCard title="Быстрый доступ" 
                                        text="Удобное подключение к мероприятию с компьютера"
                                        srcIcon="Desctop-icon.png" />
                            </div>
                            <div className="about-card-wrapper about-card__item--4">
                                <AboutCard title="Презентация продукта" 
                                            text="Вовлечение участников геймификацией и интерактивными стендами вашего бизнеса"
                                            isGray
                                            srcIcon="Game-icon.png" />
                            </div>
                        </div>

                        {/* <div className="about__stat">
                            <div className="stat-elem stat-elem--left">
                                <div className="stat-elem__data">
                                    <span className="stat-elem__value">1000+</span>
                                    <span className="stat-elem__content stat-elem__content--left">дополнительной аудитории к Вашему событию</span>
                                </div>
                            </div>

                            <div className="about__img">
                                <picture>
                                    <source srcset="./img/about-block/avatar-mobile.png" media="(max-width: 576px)" />
                                    <img src="./img/about-block/avatar-complex.png" alt="Avatar"/>
                                </picture>
                            </div>

                            <div className="stat-elem stat-elem--right">
                                <div className="stat-elem__data">
                                    <span className="stat-elem__value">8000+</span>
                                    <span className="stat-elem__content stat-elem__content--right">online-мероприятий проходят в мире каждый час</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="network">
                <div className="network__inner">
                    <div className="container">
                        <h2 ref={ref} className= {isVisibleText ? 'network__main-title text-anim active' : 'network__main-title text-anim'}>
                            Хотите создать виртуальное событие? 
                            Вместе с Unionconf это легко!
                        </h2>
                    </div>
                    <div className="network__content-wrap">
                        <div className="container">
                            <div className="network__content">
                                <div class="title-wrap">
                                        <div class="title-decor">{`{`}</div>
                                        <h2 class="network__title title title--decor">Умный <br/> Нетворкинг</h2>
                                </div>
                                <div class="network__text">
                                        <h3 class="network__subtitle subtitle">Найти нужный <br/> контакт — легко
                                        </h3>
                                        <p class="network__p text">
                                            Партнёры, клиенты и специалисты могут <br/>обмениваться контактами и решать
                                            задачи <br/>бизнеса прямо на мероприятии
                                        </p>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="network__img">
                      <img src="./img/about-block/cover.png" alt="Нетворкинг" />
                    </div>
                </div>
            </section>

            <section className="benefits" id="benefits">
                <div className="benefits__path">
                    <svg width="1921" height="213" viewBox="0 0 1921 213" fill="#F9F9F9" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1920.39 0.805664H0.390625V212.279H647.035C702.85 212.279 757.574 196.835 805.152 167.657L816.273 160.836C909.531 103.646 1027.45 105.565 1118.8 165.76C1164.85 196.105 1218.78 212.279 1273.93 212.279H1920.39V0.805664Z" fill="#F9F9F9"/>
                    </svg>
                </div>
                <div className="logo-abb">
                    <img src="./img/logo-abb.svg" alt="UC Logo"/>
                </div>
                <div className="benefits__cta-content">
                    <h2 className="benefits__cta-title">Все, что нужно <br/> <span className="benefits__cta-decor">для
                            вовлечения</span></h2>
                    <div className="benefits__cta-text">
                        <p>
                            Каждый пользователь мероприятия <br/> проживает уникальный опыт, спродюсированный под задачи
                            организатора и цели участников
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="benefits__main-content">
                        <h2 className="benefits__title">Вас точно запомнят</h2>
                        <div className="benefits__col">
                            <div className="benefits-card">
                                <div className="benefits-card__inner">
                                    <div className="benefits-card__num">01</div>
                                    <div className="benefits-card__content">
                                        <div className="benefits-card__title">Инфоповод</div>
                                        <div className="benefits-card__desc">
                                            <p>
                                                Мероприятие станет отправной точкой пиара бренда и активными
                                                упоминаниями в СМИ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-card">
                                <div className="benefits-card__inner">
                                    <div className="benefits-card__num">02</div>
                                    <div className="benefits-card__content">
                                        <div className="benefits-card__title">Брендированное <br/>
                                            пространство
                                        </div>
                                        <div className="benefits-card__desc">
                                            <p>
                                                Дизайн локации создается в соответствии с фирменным стилем компании
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="benefits-card">
                                <div className="benefits-card__inner">
                                    <div className="benefits-card__num">03</div>
                                    <div className="benefits-card__content">
                                        <div className="benefits-card__title">Иммерсивный опыт</div>
                                        <div className="benefits-card__desc">
                                            <p>
                                                Формат мероприятия создаёт максимальное погружение пользователей в
                                                процесс участия
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="ticker-title">
                        <div className="ticker-title__inner">
                            <div className="ticker-title__inner">
                                <span className="ticker-title__item">
                                    <span>Круглые столы</span>
                                    <span>Хакатоны</span>
                                    <span>Поиск соискателей и партнеров</span>
                                    <span>Нетворкинг</span>
                                </span>
                                <span className="ticker-title__item">
                                    <span>Круглые столы</span>
                                    <span>Хакатоны</span>
                                    <span>Поиск соискателей и партнеров</span>
                                    <span>Нетворкинг</span>
                                </span>
                                <span className="ticker-title__item">
                                    <span>Круглые столы</span>
                                    <span>Хакатоны</span>
                                    <span>Поиск соискателей и партнеров</span>
                                    <span>Нетворкинг</span>
                                </span>
                            </div>
                        </div>
                </h2>
            </section>

            <section className="spaces" id="spaces">
                <div className="spaces__path">
                    <svg width="1920" height="323" viewBox="0 0 1920 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1214.7 137.375C1179.23 137.375 1150.38 166.237 1150.38 201.71C1150.38 235.855 1207.03 313.997 1209.52 317.375H1213.52C1213.79 317.746 1215.41 317.375 1215.87 317.375C1216.33 317.375 1218.07 316.416 1218.35 316.045L1219.52 317.68C1222 314.301 1279.04 235.855 1279.04 201.71C1279.04 166.237 1250.18 137.375 1214.7 137.375ZM1214.7 178.665C1227.41 178.665 1237.75 189.001 1237.75 201.71C1237.75 214.413 1227.41 224.755 1214.7 224.755C1202 224.755 1191.66 214.413 1191.66 201.71C1191.66 189.001 1202 178.665 1214.7 178.665Z" fill="#F9F9F9"/>
                        <path d="M1194.02 316.238H1235.36" stroke="#8CB0FA" stroke-width="3" stroke-linecap="round"/>
                        <circle cx="1214.52" cy="201.875" r="23.5" fill="#DCF36E"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V291.975C0 236.746 44.7734 191.975 100 191.975H952.812C1001.48 191.975 1048.38 173.686 1084.2 140.734C1156.54 74.1953 1267.2 72.2344 1341.85 136.17L1349.37 142.615C1386.56 174.469 1433.91 191.975 1482.88 191.975H1842C1885.08 191.975 1920 226.896 1920 269.975V0H0Z" fill="#FDFDFD"/>
                    </svg>
                </div>
                <div className="spaces__container container">
                    <div className="spaces__text-content">
                        <h2 className="spaces__title">Цифровые пространства Unionconf</h2>
                        <div className="spaces__text">
                            <p>
                                Виртуальные локации для приватных встреч, переговоров и презентаций
                            </p>
                        </div>
                    </div>
                      <Swiper
                        loop={true}  
                        navigation={{
                          nextEl: '.space-slider__control--next',
                          prevEl: '.space-slider__control--prev'
                        }} 
                        modules={[Navigation]}
                        className="space-slider swiper"
                      >
                        <div className="space-slider__controls">
                            <div className="space-slider__controls-inner">
                                <div className="space-slider__control space-slider__control--mobile space-slider__control--prev">
                                                    →
                                </div>
                                <div className="space-slider__control space-slider__control--mobile space-slider__control--next">
                                                    →
                                </div>
                            </div>
                        </div>
                        
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="space-slider__slide">
                                    <div className="space-slider__img">
                                        <div className="space-slider__control space-slider__control--prev">
                                            →
                                        </div>
                                        <div>
                                            <h3 className="space-slider__title">Conference Hall</h3>
                                            <img src="./img/digital-space/slide-1.png" alt="Conference Hall"/>
                                        </div>
                                        <div className="space-slider__control space-slider__control--next">
                                            →
                                        </div>
                                    </div>
                                    <div className="space-slider__main">
                                        <div className="space-slider__content">
                                            <h3 className="space-slider__title">Conference Hall</h3>
                                            <div className="space-slider__text">
                                                <p>
                                                    Место, в котором вы можете разместить информацию
                                                    о продуктах компании на виртуальных стендах, познакомиться
                                                    со всеми участниками конференции
                                                    и представителями бизнеса.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="#" className="btn-link">
                                            <span className="btn-link__text">Перейти к локациям</span>
                                            <img className="btn-link__icon" src="./icon/arrow-btn-link.svg"
                                                alt="Перейти"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                    <div className="space-slider__slide">
                                        <div className="space-slider__img">
                                            <div className="space-slider__control space-slider__control--prev">
                                                →
                                            </div>
                                            <div>
                                                <h3 className="space-slider__title">Meet Up</h3>
                                                <img src="./img/digital-space/slide-2.png" alt="Meet Up"/>
                                            </div>
                                            <div className="space-slider__control space-slider__control--next">
                                                →
                                            </div>
                                        </div>
                                        <div className="space-slider__main">
                                            <div className="space-slider__content">
                                                <h3 className="space-slider__title">Meet up</h3>
                                                <div className="space-slider__text">
                                                    <p>
                                                        Место для выступления спикеров, располагающее
                                                        к нетворкингу между участниками мероприятия и поиску новых
                                                        контактов. 
                                                    </p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn-link">
                                                <span className="btn-link__text">Перейти к локациям</span>
                                                <img className="btn-link__icon" src="./icon/arrow-btn-link.svg"
                                                    alt="Перейти" />
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="swiper-slide">
                                <div className="space-slider__slide">
                                    <div className="space-slider__img">
                                        <div className="space-slider__control space-slider__control--prev">
                                            →
                                        </div>
                                        <div>
                                            <h3 className="space-slider__title">Japan Lounge</h3>
                                            <img src="./img/digital-space/slide-3.png" alt="Japan Lounge"/>
                                        </div>
                                        <div className="space-slider__control space-slider__control--next">
                                            →
                                        </div>
                                    </div>
                                    <div className="space-slider__main">
                                        <div className="space-slider__content">
                                            <h3 className="space-slider__title">Japan Lounge</h3>
                                            <div className="space-slider__text">
                                                <p>
                                                    Локация в спокойном японском стиле, которая подойдет для проведения
                                                    совещаний, переговоров или организации встреч с командой.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="#" className="btn-link">
                                            <span className="btn-link__text">Перейти к локациям</span>
                                            <img className="btn-link__icon" src="./icon/arrow-btn-link.svg"
                                                alt="Перейти" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="space-slider__slide">
                                    <div className="space-slider__img">
                                        <div className="space-slider__control space-slider__control--prev">
                                            →
                                        </div>
                                        <div>
                                            <h3 className="space-slider__title">Arabian Night</h3>
                                            <img src="./img/digital-space/slide-4.png" alt="Arabian Night"/>
                                        </div>
                                        <div className="space-slider__control space-slider__control--next">
                                            →
                                        </div>
                                    </div>
                                    <div className="space-slider__main">
                                        <div className="space-slider__content">
                                            <h3 className="space-slider__title">Arabian Night</h3>
                                            <div className="space-slider__text">
                                                <p>
                                                    Восточная атмосфера данной локации располагает к спокойному
                                                    и непринуждённому разговору, подойдёт для приватного общения
                                                    с коллегами или партнёрами
                                                    в неформальной обстановке
                                                </p>
                                            </div>
                                        </div>
                                        <a href="#" className="btn-link">
                                            <span className="btn-link__text">Перейти к локациям</span>
                                            <img className="btn-link__icon" src="./icon/arrow-btn-link.svg"
                                                alt="Перейти"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="space-slider__slide">
                                    <div className="space-slider__img">
                                        <div className="space-slider__control space-slider__control--prev">
                                            →
                                        </div>
                                        <div>
                                            <h3 className="space-slider__title">Spaceship</h3>
                                            <img src="./img/digital-space/slide-5.png" alt="Spaceship"/>
                                        </div>
                                        <div className="space-slider__control space-slider__control--next">
                                            →
                                        </div>
                                    </div>
                                    <div className="space-slider__main">
                                        <div className="space-slider__content">
                                            <h3 className="space-slider__title">Spaceship</h3>
                                            <div className="space-slider__text">
                                                <p>
                                                    Космический корабль
                                                    в футуристичном стиле, на котором можно провести презентацию
                                                    продукта, организовать переговоры с партнёрами по бизнесу
                                                    и поучаствовать в увлекательных игровых интерактивах с коллегами.
                                                </p>
                                            </div>
                                        </div>
                                        <a href="#" className="btn-link">
                                            <span className="btn-link__text">Перейти к локациям</span>
                                            <img className="btn-link__icon" src="./icon/arrow-btn-link.svg"
                                                alt="Перейти"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
              </div>
            </section>

            <section class="scale" id="scale">
                <div class="container">
                    <div class="scale__title-wrap">
                        <h2 class="scale__title">Масштаб для бизнеса</h2>
                        <div class="scale__title-decor"></div>
                        <div class="scale__title-tag">Возможности платформы</div>
                    </div>
                    <h3 class="scale__subtitle">Аудитория со всего мира, мгновенная коммуникация, низкая себестоимость и
                        высокая прибыль
                    </h3>
                    <div className="scale__card-row">
                            <div className="scale-card-wrapper">
                                <div className="scale-card">
                                    <div className="scale-card__inner">
                                      <div className="scale-card__content">
                                          <img className="scale-card__icon" src="./img/scale/app.png" alt="app" />
                                            <p className="scale-card__text">
                                                Удобное взаимодействие между онлайн и офлайн участниками через мобильное приложение
                                            </p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div className="scale-card-wrapper">
                            <div className="scale-card">
                                    <div className="scale-card__inner scale-card__inner--gray">
                                      <div className="scale-card__content">
                                          <img className="scale-card__icon" src="./img/scale/srm.png" alt="app" />
                                            <p className="scale-card__text">
                                                Удобная CRM система 
                                                для аналитики метрик конференции
                                            </p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div className="scale-card-wrapper">
                                <div className="scale-card">
                                    <div className="scale-card__inner">
                                      <div className="scale-card__content">
                                        <img className="scale-card__icon" src="./img/scale/interface.png" alt="app" />
                                          <p className="scale-card__text">
                                              Простой интерфейс управления выступлением
                                          </p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div className="scale-card-wrapper">
                            <div className="scale-card">
                                    <div className="scale-card__inner scale-card__inner--gray">
                                      <div className="scale-card__content">
                                        <img className="scale-card__icon" src="./img/scale/search.png" alt="app" />
                                          <p className="scale-card__text">
                                            Доступная база данных со всеми участниками конференции
                                          </p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </section>

            <section className="contact">
                <div className="contact__wrap">
                    <div className="contact__container container">
                        <div className="contact__content">
                            <h2 className="contact__title">обратная <br />связь</h2>
                            <form className="contact-form" action="#" method="POST" name="form-contact">
                                <fieldset className="contact-form__fields">
                                    <legend className="contact-form__title">Оставьте контактные данные:</legend>
                                    <input type="email" className="contact-form__field form-field"
                                        placeholder="Почта: example@mail.com" />
                                    <input type="tel" className="contact-form__field form-field"
                                        placeholder="Телефон: +7(916)111-11-11" />
                                    <button type="submit" className="contact-form__btn">Отправить</button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="contact__img">
                            <img src="./img/contact-form/cover.png" alt="Unionconf" />
                        </div>
                    </div>
                </div>
                <div className="contact__bottom"></div>
            </section>
          </main>
          <footer className="footer">
            <div className="footer__inner">
                <div className="footer__title-wrap">
                    <div className="container">
                        <h2 className="footer__title">Присоединяйся</h2>
                    </div>
                </div>
                <div className="container footer__social-wrap">
                    <div className="footer__social">
                        <div className="footer__social-item">
                            <a href="#" className="footer__social-link">Youtube</a>
                        </div>
                        <div className="footer__social-item">
                            <a href="#" className="footer__social-link">Telegram</a>
                        </div>
                        <div className="footer__social-item">
                            <a href="#" className="footer__social-link">Вконтакте</a>
                        </div>
                    </div>
                </div>
                <div className="footer__uc">
                    <div className="container">
                        <a className="footer__uc-link-btn">
                            UNIONCONF
                            <img src="./icon/arrow-link-top-black.svg" alt="Перейти" />
                        </a>
                        <div className="footer__uc-wrap">
                            <div className="footer__uc-item">
                                <a href="#main" className="footer__uc-link">UNIONCONF</a>
                                <img src="./icon/arrow-link-top-black.svg" alt="Перейти" />
                            </div>
                            <div className="footer__uc-item">
                                <a href="#main" className="footer__uc-link">UNIONCONF</a>
                                <img src="./icon/arrow-link-top-black.svg" alt="Перейти" />
                            </div>
                            <div className="footer__uc-item">
                                <a href="#main" className="footer__uc-link">UNIONCONF</a>
                                <img src="./icon/arrow-link-top-black.svg" alt="Перейти" />
                            </div>
                            <div className="footer__uc-item">
                                <a href="#main" className="footer__uc-link">UNIONCONF</a>
                                <img src="./icon/arrow-link-top-black.svg" alt="Перейти" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__contacts">
                    <div className="container">
                        <div className="footer__contacts-inner">
                            <div className="footer__links">
                                <div className="footer__links-title">Контакты:</div>
                                <a href="mailto:Unionconf@mail.com" className="email">info@unionconf.com</a>
                                <a href="mailto:Unionconf@mail.com" className="email">pr@unionconf.com</a>
                                <a href="tel:+79859078489" className="phone">+7 (985) 907-84-89</a>
                            </div>
                            <div className="copyright">
                                <img src="./img/logo-abb.svg" alt="UC Лого" />
                                <span>ООО "ЮНИОНКОНФ" ИНН 9731120123</span>
                                <span>Unionconf, 2023. Все права защищены.</span>
                            </div>
                            <div className="footer__links--h">
                                <div className="footer__links-title">Контакты:</div>
                                <a href="mailto:Unionconf@mail.com" className="email">Unionconf@mail.com</a>
                                <a href="tel:+79859078489" className="phone">+7 (985) 907-84-89</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </footer>

        <FloatBtn />
      </div>
    </>
  )
}
