import MovieCard from "../MovieCard/MovieCard";
import Preloader from "../Prealoder/Preloader";
import useWindowSize from "../../hooks/useWindowSize";
import {configAmountMovies} from "../../utils/constants";
import {useEffect, useState} from "react";

export default function MovieCardList ({movies, isSavedMovies, isLoading, handleSaveMovie, handleDeleteSavedMovie, searchError}) {
  const width = useWindowSize();
  const [amountMovies, setAmountMovies] = useState(0);
  const [extraMovies, setExtraMovies] = useState(0);


  // Метод определения количества фильмов на странице взависимости от размера экрана
  const amountMoviesOnScreen = () => {
    if (width >= configAmountMovies.DESKTOP) {
      setAmountMovies(configAmountMovies.DESKTOP_AMOUNT_MOVIES)
      setExtraMovies(configAmountMovies.DESKTOP_EXTRA_AMOUNT_MOVIES)
    } else if (width >= configAmountMovies.TABLET) {
      setAmountMovies(configAmountMovies.TABLET_AMOUNT_MOVIES)
      setExtraMovies(configAmountMovies.TABLET_EXTRA_AMOUNT_MOVIES)
    } else {
      setAmountMovies(configAmountMovies.MOBILE_AMOUNT_MOVIES)
      setExtraMovies(configAmountMovies.MOBILE_EXTRA_AMOUNT_MOVIES)
    }
  }

  const handleExtraMovies = () => {
    setAmountMovies(amountMovies + extraMovies);
  };

  useEffect(() => {
    amountMoviesOnScreen();
  }, [width]);


  return (
      <section className="movies">
        {!isLoading &&
          ((movies && movies.length > 0 && !(searchError && searchError.length >0)) ?
            (<>
              <ul className="movies__list">
                {
                  movies.slice(0, amountMovies).map((movie) => (
                  <MovieCard
                    key={isSavedMovies ? movie._id : movie.id}
                    movie={movie}
                    isSavedMovies={isSavedMovies}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteSavedMovie={handleDeleteSavedMovie}
                  />
                  )
                )}
              </ul>
              {(movies.length > amountMovies) ?
                (<div className="movies__allcards">
                  <button
                    className="movies__allcards-btn button"
                    onClick={handleExtraMovies}
                    type="button">
                    Ещё
                  </button>
                </div>) :
                (<div className="movies__grand-margin"></div>)
              }
            </>
            ) : (<div className="movies__no-data">
                {(searchError && searchError.length > 0) ? searchError : "Здесь пока нет фильмов"} </div> )
          )
        }
        {isLoading && <Preloader />}
      </section>

  )
}

