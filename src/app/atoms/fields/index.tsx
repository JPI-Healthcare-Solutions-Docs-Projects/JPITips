import { useContext } from "react"
import { ProductContext, PracticeContext } from "../../context/contextProviders"

export const InputFields = () => {
    //Product State
    const { product, setProduct } = useContext(ProductContext);

    //Practice State
    const { practice, setPractice } = useContext(PracticeContext);

    //On Change Function: Set the practice value chosen in the settings
    //TODO: DEFINE EVENT TYPE
    const settingPractice = (event: any) => {
        setPractice(event.target.value);
        return;
    }

    //On Change Function: Set the product value chosen in the settings
    //TODO: DEFINE EVENT TYPE
    const settingProduct = (event: any) => {
        setProduct(event.target.value);
        return;
    }

    return (
        <div className="SettingsContainer">
            <div className="SelectionList">
                <select name="practice" id="practice-select"  onChange={settingPractice}>
                    <option value="Default">--Please choose a practice--</option>
                    <option value="Medical">Medical</option>
                    <option value="Veterinary">Veterinary</option>
                </select>
                <select name="product" id="product-select" onChange={settingProduct}>
                    <option value="Default">--Please choose a practice--</option>
                    <option value="Panel">Digital Plate/Panel</option>
                    <option value="DirectVet">DirectVet</option>
                    <option value="TruePortable">True Portable</option>
                </select>
            </div>
            <div>
                {/* TODO: Add hide feature */}
                <input type="checkbox" id="hidden" name="hidden" /> Hide tips on ExamVue Duo launch
            </div>
        </div>
    )
}



