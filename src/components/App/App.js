import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, {useState} from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import {Route, Routes} from "react-router-dom";
import SavedMovies from "../SavedMovies/SavedMovies";
import Preloader from "../Prealoder/Preloader";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({name:'Виталий', email:'email@email'});

  return (
    <page className="root container">
      <Routes>
        <Route path='/' element={
          <>
            <Header
              isLoggedIn={isLoggedIn}
            />
            <Main />
            <Footer />
          </>
        }/>
        <Route path='/movies' element={
          <>
            <Header
              isLoggedIn={isLoggedIn}
            />
            <Movies />
            <Footer />
          </>
        }/>
        <Route path='/saved-movies' element={
          <>
            <Header
              isLoggedIn={isLoggedIn}
            />
            <SavedMovies />
            <Footer />
          </>
        }/>
        <Route path='/profile' element={
          <>
            <Header
              isLoggedIn={isLoggedIn}
            />
            <Profile user={user}/>
          </>
        }/>
        <Route path='/signin' element={
          <Login />
        }/>
        <Route path='/signup' element={
          <Register />
        }/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </page>
  );
}

export default App;
