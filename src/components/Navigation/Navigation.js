import React from "react";
import {NavLink} from "react-router-dom";
import AccountMenu from "../AccountMenu/AccountMenu";

export default function Navigation ({}) {
  return (
    <div className="navigation">
      <div className="navigation-icon">
        <span className="navigation-span"></span>
      </div>
      <div className="navigation-menu">
        <button type="submit" className="navigation__close-btn"></button>
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
      </div>
    </div>
  )
}