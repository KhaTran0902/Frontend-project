import { useContext } from "react";
import { ZippoNor, ZippoPk } from "../../assets/fake-data/ListProducts";
// import "./ProductsNor.css";
import { AppConText } from "../../AppContext";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Support from "../../components/footer/Support";
export default function ProductsNor() {
  const { handleAddProduct, DollarUsd } = useContext(AppConText);
  return (
    <div className="products__container">
      <Header/>
      <div className="products__banner">
        <img
          src="https://cdn.shopify.com/s/files/1/1295/7985/collections/UtilityLightersCollection_2030x648.jpg?v=1666620331"
          alt
        />
      </div>
      {/* <h1 className="products__content">Sản phẩm</h1> */}

     
      <div className="products_all animate__zoomInUp">
        {ZippoPk.map((item) => (
          <div
            data-aos="fade-up"
            className="product__cards_all animate__zoomInUp"
            key={item.id}
          >
            <div className="product__card_all">
              <div className="product__img_all ">
                <Link to={`/products/${item.id}`}>
                  <img src={item.img} alt="" />
                </Link>
              </div>
            </div>{" "}
            <div>
              <h3 className="item.title product-name-all ">
                <Link className="" to={`/products/${item.id}`}>{item.title}</Link>
              </h3>
            </div>
            <div className="product-price-all">
              {DollarUsd.format(item.price)}{" "}
            </div>
            <div>
              {" "}
              <button
                className="product-add-button-all"
                onClick={() => handleAddProduct(item)}
              >
                {" "}
                Buy now
              </button>{" "}
            </div>
          </div>
        ))}
      </div>
      <Support/>
     <Footer/>
    </div>
  );
}
