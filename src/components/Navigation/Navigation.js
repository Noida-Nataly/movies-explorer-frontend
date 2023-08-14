import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import AccountMenu from "../AccountMenu/AccountMenu";

export default function Navigation ({isLoggedIn}) {
  const [isOpened, setIsOpened] = useState(false);


  return (
    <div className="navigation">
      <div className="navigation__icon" onClick={() => {setIsOpened(true)}}>
        <span className="navigation__span"></span>
      </div>
      <div className={`navigation__overlay ${isOpened ? 'navigation__menu-opened' : ''}`}>
        <div className="navigation__menu">
          <button type="submit"
                  className="navigation__close-btn"
                  onClick={() => {setIsOpened(false)}}>
          </button>
          {isLoggedIn ?
            (<>
              <ul className="navigation__list">
                <li className="navigation__link">
                  <NavLink className="navigation__link-text link" to="/">Главная</NavLink>
                </li>
                <li className="navigation__link">
                  <NavLink className="navigation__link-text link" to="/movies">Фильмы</NavLink>
                </li>
                <li className="navigation__link">
                  <NavLink className="navigation__link-text link" to="/saved-movies">Сохранённые фильмы</NavLink>
                </li>
              </ul>
              <AccountMenu isBurgerMenu={true} />
            </>) :
            (<ul className="navigation__list">
              <li className="navigation__link">
                <NavLink className="navigation__link-text link" to="/signup">Регистрация</NavLink>
              </li>
              <li className="navigation__link">
                <NavLink className="navigation__link-text link" to="/signin">Войти</NavLink>
              </li>
            </ul>)
          }
        </div>
      </div>
    </div>
  )
}