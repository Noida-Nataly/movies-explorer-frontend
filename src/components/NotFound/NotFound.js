import {Link} from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__meaning">Страница не найдена</p>
        <Link className="not-found__back link" to={"/"}> Назад </ Link>
      </section>
    </main>);
}