import MovieCard from "../MovieCard/MovieCard";
import MovieShot from '../../images/pain _1.jpg';
export default function MovieCardList ({movies}) {
  return (
    <section className="movie-cards">
      <ul className="movie-cards__list">
        {movies.map((movie) => (
          <MovieCard
            name={movie.name}
            duration={movie.duration}
            MovieShot={movie.shot}
          />
        ))}
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
        <MovieCard
          name={'Карачаевск'}
          duration={'1x47v'}
          MovieShot={MovieShot}
        />
      </ul>
      <div className="movie-cards__allcards">
        <button className="movie-cards__allcards_btn">Ещё</button>
      </div>
    </section>
  )
}