import JPIMainTemplate from "../../templates/main/index"

//Context
import { SettingsContext } from "../../context/contextProviders"
import { useContext } from "react"

import "./styles.css"
//Pass the context prop from here into JPIMainTemplate



const jpiTipsPage = () => {

  return (
    <div className="RootPage">
      <JPIMainTemplate/>
    </div>
  )
}

export default jpiTipsPage