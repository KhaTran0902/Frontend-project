import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { ZippoAll } from "../../assets/fake-data/ListProducts";
import { useContext, useEffect } from "react";
import { AppConText } from "../../AppContext";
import "./Products.css";
import Filters from "./Filter";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Support from "../../components/footer/Support";
import swal from "sweetalert";
export default function Products() {
  const { handleAddProduct, DollarUsd, data} = useContext(AppConText);

  return (
    <div className="products__container">
      <Header />
      <div className="products__banner">
        <img
          src="https://cdn.shopify.com/s/files/1/1295/7985/collections/WindproofCollectionBanner.jpg?v=1666620180"
          alt
        />
      </div>
      {/* <h1 className="products__content">Sản phẩm</h1> */}

      <Filters />
      <div className="products_all animate__zoomInUp">
        {data.map((item) => (
          <div
            data-aos="fade-up"
            className="product__cards_all animate__zoomInUp"
            key={item._id}
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
                <Link className="" to={`/products/${item.id}`}>
                  {item.title}
                </Link>
              </h3>
            </div>
            <div className="product-price-all">
              {DollarUsd.format(item.price)}{" "}
            </div>
            <div>
              {" "}
              <button
                className="product-add-button-all"
                onClick={ () => {
                  swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                  });
                 handleAddProduct(item);
                }
              }>
                Buy now
              </button>{" "}
            </div>
          </div>
        ))}
      </div>
      <Support />
      <Footer />
    </div>
  );
}
