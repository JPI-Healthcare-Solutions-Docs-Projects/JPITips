//Organisms
import Tips from "../../organisms/tips/tips"
import TitleBar from "../../organisms/titleBar"
import ProductImage from "../../organisms/productImage"
import "./styles"

const JPITipsTemplate = () => {

  return (
    <div>
      <TitleBar />
    <div className="pageContainer">
      <div className="pageItems">
      <ProductImage/>
      <Tips />
      </div>
    </div>
    </div>
  )
}

export default JPITipsTemplate