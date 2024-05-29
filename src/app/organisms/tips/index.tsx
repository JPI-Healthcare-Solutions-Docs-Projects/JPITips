//Molecules
import ProductImage from "../../molecules/productImage";
import { TipsMolecule } from "../../molecules/tips";


//Styling
import "./styles.css";

//Function to read data, if exists then set product to the data

const TipsOrganism = () => {
    return (
            <div className="tips-page-items-org">
                <ProductImage />
                <TipsMolecule />
            </div>
    )
}

export default TipsOrganism