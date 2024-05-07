import JPIMainTemplate from "../../templates/main/index"

//Context
import { SettingsContext } from "../../context/contextProviders"
import { useContext } from "react"

//Pass the context prop from here into JPIMainTemplate



const jpiTipsPage = () => {

  return (
    <div>
      <JPIMainTemplate/>
    </div>
  )
}

export default jpiTipsPage