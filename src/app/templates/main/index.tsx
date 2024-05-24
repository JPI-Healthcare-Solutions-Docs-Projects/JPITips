//Organisms
import TitleBar from "../../organisms/titleBar"
import TipsOrganism from "../../organisms/tips"
import SettingsPage from "../../organisms/settings"
import "./styles.css"

//Context
import { SettingsContext } from "../../../context/contextProviders"
import { useContext } from "react"

const JPIMainTemplate = () => {

  const {settings, setSettings} = useContext(SettingsContext);

  return (
    <div>
      <TitleBar />
      <div className="pageContainer">
      {settings ? <SettingsPage/> : <TipsOrganism />}
      </div>
    </div>
  )
}

export default JPIMainTemplate