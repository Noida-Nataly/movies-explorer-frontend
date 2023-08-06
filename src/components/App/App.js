import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import {Route, Routes} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  return (
    <page className="root container">
      <Header isLoggedIn={true} />
      <Routes>
        <Route path='/' element={
          <Main />
        }/>
        <Route path='/movies' element={
          <Movies />
        }/>
        <Route path='/saved-movies' element={
          <SavedMovies />
        }/>
        <Route path='/profile' element={
          <SavedMovies />
        }/>
        <Route path='/signin' element={
          <SavedMovies />
        }/>
        <Route path='/signup' element={
          <SavedMovies />
        }/>
      </Routes>
      <Footer />
    </page>
  );
}

export default App;
