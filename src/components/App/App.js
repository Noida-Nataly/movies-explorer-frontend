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

  useEffect(getCurrentUser, [])

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
      .then(() => {
        setIsSaved(true);
      })
  }

  function handleDeleteSavedMovie(movie) {
    mainApi.deleteSavedMovie(movie.id)
      .then(() => {movie.isSaved = false})
  }

  function handleSearchByName(searchRequest) {
    if (!searchRequest || searchRequest.length == 0) {
      return;
    }
    let searchRequestLower = searchRequest.toLowerCase();
    movieApi.getMovies()
      .then(result => {
        setMovies(result.filter(movies => {
          return movies.nameRU.toLowerCase().includes(searchRequestLower) ||
                 movies.nameEN.toLowerCase().includes(searchRequestLower);
        }));
      })
      .finally(() => { setIsLoading(false) })
  }

  function getCurrentUser() {
    mainApi.getUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
        }
      });
  }

  function updateProfile(data) {
    mainApi.updateProfile(data.name, data.email)
      .then(user => {
        setCurrentUser(user.data);
      })
  }

  function createUser(data) {
    mainApi.createUser(data.name, data.email, data.password)
      .then(user => {
        login(data);
      })
  }

  function login(data) {
    mainApi.login(data.email, data.password)
      .then(user => {
        getCurrentUser();
      })
  }

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
                                     movies={movies}
                                     isLoading={isLoading}
                                     isLoggedIn={isLoggedIn}
                                     handleSaveMovie={handleSaveMovie}
                                     handleDeleteSavedMovie={handleDeleteSavedMovie}
                                     handleSearchByName={handleSearchByName}
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
