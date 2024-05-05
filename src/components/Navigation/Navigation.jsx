import './Navigation.scss'
import { useState } from 'preact/hooks'
import { NavLink } from 'react-router-dom'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="navigation">
      <nav
        className={
          isOpen
            ? 'navigation__box navigation__box--active'
            : 'navigation__screenMenu'
        }
      >
        <ul
          className={isOpen ? 'navigation__menu ' : 'navigation__menuScreen'}
          onClick={isOpen ? toggle : null}
        >
          <li>
            <NavLink
              className="navigation__link"
              activeClassName="active"
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navigation__link"
              activeClassName="active"
              to="/etiquettes"
            >
              Créer des étiquettes
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className="navigation__burger"
        aria-label="Ouvrir le menu de navigation"
        onClick={toggle}
      >
        <i class="fa-solid fa-bars" aria-hidden="true"></i>
      </button>
    </div>
  )
}
export default Navigation
