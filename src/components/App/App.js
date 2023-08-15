import React, {useEffect, useState} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {mainApi} from "../../utils/MainApi";
import {movieApi} from "../../utils/MoviesApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    getCurrentUser();

  }, [])

  // МЕТОДЫ РАБОТЫ С ФИЛЬМАМИ

  // Метод добавления фильма в сохраненные
  function handleSaveMovie(movie, setIsSaved) {
    let savedMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description.length > 300 ? movie.description.substring(0,300) : movie.description,
      image: movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }
    mainApi.addSavedMovies(savedMovie)
      .then((result) => {
        setIsSaved(true);
        setSavedMovies([result.data, ...savedMovies])
      })
  }

  // Метод удаления фильма из сохраненных
  function handleDeleteSavedMovie(movieId, setIsSaved) {
    setIsLoading(true);
    let savedMovie = savedMovies.filter(m => m.movieId === movieId)[0];
    mainApi.deleteSavedMovie(savedMovie._id)
      .then(() => {
        setIsSaved(false);
        setSavedMovies(savedMovies.filter(m => m._id != savedMovie._id));
        setIsLoading(false);
      })
  }

  // Метод поиска фильма по наименованию
  function handleSearchByName(searchRequest) {
    setSearchError('');
    if (!searchRequest || searchRequest.length === 0) {
      setMovies([]);
      return;
    }
    let searchRequestLower = searchRequest.toLowerCase();
    setIsLoading(true);
    movieApi.getMovies()
      .then(result => {
        result = result
          .filter(movies => {
            return movies.nameRU.toLowerCase().includes(searchRequestLower) ||
              movies.nameEN.toLowerCase().includes(searchRequestLower);
          });
        result.forEach(movies => movies.isSaved = savedMovies.filter((m) => m.movieId === movies.id).length > 0);
        setMovies(result);
        if (result.length === 0) {
          setSearchError('Ничего не найдено')
        }
      })
      .catch(() => {
        setSearchError('Во время запроса произошла ошибка. ' +
          'Возможно, проблема с соединением или сервер недоступен. ' +
          'Подождите немного и попробуйте ещё раз')
    })
      .finally(() => { setIsLoading(false) })
  }

  // Метод выбора сохраненного фильма
  function getSavedMovies() {
    setIsLoading(true);
    return mainApi.getSavedMovies()
      .then(result => {
        setSavedMovies(result);
      })
      .finally(() => { setIsLoading(false) })
  }

  // Метод поиска фильма в сохраненных
  function handleSearchSavedByName(searchRequest) {
    setSearchError('');
    getSavedMovies()
      .then(() => {
        if (!searchRequest || searchRequest.length === 0) {
          return;
        }
        let searchRequestLower = searchRequest.toLowerCase();
        let filteredSavedMovies = savedMovies
            .filter(movies => {
              return movies.nameRU.toLowerCase().includes(searchRequestLower) ||
                movies.nameEN.toLowerCase().includes(searchRequestLower);
            });
          setSavedMovies(filteredSavedMovies);
        if (filteredSavedMovies.length === 0) {
          setSearchError('Ничего не найдено')
        }
        })
      .catch(() => {
        setSearchError('Во время запроса произошла ошибка. ' +
          'Возможно, проблема с соединением или сервер недоступен. ' +
          'Подождите немного и попробуйте ещё раз')
      });
  }


  //МЕТОДЫ РАБОТЫ С ПОЛЬЗОВАТЕЛЕМ

  // Метод получения данных пользователя из токена
  function getCurrentUser() {
    mainApi.getUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
          getSavedMovies();
        }
      });
  }

  // Метод редактирования данных пользователя
  function updateProfile(data) {
    mainApi.updateProfile(data.name, data.email)
      .then(user => {
        setCurrentUser(user.data);
      })
  }

  // Метод создания пользователя (регистрации)
  function createUser(data) {
    mainApi.createUser(data.name, data.email, data.password)
      .then(() => {
        login(data);
      })
  }

  // Метод авторизации пользователя
  function login(data) {
    mainApi.login(data.email, data.password)
      .then(() => {
        getCurrentUser();
      })
  }

  // Метод выхода из аккаунта
  function logout() {
    mainApi.logout()
      .then(() => {
        setCurrentUser({});
        setIsLoggedIn(false);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root container">
        <Routes>
          <Route path='/' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <ProtectedRouteElement element={Main}
                                     isLoggedIn={isLoggedIn}/>
              <Footer />
            </>
          }/>
          <Route path='/movies' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <ProtectedRouteElement element={Movies}
                                     movies={movies}
                                     isLoading={isLoading}
                                     isLoggedIn={isLoggedIn}
                                     handleSaveMovie={handleSaveMovie}
                                     handleDeleteSavedMovie={handleDeleteSavedMovie}
                                     handleSearchByName={handleSearchByName}
                                     searchError = {searchError}
              />
              <Footer />
            </>
          }/>
          <Route path='/saved-movies' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <ProtectedRouteElement element={SavedMovies}
                                     savedMovies={savedMovies}
                                     isLoading={isLoading}
                                     isLoggedIn={isLoggedIn}
                                     handleSaveMovie={handleSaveMovie}
                                     handleDeleteSavedMovie={handleDeleteSavedMovie}
                                     handleSearchByName={handleSearchSavedByName}
                                     searchError={searchError}
              />
              <Footer />
            </>
          }/>
          <Route path='/profile' element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <ProtectedRouteElement  element={Profile}
                                      isLoggedIn={isLoggedIn}
                                      handleLogout={logout}
                                      handleUpdateProfile={updateProfile}
              />
            </>
          }/>
          <Route path='/signin' element={
            isLoggedIn ? (
              <Navigate to='/movies' replace/>
            ) : (
              <Login handleLogin={login} />
            )
          }/>
          <Route path='/signup' element={
            isLoggedIn ? (
              <Navigate to='/movies' replace/>
            ) : (
              <Register handleRegister={createUser} />
            )
          }/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
