import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <Link className="footer__text" to="https://www.nelly-bise.fr/">
        Réalisé par Nelly Bise
      </Link>
      <Link className="footer__text" to="/credits">
        Crédits des images
      </Link>
    </footer>
  )
}

export default Footer
