import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <Link to="/credits">Crédits des images</Link>
    </footer>
  )
}

export default Footer
