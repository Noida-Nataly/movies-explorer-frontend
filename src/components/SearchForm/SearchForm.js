import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Magnifier from "../../images/magnifier.svg";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export default function SearchForm ({handleSearchByName, isSavedMovies}) {
    const [searchQuery, setSearchQuery] =useState('');
    let location = useLocation();

    useEffect(()=> {
        if (isSavedMovies) {
            setSearchQuery (localStorage.getItem('savedMoviesSearchQuery'))
        } else {
            setSearchQuery (localStorage.getItem('moviesSearchQuery'))
        }
        handleSearchByName(searchQuery);
    }, [location])


    function handleSearch(evt) {
        evt.preventDefault();
        if (isSavedMovies) {
            localStorage.setItem('savedMoviesSearchQuery', searchQuery)
        } else {
            localStorage.setItem('moviesSearchQuery', searchQuery)
        }
        handleSearchByName(searchQuery);
    }


    // Метод отслеживания изменений значений поискоой строки
    function handleTyping (evt) {
        setSearchQuery(evt.target.value);
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
                <FilterCheckbox />
            </div>
        </form>
      </section>
    )
}