import './Home.scss'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
      <article className="home__article">
        <h2 className="home__title">
          Comment faire de jolies étiquettes pour les confitures maison ?
        </h2>
        <p className="home__text">
          J’aime bien faire des pots de confiture avec de jolies étiquettes, et
          vous ?<br />
          <br />
          Pour vous simplifier la vie, je vous propose un outil de création et
          d'impression d’étiquettes en format A4 sur des planches 3x8 ou tout
          simplement sur papier !<br />
          <br />À vous de jouer !
        </p>
        <NavLink to="/etiquettes" activeClassNane="active">
          <button className="home__button">Créer mes étiquettes</button>
        </NavLink>
      </article>
    </section>
  )
}

export default Home
