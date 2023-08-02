import {Link} from "react-router-dom";

export default function Portfolio ({}) {
    return (
        <section id="portfolio" className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__blok-links">
                <li className="portfolio__link">
                    <Link className="portfolio__link-name link" to="https://github.com/Noida-Nataly/how-to-learn">Статичный сайт</Link>
                    <Link className="portfolio__link-icon link" to="https://github.com/Noida-Nataly/how-to-learn"> </Link>
                </li>
                <li className="portfolio__link">
                    <Link className="portfolio__link-name link" to="https://github.com/Noida-Nataly/russian-travel" >Адаптивный сайт</Link>
                    <Link className="portfolio__link-icon link" to="https://github.com/Noida-Nataly/russian-travel"></Link>
                </li>
                <li className="portfolio__link">
                    <Link className="portfolio__link-name link" to="https://github.com/Noida-Nataly/react-mesto-api-full-gha">Одностраничное приложение</Link>
                    <Link className="portfolio__link-icon link" to="https://github.com/Noida-Nataly/react-mesto-api-full-gha"></Link>
                </li>
            </ul>
        </section>
    )
}