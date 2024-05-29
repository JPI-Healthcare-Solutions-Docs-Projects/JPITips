// Atoms
import { ProductLogo, Carousel } from '../../atoms/dynamic';
import { CloseButton } from '../../atoms/buttons'
import { EmblaOptionsType } from 'embla-carousel'

// Assets
// eslint-disable-next-line import/no-unresolved
import tipsButton from '/public/assets/image/buttons/TipsButton.png';

// Styling
import './styles.css'

//Context
import { PracticeContext, ProductContext } from '../../../context/contextProviders';

//Library Tools
import { useContext } from 'react';

export const TipsMolecule: React.FC = () => {
    //TODO We need to have different tips for medical and veterinary 

    const DirectVetTips: Array<string> = [
        "If ExamVue Duo gives an error: Cannot connect to the Generator, please check the USB cable.",
        "You can control the JPI CubeX generator directly from ExamVue Duo.",
        "ExamVue Duo has a built in technique chart for all body parts and sizes of animals.",
        "If you cannot find the technique for unique body part and/or size of an animal, you can directly add the study in ExamVue Duo for future use.",
        "You can email directly from ExamVue Duo. Contact us to set this up if it isn't already.",
        "Do not install a second power-hungry piece of equipment on the same power line. Using both at the same time could throw your breaker."
    ];

    const TruePortableTips: Array<string> = [
        "If ExamVue Duo gives an error: Cannot connect to the Generator, please check the USB cable.",
        "You can control the JPI CubeX generator directly from ExamVue Duo.",
        "ExamVue Duo has a built in technique chart for all frequently studied body parts.",
        "If you cannot find the technique for unique body part and/or size of an animal, you can directly add the study in ExamVue Duo for future use.",
        "Do not install a second power-hungry piece of equipment on the same power line. Using both at the same time could throw your breaker."
    ];

    const DigitalPanelTips: Array<string> = [
        "After you turn on the powerbox for the wire panel, please wait 2 Minutes before starting ExamVue DR or ExamVue Duo Software.",
        "After you turn on a wireless panel, please wait 2 Minutes before starting ExamVue DR or ExamVue Duo Software.",
        "Check Wifi Connections if the panel is unable to connect to make sure you are connected to the correct adapter.",
        "ExamVue Duo has a built in technique chart for all body parts and sizes.",
        "After Swapping the Battery from the wireless panel, give at least 2 minutes in order for the panel to reconnect to the software.",
        "If ExamVue Duo gives an error: Cannot connect to the Generator, please check the USB cable.",
    ];


    let resultArr: Array<string>;

    const { product, setProduct } = useContext(ProductContext);

    switch (product) {
        case "Default":
            resultArr = DigitalPanelTips
            break;

        case "Panel":
            resultArr = DigitalPanelTips
            break;

        case "DirectVet":
            resultArr = DirectVetTips
            break;

        case "TruePortable":
            resultArr = TruePortableTips
            break;
    }

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
                <Carousel slides={resultArr} options={OPTIONS} />
            </div>
            <div className="red-close-button">
                <CloseButton />
            </div>
        </div>
    );
};