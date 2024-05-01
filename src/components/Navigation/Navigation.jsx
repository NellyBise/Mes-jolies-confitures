import './Navigation.scss'
import { useState } from 'preact/hooks'
import { Link, useParams } from 'react-router-dom'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const [currentPage, setCurrentPage] = useState('Accueil')
  const handlePageChange = (pageName) => {
    setCurrentPage(pageName)
  }

  return (
    <div className="navigation">
      <button className="navigation__burger" onClick={toggle}>
        <i class="fa-solid fa-bars"></i>
      </button>
      {isOpen ? (
        <nav className="navigation__box navigation__box--active">
          <ul className="navigation__menu " onClick={toggle}>
            <Link
              className={
                currentPage === 'Accueil'
                  ? 'navigation__link navigation__link--active'
                  : 'navigation__link'
              }
              to="/"
              onClick={() => handlePageChange('Accueil')}
            >
              Accueil
            </Link>
            <Link
              className={
                currentPage === 'Etiquettes'
                  ? 'navigation__link navigation__link--active'
                  : 'navigation__link'
              }
              to="/etiquettes"
              onClick={() => handlePageChange('Etiquettes')}
            >
              Créer des étiquettes
            </Link>
          </ul>
        </nav>
      ) : (
        <nav className="navigation__box"></nav>
      )}
    </div>
  )
}
export default Navigation
