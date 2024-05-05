import React, { useState } from 'react'
import roue from '../../assets/roue.png'
import { ChromePicker } from 'react-color'
import './ColorPicker.scss'

function ColorPicker({ onColorChange }) {
  const [background, setBackground] = useState('#fff')
  const [displayColorPicker, setDisplayColorPicker] = useState(false)

  const handleChangeComplete = (color) => {
    setBackground(color.hex)
    onColorChange(color.hex)
  }
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  }
  const handleKeyOpen = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClick()
    } else if (event.key === 'Escape' || event.key === ' ') {
      event.preventDefault()
      handleClose()
    }
  }
  const handleClose = () => {
    setDisplayColorPicker(false)
  }

  return (
    <div className="colorpicker">
      <p className="labels__label">Ma couleur</p>
      <img
        className="colorpicker__logo"
        src={roue}
        alt="roue chromatique"
        onClick={handleClick}
        onKeyDown={handleKeyOpen}
        tabindex="0"
      />
      {displayColorPicker ? (
        <div className="colorpicker__popover">
          <div className="colorpicker__cover" onClick={handleClose} />
          <ChromePicker
            color={background}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      ) : null}
    </div>
  )
}

export default ColorPicker
