import './styles.css'

import { ProductContext } from '../../context/contextProviders'

import { useContext } from 'react'

export const CloseButton = () => {
  return (
    <div>CloseButton</div>
  )
}

export const SettingsButton = () => {

  const {product, setProduct}  = useContext(ProductContext);

  const test = () => {
    setProduct("Direct Vet");
    console.log(product)
    // renderer process (mainWindow)
// const childWindow = window.open('', 'modal')
// childWindow.document.write('<h1>Hello</h1>')
    return product
  }

  return (
    <div>
      <button className="settingButton" onClick={test}>
      </button>
    </div>
  )
}