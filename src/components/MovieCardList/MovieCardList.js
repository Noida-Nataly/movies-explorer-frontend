import MovieCard from "../MovieCard/MovieCard";
export default function MovieCardList ({movies, isSavedMovies}) {
  // movies=[];  // NOTE: for debugging without movies
  return (
      <section className="movies">
        {(movies.length > 0) ?
          (<>
          <ul className="movies__list">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
              name={movie.name}
              duration={movie.duration}
              MovieShot={movie.shot}
              isSaved={movie.isSaved}
              isSavedMovies={isSavedMovies}
              />
              )
            )}
          </ul>
          {(movies.length > 11) ? // TODO: actually should be 12
          (<div className="movies__allcards">
            <button className="movies__allcards-btn button" type="button">Ещё</button>
          </div>) : (
            <div className="movies__grand-margin">
            </div>)}
        </>
          ) : (<div className="movies__no-data">
            Здесь пока нет сохраненных фильмов </div> )
        }
      </section>

  )
}

