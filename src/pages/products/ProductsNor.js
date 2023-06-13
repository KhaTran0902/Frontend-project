import { useContext } from "react";
import { ZippoNor } from "../../assets/fake-data/ListProducts";
import "./ProductsNor.css";
import { AppConText } from "../../AppContext";
import { Link } from "react-router-dom";
export default function ProductsNor() {
  const {handleAddProduct, DollarUsd} =useContext(AppConText)
  return (

    <div className="products">
      {ZippoNor.map((item) => (
        <div className="product__cards" key={item.id}>
          <div className="product__card">
            <div className="product__img">
            <Link to={`/products/${item.id}`}>
              <img src={item.img} alt="" />
              </Link>
            </div>
          </div>{" "}
          <div>
            <h3 className="item.title product-name">{item.title}</h3>
          </div>
          <div className="product-price">{DollarUsd.format(item.price)}  </div>
          <div> <button className="product-add-button" onClick={() => handleAddProduct(item)}> Buy now</button> </div>
        </div>
      ))}
    </div>
  );
}
