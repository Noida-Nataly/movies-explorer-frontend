import {HashLink} from "react-router-hash-link";
import React from "react";
export default function NavTab ({}) {
    return (
        <div className="navtab">
            <HashLink className="navtab__link link" to="#about-project">О проекте</HashLink>
            <HashLink className="navtab__link link" to="#techs">Технологии</HashLink>
            <HashLink className="navtab__link link" to="#about-me">Студент</HashLink>
        </div>
    )
}
