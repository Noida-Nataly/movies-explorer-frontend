import {Link} from "react-router-dom";
import React from "react";

export default function AccountMenu ({isBurgerMenu}) {
  const wrapperClassName=`account-menu ${isBurgerMenu ? "account-menu__burger-wrapper" : "account-menu__wrapper-login"} link`
  return (
    <Link className={wrapperClassName} to="/profile">
      <span className="account-menu__account">Аккаунт</span>
      <button className="account-menu__link-logout"></button>
    </Link>
  )
}