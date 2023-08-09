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
      <form name="auth-form" className="auth-form">
        <h2 className="auth-form__title">
          {isLogin ? "Рады видеть!" : "Добро пожаловать!"}
        </h2>
        {!isLogin &&
          <fieldset className="auth-form__fieldset">
            <label className="auth-form__label">Имя</label>
            <input name="auth-name" className="auth-form__input " type="text"/>
          </fieldset>}
        <fieldset className="auth-form__fieldset">
          <label className="auth-form__label">E-mail</label>
          <input name="auth-email" className="auth-form__input" type="email"/>
        </fieldset>
        <fieldset className="auth-form__fieldset">
          <label className="auth-form__label">Password</label>
          <input name="auth__password" className="auth-form__input" type="password"/>
        </fieldset>
        <button className="auth-form__logup-btn" type="submit">
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
        <fieldset className="auth-form__on-entrance">
          <span className="auth-form__span">
            {isLogin ? "Ещё не зарегистрированы?" : "Уже зарегистрировались?"}
          </span>
          <Link className="auth-form__link" to={isLogin ? "/signup" : "/signin"}>
            {isLogin ? "Регистрация" : "Войти"}
          </Link>
        </fieldset>
      </form>
    </>
  )
}