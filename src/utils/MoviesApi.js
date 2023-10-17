import {moviesApiUrl, moviesImagesUrl} from "./constants";

class MoviesApi {
  constructor(moviesApiUrl, moviesImagesUrl) {
    this._baseUrl = moviesApiUrl;
    this._imagesUrl = moviesImagesUrl;
  }

//Форма запроса к серверу
  _sendRequest(url, parameters) {
    parameters.headers = {
      'Content-Type': 'application/json'
    };
    return fetch(url, parameters)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  //Метод получения информации о фильмах
  getMovies () {
    return this._sendRequest(this._baseUrl, {
      method: 'GET',
    }).then(res => {
      res.forEach(movie => {
        movie.image.url = this._imagesUrl + movie.image.url;
        movie.image.formats.thumbnail.url = this._imagesUrl + movie.image.formats.thumbnail.url;
      });
      return res;
    })
  }

}

export const movieApi = new MoviesApi (moviesApiUrl, moviesImagesUrl);