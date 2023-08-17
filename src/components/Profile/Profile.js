import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";

export default function Profile ({handleLogout, handleUpdateProfile}) {
  const currentUser = React.useContext(CurrentUserContext);
  // const [isValid, setIsValid] = React.useState(false);

  const { values, handleChangeInput, errors, setValues, isValid } = useFormWithValidation(currentUser);

  useEffect(() => {
    setValues({name: currentUser.name, email: currentUser.email});
  }, [])

  function onSubmitUpdateProfile(evt) {
    evt.preventDefault();
    handleUpdateProfile({name: values.name, email: values.email});
  }

  function handleChange(evt) {
    handleChangeInput(evt);
    // setIsValid(errors.email || errors.name);
  }

  return (
    <main className="content">
      <section className="profile">
        <form name="profile-form" className="profile-form" onSubmit={onSubmitUpdateProfile} >
          <h1 className="profile-form__title">Привет, {currentUser.name}!</h1>
          <fieldset className="profile-form__fieldset">
            <label className="profile-form__label">Имя</label>
            <input
              name="name"
              className="profile-form__input"
              type="text"
              placeholder="Имя"
              minLength='5'
              maxLength='100'
              required
              value={values.name}
              onChange={handleChange}
            />
          </fieldset>
          {errors && errors.name ? <div className="profile-form__label">{errors.name}</div> : ""}
          <fieldset className="profile-form__fieldset">
            <label className="profile-form__label">E-mail</label>
            <input
              name="email"
              className="profile-form__input"
              type="email"
              placeholder="email"
              minLength='5'
              maxLength='100'
              value={values.email}
              onChange={handleChange}
            />
          </fieldset>
          {errors && errors.email ? <div className="profile-form__label">{errors.email}</div> : ""}
          <span className="profile-form__error"></span>
          <button
            className={"profile-form__button profile-form__edit-btn button" + (!isValid ? " button__disabled" : "") }
            type ="submit" disabled={!isValid}>
            Редактировать
          </button>
          <Link
            className="profile-form__button profile-form__logout-link link"
            onClick={handleLogout}
            to="/">
            Выйти из аккаунта
          </Link>
        </form>
      </section>
    </main>
  )
}