import './styles.css'
import { ProductContext, SettingsContext } from '../../context/contextProviders'
import { useContext } from 'react'
// import { initialize, enable as enableRemote } from "@electron/remote/main";
// initialize();

export const CloseButton = () => {
  return (
    <div>CloseButton</div>
  )
}

export const SettingsButton = () => {

  const {settings, setSettings}  = useContext(SettingsContext);

  const test = () => {
    setSettings(true);
    return "hello"
  }

  return (
    <div>
      <button className="settingButton" onClick={test}>
      </button>
    </div>
  )
}

export const BackButton = () => {

  const {settings, setSettings}  = useContext(SettingsContext);

  const test = () => {
    setSettings(false);
    return "hello"
  }

  return (
    <div>
      <button className="backButton" onClick={test}>
        back
      </button>
    </div>
  )
}