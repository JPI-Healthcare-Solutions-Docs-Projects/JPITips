import './styles'
import { SettingsButton } from '../../atoms/buttons'

const TitleBarMolecule = () => {
    return (
        <div className="titleBarMoleContainer">
            <div className="Title">
                JPI Product | Operation Tips
            </div>
            <div className="Settings">
                <SettingsButton />
            </div>
        </div>
    )
}

export default TitleBarMolecule