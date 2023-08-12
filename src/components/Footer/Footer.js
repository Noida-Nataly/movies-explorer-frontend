import {Link} from "react-router-dom";

export default function Footer ({}) {
    return (
      <footer className="footer">
        <div className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
        </div>
        <div className="footer__wrapper">
            <p className="footer__copyright footer__text">&copy; 2023</p>
            <ul className="footer__list">
                <li className="footer__list-item">
                    <Link className="footer__link link" target="_blank" to="https://practicum.yandex.ru/">
                        Яндекс.Практикум
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link className="footer__link link" target="_blank" to="https://github.com/Noida-Nataly">
                          Github
                    </Link>
                </li>
            </ul>
        </div>
    </footer>
    )
}
