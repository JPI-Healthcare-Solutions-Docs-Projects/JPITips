//Atoms
import { SettingsButton } from '../../atoms/buttons';
import { ProductTitle, Icon } from '../../atoms/dynamic';

//Styling
import './styles.css';

const TitleBarMolecule = () => {
    return (
        <div className="titleBar-container">
            <div className="title-content">
                <Icon />
                <div className="title-text">
                    <div>
                        <ProductTitle />
                    </div>
                    &nbsp;| Operation Tips
                </div>
            </div>
            <div className="settings-button">
                <SettingsButton />
            </div>
        </div>
    );
};

export default TitleBarMolecule;