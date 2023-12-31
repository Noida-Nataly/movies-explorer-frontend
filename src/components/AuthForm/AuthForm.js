import logo from '../../images/logo.svg';
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";


export default function AuthForm ({isLogin, onSubmit}) {

  const [isValid, setIsValid] = React.useState(isLogin);

  const { values, handleChangeInput, errors } = useFormWithValidation({});

  useEffect(() => {
    if (values.email && !values.email.match(/^\S+@\S+\.\S+$/)) {
      errors.email = 'Текущий адрес электронной почты не валиден';
      setIsValid(false);
    } else {
      if (errors.email === 'Текущий адрес электронной почты не валиден') {
        errors.email = null;
      }
    }
    setIsValid((errors.email || errors.password || (!isLogin ? errors.name : false))
      || (values.email.length === 0 || values.password.length === 0 || (!isLogin ? values.name.length === 0 : false)));
  }, [values]);

  function onSubmitForm(evt) {
    evt.preventDefault();
    const data = isLogin ?
      {email: values.email, password: values.password} :
      {email: values.email, password: values.password, name: values.name};
    onSubmit(data);
  }

  function handleChange(evt) {
    handleChangeInput(evt);
  }

  return (
    <>
      <header className="header header-auth">
        <Link className="header__logo-link link" to="/">
          <img className="header__logo" src={logo} alt='Логотип сервиса' />
        </Link>
      </header>
      <main>
        <section className="auth">
          <form name="auth-form" className="auth-form" onSubmit={onSubmitForm}>
            <h1 className="auth-form__title">
              {isLogin ? "Рады видеть!" : "Добро пожаловать!"}
            </h1>
            {!isLogin &&
              <fieldset className="auth-form__fieldset">
                <label className="auth-form__label">Имя</label>
                <input
                  name="name"
                  className="auth-form__input input"
                  type="text"
                  minLength='5'
                  maxLength='100'
                  required
                  placeholder='имя'
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors && errors.name ? <span>{errors.name}</span> : ""}
              </fieldset>}
            <fieldset className="auth-form__fieldset">
              <label className="auth-form__label">E-mail</label>
              <input
                name="email"
                className="auth-form__input input"
                type="email"
                minLength="5"
                maxLength="100"
                required
                placeholder="e-mail"
                autoComplete="off"
                onChange={handleChange}
              />
              {errors && errors.email ? <span>{errors.email}</span> : ""}
            </fieldset>
            <fieldset className="auth-form__fieldset">
              <label className="auth-form__label">Password</label>
              <input
                name="password"
                className="auth-form__input input auth-form__input_red"
                type="password"
                minLength='8'
                maxLength='20'
                required
                placeholder="password"
                onChange={handleChange}
                autoComplete="off"
              />
              {errors && errors.password ? <span>{errors.password}</span> : ""}
            </fieldset>
            <button
              className= {(isLogin ? "auth-form__btn auth-form__btn_margin-extra button"
                : "auth-form__btn button") + (isValid ? " button__disabled" : "") }
                    type="submit"
                    disabled={isValid}>
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