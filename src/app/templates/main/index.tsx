//Organisms
import TitleBar from "../../organisms/titleBar";
import TipsOrganism from "../../organisms/tips";
import SettingsPage from "../../organisms/settings";

//Styling
import "./styles.css"

//Context
import { SettingsContext } from "../../../context/contextProviders";
import { useContext } from "react";

const JPIMainTemplate = () => {
  const { settings, setSettings } = useContext(SettingsContext);

  // Makes Settings Button choose whether to render: Settings Page or Tips Page
  return (
    <div className="app-container">
      <div className="title-bar-container">
        <TitleBar />
      </div>
      <div className="setting-container">
      {settings && <SettingsPage />}
      </div>
      <div className="content-container">
        <TipsOrganism />
      </div>
    </div>
  );
};

export default JPIMainTemplate;