import '../sass/components/_reset.scss';
import '../sass/components/_font.scss';
import '../sass/components/_grid.scss';
import '../sass/components/_home.scss';
import Cta from '../components/Cta';

export default function Home() {
  return (
    <section id="home">
        <div className="container">
          <h1>Yunt, le challenge<br></br>en magasin</h1>    
            
          <p>
            <b>Mettez-vous au défi et testez vos compétences avec yunt.</b>
            <br></br>
            Participez à <b>des chasses au trésor dans le magasin de votre choix</b>
            <br></br>
            et <b>proﬁtez d'incroyables réductions sur l'ensemble de votre panier !</b>
          </p>

          <Cta name="Découvrir" className="unfilled" url="#concept"/>
          <Cta name="Télécharger" className="filled" url="#telecharger"/>
        </div>
  </section> 
  );
}
