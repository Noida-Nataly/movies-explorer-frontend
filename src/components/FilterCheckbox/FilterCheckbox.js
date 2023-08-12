export default function FilterCheckbox ({}) {
    return (
        <label className="filter-checkbox">
            <input
                className="filter-checkbox__toggle"
                type="checkbox"
                checked/>
            <span className="filter-checkbox__toggle-span button"></span>
            Короткометражки
        </label>
    )
}