import {Link} from "react-router-dom";
import Portret from '../../images/Kloun.jpg';
export default function AboutMe ({}) {
    return (
        <section id="about-me" className="about-me">
            <h2 className="about-me__title headline">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__infoblok">
                    <h3 className="about-me__name heading-text">Наталия</h3>
                    <p className="about-me__info">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__text">Я родился и живу в Саратове,
                        закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
                        Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                        После того, как прошёл курс по веб-разработке,
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <Link className="about-me__link link"  target = "_blank" to="https://github.com/Noida-Nataly" >GitHub</Link>
                </div>
                <img className="about-me__avatar"
                     src={Portret}
                     alt="Фотография студента" />
            </div>
        </section>
    )
}