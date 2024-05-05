import './Credits.scss'
import abricot from '../../assets/Abricot.jpg'
import fraise from '../../assets/Fraise.jpg'
import poire from '../../assets/Poire.jpg'
import prune from '../../assets/Prune.jpg'

function Credits() {
  return (
    <section className="credits">
      <div className="credits__fruits">
        <img
          className="credits__image credits__image--1"
          src={abricot}
          alt="image d'abricot"
        />
        <img
          className="credits__image credits__image--2"
          src={fraise}
          alt="image de fraise"
        />
      </div>
      <h2 className="credits__title">Crédits des images</h2>
      <ul className="credits__list">
        <li className="credits__listItem">
          Logo : Image by{' '}
          <a href="https://www.freepik.com/free-vector/kawaii-smiling-food-pack_4123390.htm#fromView=search&page=1&position=4&uuid=17a9f851-eaf1-4bf1-913d-a861b3e3535d">
            Freepik
          </a>
        </li>
        <li className="credits__listItem">
          Photo page d'accueil :{' '}
          <a href="https://www.freepik.com/free-photo/plum-confiture-glass-jar-toast_10786055.htm#fromView=search&page=1&position=4&uuid=82688cac-a33c-42fa-9bfc-5187076d5ae3">
            Image by azerbaijan_stockers on Freepik
          </a>
        </li>
        <li className="credits__listItem">
          Fruits :{' '}
          <a href="https://www.freepik.com/free-vector/fruits-set-white-fruits-including-apple-lemon-raspberry-grape-orange-plum-coconut-pineapple-white-currant-strawberry-banana-pomegranat-blackberry-melon-fig-lime-pear-cherry-kiwi_25333978.htm#fromView=search&page=1&position=1&uuid=ee271768-15a4-4366-9b45-6a03d00395d0">
            Image by vector4stock
          </a>{' '}
          on Freepik
        </li>
        <li className="credits__listItem">
          Carreaux vichy :{' '}
          <a href="https://www.freepik.com/free-vector/gingham-angled-pattern-background-set_48780247.htm#fromView=search&page=1&position=50&uuid=f0e2cb5f-4dc1-4b4f-ae1c-57e82751cbf5">
            Image by juicy_fish
          </a>{' '}
          on Freepik
        </li>
        <li className="credits__listItem">
          Roue chromatique : Image by Casper250 on Freepng
        </li>
      </ul>
      <div className="credits__fruits">
        <img
          className="credits__image credits__image--3"
          src={poire}
          alt="image de poire"
        />
        <img
          className="credits__image credits__image--4"
          src={prune}
          alt="image de prune"
        />
      </div>
    </section>
  )
}

export default Credits
