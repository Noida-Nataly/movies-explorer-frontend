import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Magnifier from "../../images/magnifier.svg";
import {useEffect, useState} from "react";

export default function SearchForm ({handleSearchByName, isSavedMovies}) {
    const prevRequestAll = localStorage.getItem('moviesSearchQuery') ? localStorage.getItem('moviesSearchQuery') : '';
    const prevToggleAll = localStorage.getItem('moviesShortsToggle') ? localStorage.getItem('moviesShortsToggle') === "true" : false;

    const [searchQuery, setSearchQuery] = useState(isSavedMovies ? '' : prevRequestAll);
    const [shortsToggle, setShortsToggle] = useState(isSavedMovies ? false : prevToggleAll);

    useEffect(() => {
        if (isSavedMovies) {
            handleSearchByName(searchQuery, shortsToggle);
        }
    }, []);

    function handleSearch(evt) {
        evt.preventDefault();
        if (!isSavedMovies) {
            localStorage.setItem('moviesSearchQuery', searchQuery);
            localStorage.setItem('moviesShortsToggle', shortsToggle);
        }
        handleSearchByName(searchQuery, shortsToggle);
    }


    // Метод отслеживания изменений значений поискоой строки
    function handleTyping (evt) {
        setSearchQuery(evt.target.value);
    }

    function handleShortsToggle(evt) {
        if (!isSavedMovies) {
            localStorage.setItem('moviesSearchQuery', searchQuery);
            localStorage.setItem('moviesShortsToggle', evt.target.checked);
        }
        setShortsToggle(evt.target.checked);
        handleSearchByName(searchQuery, evt.target.checked);
    }

    return (
      <section>
        <form id="searchform" className="searchform" onSubmit={handleSearch}>
            <div className="searchform__panel">
                <div className="searchform__find-films">
                    <img className="searchform__indicator" alt='Значок лупы' src={Magnifier} />
                        <input id="searchform__name-movies"
                               className="searchform__name-movies"
                               placeholder="Фильм"
                               onChange={handleTyping}
                               value={searchQuery}
                               autoComplete="none"
                        />
                        <button
                          className="searchform__find-btn button"
                          type = "submit">
                        </button>
                </div>
                <FilterCheckbox
                  handleShortsToggle={handleShortsToggle}
                  shortsToggle={shortsToggle}
                />
            </div>
        </form>
      </section>
    )
}