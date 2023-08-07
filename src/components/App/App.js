import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, {useState} from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import {Route, Routes} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Preloader from "../Prealoder/Preloader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <page className="root container">
      <Routes>
        <Route path='/' element={
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Main />
            <Footer />
          </>
        }/>
        <Route path='/movies' element={
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Movies />
            <Footer />
          </>
        }/>
        <Route path='/saved-movies' element={
          <>
            <Header isLoggedIn={isLoggedIn} />
            <SavedMovies />
            <Footer />
          </>
        }/>
        <Route path='/profile' element={
          <Header />
          // <Profile />
        }/>
        <Route path='/signin' element={
          <Header />
          // <Login />
        }/>
        <Route path='/signup' element={
          <Header />
          // <Register />
        }/>
      </Routes>
    </page>
  );
}

export default App;
