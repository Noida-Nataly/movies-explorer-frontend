import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Magnifier from "../../images/magnifier.svg";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export default function SearchForm ({handleSearchByName, isSavedMovies}) {
    const [searchQuery, setSearchQuery] =useState('');
    const [shortsToggle, setShortsToggle] =useState(false);
    let location = useLocation();

    useEffect(()=> {
        if (isSavedMovies) {
            let searchQuery = localStorage.getItem('savedMoviesSearchQuery');
            let shortsToggle = localStorage.getItem('savedMoviesShortsToggle');
            setSearchQuery(searchQuery ? searchQuery : '');
            setShortsToggle(shortsToggle ? shortsToggle : false);
        } else {
            let searchQuery = localStorage.getItem('moviesSearchQuery');
            let shortsToggle = localStorage.getItem('moviesShortsToggle');
            setSearchQuery(searchQuery ? searchQuery : '');
            setShortsToggle(shortsToggle ? shortsToggle : false);
        }
        handleSearchByName(searchQuery, shortsToggle);
    }, [location])


    useEffect(()=> {
        handleSearchByName(searchQuery, shortsToggle);
    }, [shortsToggle])

    function handleSearch(evt) {
        evt.preventDefault();
        if (isSavedMovies) {
            localStorage.setItem('savedMoviesSearchQuery', searchQuery);
        } else {
            localStorage.setItem('moviesSearchQuery', searchQuery);
        }
        handleSearchByName(searchQuery, shortsToggle);
    }


    // Метод отслеживания изменений значений поискоой строки
    function handleTyping (evt) {
        setSearchQuery(evt.target.value);
    }

    function handleShortsToggle(evt) {
        if (isSavedMovies) {
            localStorage.setItem('savedMoviesShortsToggle', evt.target.checked);
        } else {
            localStorage.setItem('moviesShortsToggle', evt.target.checked);
        }
        setShortsToggle(evt.target.checked);
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