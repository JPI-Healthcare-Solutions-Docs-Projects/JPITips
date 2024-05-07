import JPITipsTemplate from "../../templates/tipsTemp/index"
import SettingsPage from "../settingsPage/settingsPage"

//Context
import { SettingsContext } from "../../context/contextProviders"

import { useContext } from "react"

//Pass the context prop from here into JPITipsTemplate



const jpiTipsPage = () => {

  const {settings, setSettings} = useContext(SettingsContext);

  return (
    <div>
      {settings ? <SettingsPage/> : <JPITipsTemplate/>}
    </div>
  )
}

export default jpiTipsPage