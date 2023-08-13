export default function MovieCard ({MovieShot, name, duration, isSaved, isSavedMovies}) {
  const saveClassName = `movies__save-button button ${
    isSaved ? 'movies__save-button_state-active button' : ''} ${
    isSavedMovies ? 'movies__save-button_state-picked button' : ''}`
    return (
      <>
        <li className="movies__card">
            <div className="movies__film-headers">
                <div className="movies__info">
                     <h2 className="movies__name">{name}</h2>
                     <h3 className="movies__duration">{duration}</h3>
                </div>
            <button className={saveClassName}
                type="button"
                aria-label="Отметить избранное">
            </button>
            </div>
            <img src={MovieShot} alt={name} className="movies__image" />
        </li>
      </>
    )
}