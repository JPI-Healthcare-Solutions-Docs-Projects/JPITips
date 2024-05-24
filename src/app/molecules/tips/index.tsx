// Atoms
import { ProductLogo, Carousel } from '../../atoms/dynamic';
import { CloseButton } from '../../atoms/buttons'
import { EmblaOptionsType } from 'embla-carousel'

// Assets
// eslint-disable-next-line import/no-unresolved
import tipsButton from '/public/assets/image/buttons/TipsButton.png';

// Styling
import './styles.css'

export const TipsMolecule: React.FC = () => {

    const DirectVetTips: Array<string> = [
        "Turn your detector on at least 2 minutes before starting ExamVue to avoid warning messages",
        "If ExamVue Duo says it can't connect to the generator, check the USB cable",
        "You can control the generator directly from ExamVue Duo",
        "ExamVue Duo has a built in technique chart for all body parts and sizes of animals",
        "You can email directly from ExamVue Duo. Contact us to set this up if it isn't already",
        "Do not install a second power-hungry piece of equipment on the same power line. Using both at the same time could throw your breaker"
    ];

    // TODO: add dynamic TIPS to display
    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

    return (
        <div className="tips-container">
            <div className="product-logo-image">
                <ProductLogo />
            </div>
            <div className="grey-tips-button">
                <img src={tipsButton} />
            </div>
            <div className="carousel">
                <Carousel slides={DirectVetTips} options={OPTIONS} />
            </div>
            <div className="red-close-button">
                <CloseButton />
            </div>
        </div>
    );
};