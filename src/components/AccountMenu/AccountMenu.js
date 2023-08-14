import {Link} from "react-router-dom";
import React from "react";

export default function AccountMenu ({isBurgerMenu}) {
  const wrapperClassName=`account-menu__wrapper ${isBurgerMenu ? "account-menu__burger-wrapper" : "account-menu__wrapper-login"} link`
  return (
    <div className="account-menu">
        <Link className={wrapperClassName} to="/profile">
          Аккаунт
        </Link>
    </div>
  )
}