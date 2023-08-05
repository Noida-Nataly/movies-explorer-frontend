import React from "react";
import {NavLink} from "react-router-dom";

export default function Navigation ({}) {
  return (
    <div className="navigation">
      <div className="navigation-icon">
        <span></span>
      </div>
      <div className="navigation-menu">
        <div className="navigation__close-btn"></div>
        <ul className="navigation__list">
          <li className="navigation__link">
            <NavLink className="navigation__link-text link">Главная</NavLink>
          </li>
          <li className="navigation__link">
            <NavLink className="navigation__link-text link">Фильмы</NavLink>
          </li>
          <li className="navigation__link">
            <NavLink className="navigation__link-text link">Сохранённые фильмы</NavLink>
          </li>
        </ul>
        <div className="navigation__wrapper-auth">
          <span className="navigation__account">Аккаунт</span>
          <button className="navigation__link-logout"></button>
        </div>
      </div>
    </div>
  )
}