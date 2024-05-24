//Molecules
import ProductImage from "../../molecules/productImage";
import { TipsMolecule } from "../../molecules/tips";

//Styling
import "./styles.css";

const TipsOrganism = () => {
    return (
            <div className="tips-page-items-org">
                <ProductImage />
                <TipsMolecule />
            </div>
    )
}

export default TipsOrganism