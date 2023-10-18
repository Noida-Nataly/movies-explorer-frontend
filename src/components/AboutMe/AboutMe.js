import {Link} from "react-router-dom";
import Portret from '../../images/Kloun.jpg';
export default function AboutMe ({}) {
    return (
        <section id="about-me" className="about-me">
            <h2 className="about-me__title headline">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__infoblok">
                    <h3 className="about-me__name heading-text">Наталия</h3>
                    <p className="about-me__info">Фронтенд-разработчик</p>
                    <p className="about-me__text">Ты скажешь эта жизнь — одно мгновенье.<br>
                                                    Ее цени, в ней черпай вдохновенье.<br>
                                                    Как проведешь ее, так и пройдет,<br>
                                                    Не забывай: она — твое творенье.<br>
                                                                        Омар Хайам</p>
                    <Link className="about-me__link link"  target = "_blank" to="https://github.com/Noida-Nataly" >GitHub</Link>
                </div>
                <img className="about-me__avatar"
                     src={Portret}
                     alt="Фотография студента" />
            </div>
        </section>
    )
}
