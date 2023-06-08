import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { ZippoAll } from "../../assets/fake-data/ListProducts";
import { useContext } from "react";
import { AppConText } from "../../AppContext";
import "./Products.css"
import Filters from "./Filter";
import 'animate.css'
import { Link } from "react-router-dom";
export default function Products() {
  const { handleAddProduct, DollarUsd, data } = useContext(AppConText)
  
  return (
    <div  >
      <Header />
      <h1 className="products__content">Sản phẩm</h1>
      <Filters />
      <div className="products_all animate__zoomInUp  ">
        {data.map((item) => (
          <div className="product__cards_all animate__zoomInUp" key={item.id}>
            <div className="product__card_all">
              <div className="product__img_all ">
                <Link to= {`/products/${item.id}`}>
                <img src={item.img} alt="" />
                </Link>
               
              </div>
            </div>{" "}
            <div>
              <h3 className="item.title product-name-all ">
                <Link to={`/products/${item.id}`}>
                {item.title}
                </Link>
             
                
                </h3>
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
