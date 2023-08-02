import {NavLink} from "react-router-dom";
export default function NavTab ({}) {
    return (
        <div className="promo__navtab">
            <NavLink className="promo__navtab_link link" to="#about-project">О проекте</NavLink>
            <NavLink className="promo__navtab_link link" to="#techs">Технологии</NavLink>
            <NavLink className="promo__navtab_link link" to="#about-me">Студент</NavLink>
        </div>
    )
}
