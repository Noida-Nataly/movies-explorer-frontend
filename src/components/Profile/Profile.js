import React, {useState} from "react";
import {Link} from "react-router-dom";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

export default function Profile ({handleLogout, handleUpdateProfile}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  function onSubmitUpdateProfile(evt) {
    evt.preventDefault();
    handleUpdateProfile({name: name, email: email});
  }

  function changeName(evt) {
    setName(evt.target.value);
  }

  function changeEmail(evt) {
    setEmail(evt.target.value);
  }

  return (
    <main className="content">
      <section className="profile">
        <form name="profile-form" className="profile-form" onSubmit={onSubmitUpdateProfile} >
          <h1 className="profile-form__title">Привет, {currentUser.name}!</h1>
          <fieldset className="profile-form__fieldset">
            <label className="profile-form__label">Имя</label>
            <input
              name="profile-name"
              className="profile-form__input"
              type="text"
              placeholder="Имя"
              minLength='5'
              maxLength='100'
              required
              value={name}
              onChange={changeName}
            />
          </fieldset>
          <fieldset className="profile-form__fieldset">
            <label className="profile-form__label">E-mail</label>
            <input
              name="profile-email"
              className="profile-form__input"
              type="email"
              placeholder="email"
              minLength='5'
              maxLength='100'
              value={email}
              onChange={changeEmail}
            />
          </fieldset>
          <span className="profile-form__error"></span>
          <button
            className="profile-form__button profile-form__edit-btn button"
            type ="submit" >
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