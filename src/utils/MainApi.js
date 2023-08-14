import {mainApiUrl} from "./constants";

class MainApi {
  constructor(mainApiUrl) {
    this._baseUrl = mainApiUrl;
  }

  //Форма запроса к серверу
  _sendRequest(url, parameters) {
    parameters.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    parameters.credentials = 'include';
    return fetch(url, parameters)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  //Метод создания пользователя
  createUser (name, email, password) {
    return this._sendRequest(this._baseUrl + '/signup', {
      method: 'POST',
      body: JSON.stringify( {
        name: name,
        email: email,
        password: password,
      })
    });
  }

  //Метод авторизации пользователя
  login(email, password) {
    return this._sendRequest(this._baseUrl + '/signin',{
      method:'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      })
    });
  }

  // Метод изменения данных пользователя на сервере
  updateProfile(name, email) {
    return this._sendRequest(this._baseUrl + '/users/me', {
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        email: email
      })
    });
  }

  //Метод выхода из аккаунта
  logout() {
    return this._sendRequest(this._baseUrl + '/signout', {
      method: 'GET',
    })
  }


  // Метод добавления фильма в сохраненные на сервере
  addSavedMovies (movie) {
      return this._sendRequest(this._baseUrl + `/movies`, {
        method: 'POST',
        body: JSON.stringify(movie)
      })
  }

  //Метод удаления фильма из сохраненных на сервере
  deleteSavedMovie (movieId) {
    return this._sendRequest(this._baseUrl + `/movies/${movieId}`, {
      method: 'DELETE'
    })
  }

  // Метод получения данных пользователя с сервера
  getUser() {
    return this._sendRequest(this._baseUrl+'/users/me', {
      method: 'GET',
    });
  }

}

export const mainApi = new MainApi (mainApiUrl);
