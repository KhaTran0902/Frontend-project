import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { ZippoAll } from "../../assets/fake-data/ListProducts";
import { useContext } from "react";
import { AppConText } from "../../AppContext";
import "./Products.css"
import Filters from "./Filter";

export default function Products() {
  const {handleAddProduct, DollarUsd,data} = useContext(AppConText)

  return (
    <div>
      <Header />
      <h1 className="products__content">Sản phẩm</h1>
      <Filters/>
      <div className="products_all">
      {data.map((item) => (
        <div className="product__cards_all" key={item.id}>
          <div className="product__card_all">
            <div className="product__img_all">
              <img src={item.img} alt="" />
            </div>
          </div>{" "}
          <div>
            <h3 className="item.title product-name-all">{item.title}</h3>
          </div>
          <div className="product-price-all">{DollarUsd.format(item.price)}  </div>
          <div> <button className="product-add-button-all" onClick={() => handleAddProduct(item)}> Buy now</button> </div>
        </div>
      ))}
    </div>
      <Footer />
    </div>
  );
}
