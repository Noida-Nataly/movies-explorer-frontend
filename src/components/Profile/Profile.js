import {Link} from "react-router-dom";

export default function Profile ({user}) {
  return (
    <main className="content">
      <section className="profile">
        <form name="profile-form" className="profile-form">
          <h1 className="profile-form__title">Привет, {user.name}!</h1>
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
              value={user.name}
              onChange={() => {}}
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
              value={user.email}
              onChange={() => {}}
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
            to="/">
            Выйти из аккаунта
          </Link>
        </form>
      </section>
    </main>
  )
}