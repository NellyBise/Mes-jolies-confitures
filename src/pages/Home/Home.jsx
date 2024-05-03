import './Home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
      <h2 className="home__title">
        Comment faire de jolies étiquettes pour les confitures maison ?
      </h2>
      <p className="home__text">
        J’aime bien faire des pots de confiture avec de jolies étiquettes, et
        vous ?<br />
        <br />
        Pour simplifier la création des étiquettes, je vous propose un outil de
        création et impression d’étiquettes sur planches d’étiquettes A4 3*8 ou
        tout simplement sur papier !<br />
        <br />À vous de jouer !
      </p>
      <Link className="home__button" to="/etiquettes">
        Créer mes étiquettes
      </Link>
    </section>
  )
}

export default Home
