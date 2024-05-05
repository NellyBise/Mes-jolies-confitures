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
          className={isOpen ? 'navigation__menu ' : ''}
          onClick={isOpen ? toggle : null}
        >
          <NavLink className="navigation__link" activeClassName="active" to="/">
            Accueil
          </NavLink>
          <NavLink
            className="navigation__link"
            activeClassName="active"
            to="/etiquettes"
          >
            Créer des étiquettes
          </NavLink>
        </ul>
      </nav>
      <button className="navigation__burger" onClick={toggle}>
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  )
}
export default Navigation
