import PropTypes from "prop-types";

export default function FilterCheckbox ({shortsToggle, handleShortsToggle}) {
    return (
        <label className="filter-checkbox">
            <input
                className="filter-checkbox__toggle"
                type="checkbox"
                checked={shortsToggle}
                onChange={handleShortsToggle}
            />
            <span className="filter-checkbox__toggle-span button"></span>
            Короткометражки
        </label>
    )
}


FilterCheckbox.propTypes = {
  isShortsChecked: PropTypes.bool,
  onShortsCheck: PropTypes.func,
};