
export default function AboutProject ({}) {
    return (
        <section id="about-project" className="about-project">
            <h2 className="about-project__title headline">О проекте</h2>
            <ul className="about-project__wrapper">
                <li className="about-project__info">
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about-project__info">
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <ul className="about-project__duration">
                <li className="about-project__duration-lines about-project__front">
                    <p className="about-project__duration-marker">1 неделя</p>
                </li>
                <li className="about-project__duration-lines about-project__back">
                    <p className="about-project__duration-marker">4 недели</p>
                </li>
                <li className="about-project__duration-lines">
                    <p className="about-project__duration-caption">Back-end</p>
                </li>
                <li className="about-project__duration-lines">
                    <p className="about-project__duration-caption">Front-end</p>
                </li>
            </ul>
        </section>
    )
}