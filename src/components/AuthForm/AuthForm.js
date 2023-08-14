import logo from '../../images/logo.svg';
import {Link} from "react-router-dom";
import React from "react";

export default function AuthForm ({isLogin}) {
  return (
    <>
      <header className="header header-auth">
        <Link className="header__logo-link link" to="/">
          <img className="header__logo" src={logo} alt='Логотип сервиса' />
        </Link>
      </header>
      <main>
        <section className="auth">
          <form name="auth-form" className="auth-form">
            <h1 className="auth-form__title">
              {isLogin ? "Рады видеть!" : "Добро пожаловать!"}
            </h1>
            {!isLogin &&
              <fieldset className="auth-form__fieldset">
                <label className="auth-form__label">Имя</label>
                <input
                  name="auth-name"
                  className="auth-form__input input"
                  type="text"
                  minLength='5'
                  maxLength='100'
                  required
                  placeholder='имя'
                />
              </fieldset>}
            <fieldset className="auth-form__fieldset">
              <label className="auth-form__label">E-mail</label>
              <input
                name="auth-email"
                className="auth-form__input input"
                type="email"
                minLength="5"
                maxLength="100"
                required
                placeholder="e-mail"
              />
            </fieldset>
            <fieldset className="auth-form__fieldset">
              <label className="auth-form__label">Password</label>
              <input
                name="auth__password"
                className="auth-form__input input auth-form__input_red"
                type="password"
                minLength='8'
                maxLength='20'
                required
                placeholder="password"
                autoComplete="true"
              />
            </fieldset>
            <button
              className= {isLogin ? "auth-form__btn auth-form__btn_margin-extra button"
                : "auth-form__btn button" }
                    type="submit">
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </button>
            <fieldset className="auth-form__on-entrance">
              <span className="auth-form__span">
                {isLogin ? "Ещё не зарегистрированы?" : "Уже зарегистрировались?"}
              </span>
              <Link className="auth-form__link link" to={isLogin ? "/signup" : "/signin"}>
                {isLogin ? "Регистрация" : "Войти"}
              </Link>
            </fieldset>
          </form>
        </section>
      </main>
    </>
  )
}