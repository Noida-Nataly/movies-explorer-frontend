import logo from '../../images/logo.svg';
import {Link} from "react-router-dom";
import React from "react";

export default function AuthForm ({isLogin}) {
  return (
    <>
      <header className="header header-auth">
        <Link className="header__logo-link" to="/">
          <img className="header__logo" src={logo} alt='Логотип сервиса'/>
        </Link>
      </header>
      <form name="auth__form" className="auth__form">
        <h2 className="auth__form-title">
          {isLogin ? "Рады видеть!" : "Добро пожаловать!"}
        </h2>
        {!isLogin &&
          <fieldset className="auth__fieldset">
            <label className="auth__label">Имя</label>
            <input name="auth-name" className="auth__input " type="text"/>
          </fieldset>}
        <fieldset className="auth__fieldset">
          <label className="auth__label">E-mail</label>
          <input name="auth-email" className="auth__input" type="email"/>
        </fieldset>
        <fieldset className="auth__fieldset">
          <label className="auth__label">Password</label>
          <input name="auth__password" className="auth__input" type="password"/>
        </fieldset>
        <button className="auth__logup-btn" type="submit">
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
        <fieldset className="auth__on-entrance">
          <span className="auth__span">
            {isLogin ? "Ещё не зарегистрированы?" : "Уже зарегистрировались?"}
          </span>
          <Link className="auth__link" to={isLogin ? "/signup" : "/signin"}>
            {isLogin ? "Регистрация" : "Войти"}
          </Link>
        </fieldset>
      </form>
    </>
  )
}