import logo from '../../assets/LOGO.jpg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <div className="header__mark">
        <img
          className="header__logo"
          src={logo}
          alt="logo Mes jolies confitures"
        />
        <h1 className="header__title"> Mes jolies confitures</h1>
      </div>
      <p className="header__burger">
        <i class="fa-solid fa-bars"></i>
      </p>
    </header>
  )
}

export default Header
