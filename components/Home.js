import '../sass/components/_reset.scss';
import '../sass/components/_font.scss';
import '../sass/components/_grid.scss';
import '../sass/components/_home.scss';
import Cta from '../components/Cta';

export default function Home() {
  return (
    <section id="home">
        <div className="container">
          <h1>Yunt, l’escape game<br></br>en magasin</h1>    
            <p>Mettez-vous au défi et testez vos compétences avec yunt.
            <br></br>
            Participez à des chasses au trésor dans le magasin de votre choix
            <br></br>et proﬁtez d'incroyables réductions sur l'ensemble de votre panier !
          </p>
            <Cta name="Découvrir" className="filled" url="#concept"/>
            <Cta name="Télécharger" className="unfilled" url="#telecharger"/>
        </div>
  </section> 
  );
}
