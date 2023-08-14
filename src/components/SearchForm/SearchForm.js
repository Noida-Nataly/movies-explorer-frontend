import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Magnifier from "../../images/magnifier.svg";

export default function SearchForm ({handleSearchByName}) {
    function handleSearch(evt) {
        evt.preventDefault();
        handleSearchByName(evt.target.value);
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
                               onChange={handleSearch}
                               autoComplete="none"
                               required
                        />
                        <button
                          className="searchform__find-btn button"
                          type = "button">
                        </button>
                </div>
                <FilterCheckbox />
            </div>
        </form>
      </section>
    )
}