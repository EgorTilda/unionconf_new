import Head from 'next/head';
import Image from 'next/image';
import Header from './../components/Header';
import Menu from './../components/Menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Unionconf</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page">
          <div className="page-top">
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
                    <button class="btn-cta intro__btn">Перейти</button>
                </div>
            </section>
          </div>
          <main className="main">
            <section className="about">
                <h2 className="ticker-title">
                    <div className="ticker-title__inner">
                        <span className="ticker-title__item">Web3</span>
                        <span className="ticker-title__item">Выставки</span>
                        <span className="ticker-title__item">Хакатоны</span>
                        <span className="ticker-title__item">Конференции</span>
                        <span className="ticker-title__item">Презентации</span>
                        <span className="ticker-title__item">Web3</span>
                        <span className="ticker-title__item">Выставки</span>
                        <span className="ticker-title__item">Хакатоны</span>
                        <span className="ticker-title__item">Конференции</span>
                        <span className="ticker-title__item">Презентации</span>
                        <span className="ticker-title__item">Web3</span>
                        <span className="ticker-title__item">Выставки</span>
                        <span className="ticker-title__item">Хакатоны</span>
                        <span className="ticker-title__item">Конференции</span>
                        <span className="ticker-title__item">Презентации</span>
                        <span className="ticker-title__item">Web3</span>
                        <span className="ticker-title__item">Выставки</span>
                        <span className="ticker-title__item">Хакатоны</span>
                        <span className="ticker-title__item">Конференции</span>
                        <span className="ticker-title__item">Презентации</span>
                    </div>
                </h2>
                
                <div className="about__main">
                    <div className="container about__container">
                        <h3 className="about__title title">Unionconf – платформа для проведения мероприятий в виртуальной
                            реальности
                        </h3>

                        <div className="about__card-row">
                            <div className="about-card-wrapper">
                                <div className="about-card">
                                    <div className="about-card__inner">
                                        <h3 className="about-card__title">
                                          Цифровые <br /> пространства
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="about-card-wrapper">
                            <div className="about-card">
                                    <div className="about-card__inner about-card__inner--gray">
                                        <h3 className="about-card__title">
                                            Нетворк <br /> &CRM
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="about-card-wrapper about-card__item--3">
                            <div className="about-card">
                                    <div className="about-card__inner">
                                        <h3 className="about-card__title">
                                          Быстрый <br /> доступ
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="about-card-wrapper about-card__item--4">
                            <div className="about-card">
                                    <div className="about-card__inner about-card__inner--gray">
                                        <h3 className="about-card__title">
                                          Презентация <br /> продукта
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about__stat">
                            <div className="stat-elem stat-elem--left">
                                <div className="stat-elem__data">
                                    <span className="stat-elem__value">1000+</span>
                                    дополнительной аудитории к Вашему событию
                                </div>
                            </div>

                            <div className="about__img">
                                <picture>
                                    <source srcset="./img/about-block/avatar-mobile.png" media="(max-width: 425px)" />
                                    <img src="./img/about-block/avatar-complex.png" alt="Avatar"/>
                                </picture>
                            </div>

                            <div className="stat-elem stat-elem--right">
                                <div className="stat-elem__data">
                                    <span className="stat-elem__value">8000+</span>
                                    online-мероприятий проходят в мире каждый час
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="ticker-title">
                        <div className="ticker-title__inner">
                            <span className="ticker-title__item">Круглые столы</span>
                            <span className="ticker-title__item">Хакатоны</span>
                            <span className="ticker-title__item">Поиск соискателей и партнеров</span>
                            <span className="ticker-title__item">Нетворкинг</span>
                            <span className="ticker-title__item">Круглые столы</span>
                            <span className="ticker-title__item">Хакатоны</span>
                            <span className="ticker-title__item">Поиск соискателей и партнеров</span>
                            <span className="ticker-title__item">Нетворкинг</span>
                        </div>
                    </h2>
                   
                </div>
            </section>

            <section className="network">
                <div className="network__inner">
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

            <section className="benefits">
                <div className="benefits__path">
                    <svg width="1921" height="213" viewBox="0 0 1921 213" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <nav className="benefits__nav">
                    <a href="#" className="benefits__link">
                        <img src="./icon/arrow-link.svg" alt="Перейти" className="benefits__link-icon"/>
                        <span>
                            будь <br/>
                            СПИКЕРом <br/>
                            партнёром <br/>
                            слушателем <br/>
                        </span>
                    </a>
                </nav>
            </section>

            <section className="spaces">
                <div className="spaces__path">
                <svg width="1920" height="252" viewBox="0 0 1920 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1472.68 65.7154C1437.2 65.7154 1408.35 94.5775 1408.35 130.05C1408.35 164.196 1465 242.337 1467.49 245.715H1471.49C1471.76 246.086 1473.39 245.715 1473.84 245.715C1474.3 245.715 1476.04 244.756 1476.32 244.385L1477.49 246.02C1479.98 242.642 1537.01 164.196 1537.01 130.05C1537.01 94.5775 1508.15 65.7154 1472.68 65.7154ZM1472.68 107.006C1485.39 107.006 1495.72 117.341 1495.72 130.05C1495.72 142.753 1485.39 153.095 1472.68 153.095C1459.97 153.095 1449.63 142.753 1449.63 130.05C1449.63 117.341 1459.97 107.006 1472.68 107.006Z" fill="#F9F9F9"/>
                    <path d="M1451.99 244.578H1493.34" stroke="#8CB0FA" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="1472.49" cy="130.215" r="23.5" fill="#DCF36E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V221.451C0 185.552 29.1016 156.451 65 156.451H66.6025L1272.47 156.451C1316.26 148.278 1355.17 123.172 1380.66 86.455L1382 84.5314L1402.85 64.3003C1423.32 44.4352 1449.76 35.5998 1475.56 36.9105C1506.82 38.3822 1537.18 54.7813 1554.81 84.5314C1582.64 123.074 1625.11 148.461 1672.24 154.726L1685.21 156.451H1855C1890.9 156.451 1920 185.552 1920 221.451V0H0Z" fill="#FDFDFD"/>
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
                          prevEll: '.space-slider__control--prev'
                        }} 
                        modules={[Navigation]}
                        className="space-slider swiper"
                      >
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="space-slider__slide">
                                    <div className="space-slider__img">
                                        <div className="space-slider__control space-slider__control--prev">
                                            →
                                        </div>
                                        <img src="./img/digital-space/slide-1.png" alt="Conference Hall"/>
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
                                            <img src="./img/digital-space/slide-2.png" alt="Conference Hall" />
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
                                        <img src="./img/digital-space/slide-3.png" alt="Conference Hall" />
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
                                        <img src="./img/digital-space/slide-4.png" alt="Conference Hall"/>
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
                                        <img src="./img/digital-space/slide-5.png" alt="Conference Hall"/>
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

            <section class="scale">
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
                                    <input type="mail" className="contact-form__field form-field"
                                        placeholder="Почта: example@mail.com" />
                                    <br />
                                    <input type="phone" className="contact-form__field form-field"
                                        placeholder="Телефон: +7(916)111-11-11" />
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
                                <a href="#" className="footer__uc-link">UNIONCONF</a>
                                <img src="./icon/arrow-link-top-black.svg" alt="Перейти" />
                            </div>
                            <div className="footer__uc-item">
                                <a href="#" className="footer__uc-link">UNIONCONF</a>
                                <img src="./icon/arrow-link-top-black.svg" alt="Перейти" />
                            </div>
                            <div className="footer__uc-item">
                                <a href="#" className="footer__uc-link">UNIONCONF</a>
                                <img src="./icon/arrow-link-top-black.svg" alt="Перейти" />
                            </div>
                            <div className="footer__uc-item">
                                <a href="#" className="footer__uc-link">UNIONCONF</a>
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

        <Menu />
      </div>
    </>
  )
}
