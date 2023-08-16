import {Link} from "react-router-dom";
import {useState} from "react";

export default function MovieCard ({movie, isSavedMovies, handleSaveMovie, handleDeleteSavedMovie}) {
  const [isSaved, setIsSaved] = useState(movie.isSaved);

  const saveClassName = `movies__save-button ${
    isSaved ? 'movies__save-button_state-active ' : ''} ${
    isSavedMovies ? 'movies__save-button_state-picked ' : ''}`



    function toggleState() {
      if (isSaved) {
        handleDeleteSavedMovie(isSavedMovies ? movie.movieId : movie.id, setIsSaved);
      } else {
        handleSaveMovie(movie, setIsSaved);
      }
    }

    return (
      <>
        <li className="movies__card">
            <div className="movies__film-headers">
                <div className="movies__info">
                     <h2 className="movies__name">{movie.nameRU}</h2>
                     <h3 className="movies__duration">{Math.floor(movie.duration / 60) + 'h ' + movie.duration % 60 + 'm'}</h3>
                </div>
            <button className={saveClassName}
                    type="button"
                    onClick={toggleState}
                    aria-label="Отметить избранное">
            </button>
            </div>
          <Link className="movies__trailer-link" to={movie.trailerLink} target="_blank">
            <img src={movie.image && movie.image.url ? movie.image.url : movie.image} alt={movie.nameRU} className="movies__image" />
          </Link>
        </li>
      </>
    )
}