import TitleBarMolecule from "../../molecules/titleBar"
import SettingsMolecule from "../../molecules/setting"
import './styles'

const TitleBar = () => {
  return (
    <div className="titleBar">
        <TitleBarMolecule />
        <SettingsMolecule/>
    </div>
  )
}

export default TitleBar