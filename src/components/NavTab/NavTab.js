import {HashLink} from "react-router-hash-link";
import React from "react";
export default function NavTab ({}) {
    return (
        <div className="promo__navtab">
            <HashLink className="promo__navtab_link link" to="#about-project">О проекте</HashLink>
            <HashLink className="promo__navtab_link link" to="#techs">Технологии</HashLink>
            <HashLink className="promo__navtab_link link" to="#about-me">Студент</HashLink>
        </div>
    )
}
