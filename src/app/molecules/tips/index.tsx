import { ProductLogo, Carousel } from '../../atoms/dynamic'
import { ProductContext, PracticeContext } from '../../../context/contextProviders'
import { useContext } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import tipsButton from '/public/assets/image/buttons/TipsButton.png'
import { CloseButton } from '../../atoms/buttons'
import './styles.css'


export const TipsMolecule: React.FC = () => {
    const { product, setProduct } = useContext(ProductContext);
    const { practice, setPractice } = useContext(PracticeContext);

    const DirectVetTips: Array<string> = [
        "Turn your detector on at least 2 minutes before starting ExamVue to avoid warning messages",
        "If ExamVue Duo says it can't connect to the generator, check the USB cable",
        "You can control the generator directly from ExamVue Duo",
        "ExamVue Duo has a built in technique chart for all body parts and sizes of animals",
        "You can email directly from ExamVue Duo. Contact us to set this up if it isn't already",
        "Do not install a second power-hungry piece of equipment on the same power line. Using both at the same time could throw your breaker"
    ]

    //Based on product chosen change the logo and the text rendered
    const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

    return (
        <div className="TipsContainer">
            <div className="ProductLogo">
                <ProductLogo />
            </div>
            <div className="TipsButton">
                <img src={tipsButton} />
            </div>
            <div className="Carousel">
                <Carousel slides={DirectVetTips} options={OPTIONS} />
            </div>
            <div className="CloseButton">
                <CloseButton />
            </div>
        </div>
    )
}