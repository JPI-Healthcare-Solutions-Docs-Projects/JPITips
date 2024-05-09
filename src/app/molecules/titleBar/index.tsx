import './styles'
import { SettingsButton } from '../../atoms/buttons'
import { ProductTitle, Icon } from '../../atoms/dynamic'
import JPIVetLogo from '../../../../public/assets/image/logos/JPIVetLogo.png'

const TitleBarMolecule = () => {

    /*Based on the context, 
    - Change the JPI Product to the Product chosen
    - Change the icon to the product chosen
    */

    return (
        <div className="titleBarMoleContainer">
            <div className="titleContent">
                <div className="titleBarLogo">
                    <Icon/>
                </div>
                <div className="titleText">
                    <div>
                        <ProductTitle />
                    </div>
                    &nbsp;| Operation Tips
                </div>
            </div>
            <div className="SettingsButton">
                <SettingsButton />
            </div>
        </div>
    )
}

export default TitleBarMolecule