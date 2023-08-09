import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Magnifier from "../../images/magnifier.svg";

export default function SearchForm ({}) {
    return (
        <form id="searchform" className="searchform">
        <div className="searchform__panel">
            <label className="searchform__find-films">
                <img className="searchform__indicator" alt='Значок лупы' src={Magnifier} />
                    <input id="searchform__name-movies"
                           className="searchform__name-movies"
                           placeholder="Фильм" />
                        <button className="searchform__find-btn"></button>
            </label>
            <FilterCheckbox />
        </div>
    </form>
    )
}