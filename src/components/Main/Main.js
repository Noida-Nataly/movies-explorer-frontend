import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Tech from "../Tech/Tech";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

export default function Main ({}) {
    return (
        <main className="container">
            <Promo />
            <AboutProject />
            <Tech />
            <AboutMe />
            <Portfolio />
        </main>
    )
}