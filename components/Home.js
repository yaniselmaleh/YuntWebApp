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
            <p>
            Une toute nouvelle expérience, avec Yunt
            <br></br>
            participez à un escape game dans le magasin de votre
            <br></br>
            choix, et proﬁtez de réductions sur la totalité de votre achat !
          </p>
            <Cta name="Découvrir" className="filled" url="#concept"/>
            <Cta name="Télécharger" className="unfilled" url="#telecharger"/>
        </div>
  </section> 
  );
}