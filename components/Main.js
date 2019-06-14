import '../sass/components/_main.scss';
import Descriptif from '../components/Descriptif';
import Cards from '../components/Cards';
import Concept from '../static/yunt-concept.png';
import Progression from '../static/yunt-progression.png';
import Recompenses from '../static/yunt-recompenses.png';

const Main = () => (
  <section className="main">
        <div>
            <section>
                <div className="container">
                    <div id="concept">
                        <article>
                        <Descriptif title="Concept" description="Participez à un escape game dans nos magasins partenaires partout en France et gagnez de nombreuses récompenses."/>
                        </article>

                        <aside>
                            <Cards src={Concept} title="Concept" description="Participez à un escape game dans nos magasins partenaires partout en France et gagnez de nombreuses récompenses."/>
                        </aside>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div id="progression">
                        <aside>
                            <Cards src={Progression} title="Progression" description="Choisissez votre niveau de difficulté, surmontez les épreuves et évoluez pour gagner davantage de lots."/>
                        </aside>

                        <article className="progression_labeur_left">
                            <Descriptif title="Progression" description="Choisissez votre niveau de difficulté, surmontez les épreuves et évoluez pour gagner davantage de lots."/>
                        </article>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div id="recompenses">
                        <article>
                            <Descriptif title="Recompenses" description="( On sait que c’est ce qui vous intéresse ). Un pourcentage de réduction en fonction du temps impartis dans nos magasins partenaires !"/>
                        </article>

                        <aside>
                            <Cards src={Recompenses} title="Recompenses" description="Un pourcentage de réduction en fonction du temps impartis dans nos magasins partenaires."/>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    </section>
);

export default Main;