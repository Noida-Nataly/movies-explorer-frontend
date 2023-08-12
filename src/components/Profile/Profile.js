export default function Profile ({user}) {
  return (
    <main>
      <section className="profile">
        <form name="profile-form" className="profile-form">
          <h1 className="profile-form__title">Привет, {user.name}!</h1>
          <fieldset className="profile-form__fieldset">
            <label className="profile-form__label">Имя</label>
            <input name="profile-name" className="profile-form__input"
                   type="text" value={user.name} />
          </fieldset>
          <fieldset className="profile-form__fieldset">
            <label className="profile-form__label">E-mail</label>
            <input name="profile-email" className="profile-form__input"
                   type="email" value={user.email}/>
          </fieldset>
          <span className="profile-form__error"></span>
          <button className="profile-form__button profile-form__edit-btn button" type ="submit" >Редактировать</button>
          <button className="profile-form__button profile-form__logout-btn button" type = "button" >Выйти из аккаунта</button>
        </form>
      </section>
    </main>
  )
}