import React from "react";
import logo from '../../images/logo.svg';


export default function Header({isLoggedIn}) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt='Логотип сервиса'/>
            {isLoggedIn ?
                <>
                    <div className="header__nav-pages">
                        <a className="header__link-page">Фильмы</a>
                        <a className="header__link-page">Сохранённые фильмы</a>
                    </div>
                    <div className="header__wrapper-login">
                        <span className="header__account">Аккаунт</span>
                        <button className="header__link-logout"></button>
                    </div>
                </>
                :   <div className="header__wrapper-auth">
                        <button className="header__links-auth header__link_logup btn">Регистрация</button>
                        <button className="header__links-auth header__link_login btn">Войти</button>
                    </div>}
        </header>
    )
}