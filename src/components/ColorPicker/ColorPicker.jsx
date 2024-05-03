import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

function ColorPicker({ onColorChange }) {
  const [background, setBackground] = useState('#fff')

  const handleChangeComplete = (color) => {
    setBackground(color.hex)
    onColorChange(color.hex) // Appel de la fonction de rappel avec la nouvelle couleur
  }

  return (
    <ChromePicker color={background} onChangeComplete={handleChangeComplete} />
  )
}

export default ColorPicker
