import {HashLink} from "react-router-hash-link";
import React from "react";
export default function NavTab ({}) {
    return (
        <nav className="navtab">
          <ul className="navtab__list">
            <li className="navtab__item">
              <HashLink className="navtab__link link" to="#about-project">О проекте</HashLink>
            </li>
            <li className="navtab__item">
              <HashLink className="navtab__link link" to="#techs">Технологии</HashLink>
            </li>
            <li className="navtab__item">
              <HashLink className="navtab__link link" to="#about-me">Студент</HashLink>
            </li>
          </ul>
        </nav>
    )
}
