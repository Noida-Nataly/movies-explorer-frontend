import {Link} from "react-router-dom";


export default function Portfolio ({}) {
    return (
        <section id="portfolio" className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__link-blok">
                <li className="portfolio__link">
                    <Link
                          className="portfolio__link-name link"
                          target = "_blank"
                          to="https://noida-nataly.github.io/how-to-learn/">
                        Статичный сайт
                    </Link>
                </li>
                <li className="portfolio__link">
                    <Link
                      className="portfolio__link-name link"
                      target = "_blank"
                      to="https://noida-nataly.github.io/russian-travel/" >
                        Адаптивный сайт
                    </Link>
                </li>
                <li className="portfolio__link">
                    <Link
                      className="portfolio__link-name link"
                      target = "_blank"
                      to="https://mesto-nataly.nomoredomains.work/">
                        Одностраничное приложение
                    </Link>

                </li>
            </ul>
        </section>
    )
}
