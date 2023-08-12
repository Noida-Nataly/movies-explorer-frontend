import React from "react";
import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";
import AccountMenu from "../AccountMenu/AccountMenu";


export default function Header({isLoggedIn}) {
    return (
        <header className="header">
          <Link className="header__logo-link link" to="/">
            <img className="header__logo" src={logo} alt='Логотип сервиса'/>
          </Link>
            {isLoggedIn ?
                <>
                    <nav className="header__nav-pages">
                      <ul className="header__nav-pages_list">
                        <li className="header__nav-pages_item">
                          <Link className="header__link-page link" to="/movies">Фильмы</Link>
                        </li>
                        <li className="header__nav-pages_item">
                          <Link className="header__link-page link" to="/saved-movies">Сохранённые фильмы</Link>
                        </li>
                      </ul>
                    </nav>
                    <AccountMenu isBurgerMenu={false} />
                    <Navigation isLoggedIn={isLoggedIn} />
                </>
                   :
                <>
                    <nav className="header__wrapper-auth">
                        <button className="header__links-auth header__link-logup btn">
                          <Link className="header__link header__link_text-white" to="/signup">Регистрация</Link>
                        </button>
                        <button className="header__links-auth header__link-login btn">
                          <Link className="header__link header__link_text-dark" to="/signin">Войти</Link>
                        </button>
                    </nav>
                  <Navigation isLoggedIn={isLoggedIn} />
                </>}
        </header>
    )
}