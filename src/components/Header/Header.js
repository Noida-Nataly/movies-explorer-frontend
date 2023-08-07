import React from "react";
import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";
import AccountMenu from "../AccountMenu/AccountMenu";


export default function Header({isLoggedIn}) {
    return (
        <header className="header">
          <Link className="header__logo-link" to="/">
            <img className="header__logo" src={logo} alt='Логотип сервиса'/>
          </Link>
            {isLoggedIn ?
                <>
                    <div className="header__nav-pages">
                        <Link className="header__link-page link" to="/movies">Фильмы</Link>
                        <Link className="header__link-page link" to="/saved-movies">Сохранённые фильмы</Link>
                    </div>
                    <AccountMenu isBurgerMenu={false} />
                    <Navigation />
                </>
                     :   <div className="header__wrapper-auth">
                        <button className="header__links-auth header__link_logup btn">Регистрация</button>
                        <button className="header__links-auth header__link_login btn">Войти</button>
                    </div>}
        </header>
    )
}