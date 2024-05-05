import './Labels.scss'
import { useState } from 'preact/hooks'
import ColorPicker from '../../components/ColorPicker/ColorPicker'
import polices from '../../data/polices.json'
import confiture from '../../data/confiture.json'

const sortedPolices = polices
  .map((police) => police.title)
  .sort((a, b) => a.localeCompare(b))

const sortedFruits = confiture
  .map((fruit) => fruit.title)
  .sort((a, b) => a.localeCompare(b))

function Labels({ printeableArea }) {
  const [name, setName] = useState('Abricot')
  const [image, setImage] = useState('./src/assets/abricot.jpg')
  const [classicImage, setClassicImage] = useState(
    './src/assets/vichy/yellow.jpg'
  )
  const handleNameChange = (event) => {
    const selectedFruit = confiture.find(
      (fruit) => fruit.title === event.target.value
    )
    if (selectedFruit) {
      setName(selectedFruit.title)
      setImage(selectedFruit.img)
      setClassicImage(selectedFruit.classic)
    }
  }
  const [date, setDate] = useState('Juin 2024')
  const handleDateChange = (event) => {
    setDate(event.target.value)
  }
  const [font, setFont] = useState('Dancing script')
  const handleFontChange = (event) => {
    setFont(event.target.value)
  }
  const [textColor, setTextColor] = useState('#000')
  const handleTextColorChange = (color) => {
    setTextColor(color)
  }

  const [labelStyle, setlabelStyle] = useState('Classique')
  const handleLabelStyleChange = (event) => {
    setlabelStyle(event.target.value)
  }

  const [numberOfLabels, setNumberOfLabels] = useState(6)
  const handleNumberOfLabelsChange = (event) => {
    if (event.target.value >= 1 && event.target.value <= 24) {
      setNumberOfLabels(parseInt(event.target.value))
    } else {
      setNumberOfLabels(1)
    }
  }

  const handlePrintClick = () => {
    const printableArea = document.getElementById('printableArea')
    if (printableArea) {
      const content = printableArea.innerHTML
      const printContent = `<div class="labels__print">${Array.from(
        { length: numberOfLabels },
        (_, index) => content
      ).join('')}</div>`

      // Création d'un élément temporaire pour contenir le contenu à imprimer
      const tempContainer = document.createElement('div')
      tempContainer.innerHTML = printContent
      document.body.appendChild(tempContainer)
      window.print()
      document.body.removeChild(tempContainer)
    }
  }

  return (
    <section className="labels">
      <article className="labels__parameters">
        <h2 className="labels__title">Ma confiture</h2>
        <form className="labels__form">
          <label className="labels__label" for="name">
            Fruit
          </label>
          <select
            className="labels__input"
            value={name}
            name="name"
            onChange={handleNameChange}
          >
            {sortedFruits.map((title, id) => (
              <option key={id} value={title}>
                {title}
              </option>
            ))}
          </select>
          <label className="labels__label" for="date">
            Date de fabrication ou précision
          </label>
          <input
            type="text"
            className="labels__input"
            name="date"
            value={date}
            maxlength="20"
            onChange={handleDateChange}
          ></input>
        </form>
        <h2 className="labels__title">Mon design</h2>
        <form className="labels__form">
          <label className="labels__label" for="police">
            Mon écriture
          </label>
          <select
            className="labels__input"
            value={font}
            name="police"
            onChange={handleFontChange}
          >
            {sortedPolices.map((title, id) => (
              <option key={id} value={title} style={{ fontFamily: title }}>
                {title}
              </option>
            ))}
          </select>
          <label className="labels__label" for="style">
            Mon style
          </label>
          <select
            className="labels__input"
            value={labelStyle}
            name="style"
            onChange={handleLabelStyleChange}
          >
            <option key="Classique" value="Classique">
              Classique
            </option>
            <option key="Moderne" value="Moderne">
              Moderne
            </option>
            <option key="Simple" value="Simple">
              Simple
            </option>
          </select>
          <ColorPicker onColorChange={handleTextColorChange} />
        </form>
      </article>
      <article className="labels__visu">
        <div id="printableArea">
          <div
            className={
              labelStyle === 'Simple'
                ? 'labels__exemple labels__exemple--simple'
                : labelStyle === 'Moderne'
                ? 'labels__exemple labels__exemple--moderne'
                : 'labels__exemple'
            }
            style={
              labelStyle === 'Classique'
                ? { borderImageSource: `url(${classicImage})` }
                : {}
            }
          >
            <div className="labels__imageContainer">
              <img className="labels__image" src={image} />
            </div>
            <div className="labels__text">
              <p
                className="labels__name"
                style={{ fontFamily: font, color: textColor }}
              >
                {name}
              </p>
              <p
                className="labels__date"
                style={{ fontFamily: font, color: textColor }}
              >
                {date}
              </p>
            </div>
          </div>
        </div>
        <div className="labels__printing">
          <label className="labels__label" for="number">
            Nombre d'étiquettes (1-24)
          </label>
          <input
            type="number"
            min="1"
            max="24"
            className="labels__input labels__input--number"
            name="number"
            value={numberOfLabels}
            onChange={handleNumberOfLabelsChange}
          ></input>
          <button className="labels__button" onClick={handlePrintClick}>
            Imprimer en A4
          </button>
        </div>
      </article>
    </section>
  )
}

export default Labels
