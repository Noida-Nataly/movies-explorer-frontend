import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Magnifier from "../../images/magnifier.svg";

export default function SearchForm ({}) {
    return (
      <section>
        <form id="searchform" className="searchform">
            <div className="searchform__panel">
                <div className="searchform__find-films">
                    <img className="searchform__indicator" alt='Значок лупы' src={Magnifier} />
                        <input id="searchform__name-movies"
                               className="searchform__name-movies"
                               placeholder="Фильм"
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