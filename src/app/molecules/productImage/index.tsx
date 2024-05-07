import "./styles"
import logo from "/public/assets/image/products/DirectVet.png"

const ProductImage = () => {

//Based on product chosen
// - Change the image provided

  return (
    <div className="imageContainer">
      <div className="image">
        <img src={logo} height="310px" width="227px"/>
      </div>
    </div>
  )
}

export default ProductImage