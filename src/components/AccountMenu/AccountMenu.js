import {Link} from "react-router-dom";
import React from "react";

export default function AccountMenu ({isBurgerMenu}) {
  const wrapperClassName=`account-menu ${isBurgerMenu ? "account-menu__burger-wrapper" : "account-menu__wrapper-login"} link`
  return (
    <section className="account-menu">
        <Link className={wrapperClassName} target="_blank" to="/profile">
          <span className="account-menu__account">Аккаунт</span>
          <button className="account-menu__link-logout" type="button" ></button>
        </Link>
    </section>
  )
}