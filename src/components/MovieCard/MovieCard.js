export default function MovieCard ({MovieShot, name, duration}) {
    return (
        <li className="movie__card">
            <div className="movie__film-headers">
                <div className="movie__info">
                     <h2 className="movie__name">{name}</h2>
                     <h3 className="movie__duration">{duration}</h3>
                </div>
            <button className="movie__like-button"
                type="button"
                aria-label="Отметить избранное">
            </button>
            </div>
            <img src={MovieShot} alt={name} className="movie__image" />
        </li>
    )
}