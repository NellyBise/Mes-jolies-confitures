import './Credits.scss'

function Credits() {
  return (
    <section className="credits">
      <h2 className="credits__title">Crédits des images</h2>
      <ul className="credits__list">
        <li className="credits__listItem">
          Logo : Image by{' '}
          <a href="https://www.freepik.com/free-vector/kawaii-smiling-food-pack_4123390.htm#fromView=search&page=1&position=4&uuid=17a9f851-eaf1-4bf1-913d-a861b3e3535d">
            Freepik
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
    </section>
  )
}

export default Credits
