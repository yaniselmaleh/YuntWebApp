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
                        <Descriptif title="Concept" description="Découvrez votre nouveau terrain de jeuParticiper à une expérience unique au sein de nos magasins partenaires et soyez récompensé en fonction de votre score final ! Partout en France, aidez Oursoupidou à résoudre les mystérieuses énigmes que peuvent renfermer vos enseignes préférées."/>
                        </article>

                        <aside>
                            <Cards src={Concept} title="Concept" description="Usez d'ingéniosité afin de venir à bout de toutes les questions, optimisez votre score et récupérez votre code promotionnel. Attention, chaque seconde compte !"/>
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
