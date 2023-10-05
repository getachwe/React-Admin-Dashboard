import { singleProduct } from "../../data";
import Single from "../single/Single";
import "./product.scss";

function Product() {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
}

export default Product;
