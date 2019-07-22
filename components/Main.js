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
                            <Descriptif title="Concept" description="Participez à une <b>chasse au trésor dans nos <br>magasins partenaires</b> partout en <b>France</b> et <b>gagnez <br>de nombreuses récompenses.</b>"/>
                        </article>

                        <aside>
                            <Cards src={Concept} description="Un concept innovant & riche en fonctionnalités"/>
                        </aside>

                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div id="progression">
                        <aside>
                            <Cards src={Progression} description="Une progression simple adaptée à tous les niveaux"/>
                        </aside>

                        <article className="progression_labeur_left">
                            <Descriptif title="Progression" description="<b>Choisissez</b> votre niveau de difficulté, <b>surmontez</b> les <br>épreuves et <b>évoluez</b> pour <b>gagner davantage de <br>lots.</b>"/>
                        </article>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div id="recompenses">
                        <article>
                            <Descriptif title="Récompenses" description="Car nous savons que c’est ce qui vous intéresse, recevez <b>un pourcentage de réduction</b> en fonction de votre position dans le classement et du temps impartis dans <b>nos magasins partenaires !</b>"/>
                        </article>

                        <aside>
                            <Cards src={Recompenses} description="Toujours gagnants ! des récompenses méritées et à la hauteur de nos attentes"/>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    </section>
);

export default Main;
