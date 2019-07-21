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
                        <Descriptif title="Concept" description="Participez à une <b>chasse au trésor dans nos <br></br>magasins partenaires</b> partout en <b>France</b> et <b>gagnez <br></br>de nombreuses récompenses.</b>"/>
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
                            <Cards src={Progression} title="Progression" description="Tentez de remporter davantage de lots en jouant à plusieurs, et en partageant votre score !"/>
                        </aside>

                        <article className="progression_labeur_left">
                            <Descriptif title="Progression" description="Repoussez vos limites. Sélectionnez votre niveau de difficulté, surmontez les épreuves et gagnez en expérience. Que vous ayez l’âme d’un explorateur, d’un aventurier ou même d’un chevalier, plus vous jouez, plus vous gagnez !"/>
                        </article>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div id="recompenses">
                        <article>
                            <Descriptif title="Recompenses" description="Obtenez votre gain. Parce qu’on sait très bien que c’est ce qui vous intéresse, nous vous offrons la chance de remporter des avantages en magasin. Produit de vos rêves, code promo ou avoir, c’est vous qui décidez ! Si vous arrivez à relevez les défis les plus ambitieux, naturellement…"/>
                        </article>

                        <aside>
                            <Cards src={Recompenses} title="Recompenses" description="Obtenez le meilleur de ce que vous proposent vos enseignes favorites à l’issue de votre expérience de jeu. Partagez à vos proches et notez les challenges !"/>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    </section>
);

export default Main;
