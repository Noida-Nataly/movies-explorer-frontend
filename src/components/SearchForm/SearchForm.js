import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Magnifier from "../../images/magnifier.svg";

export default function SearchForm ({}) {
    return (
        <form id="searchform" className="searchform">
        <div className="searchform_panel">
            <label className="searchform__find-films">
                <img className="searchform_indicator" alt='Значок лупы' src={Magnifier} />
                    <input id="searchform_name-movies"
                           className="searchform_name-movies"
                           placeholder="Фильм" />
                        <button className="searchform-find-btn"></button>
            </label>
            <FilterCheckbox />
        </div>
    </form>
    )
}