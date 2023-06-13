import { useContext, useEffect, useState } from "react";
import { ZippoAll } from "../../assets/fake-data/ListProducts";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import { AppConText } from "../../AppContext";
import { params } from "react-router-dom";
import zip1 from "../../assets/images/zip1.png";
import "./Detail.css";
import Footer from "../../components/footer/Footer";
const Details = () => {
  const { DollarUsd } = useContext(AppConText);
  const params = useParams();
  let productData = null;
  if (params.id === "01") {
    productData = {
      id:"01",
      title: "Floral Gorilla Design",
      price: 36.95,
      img: zip1,
      content: "Mẫu điêu khắc hình con khỉ",
    };
  } else if (params.id === "02") {
    productData = {
      id:"02",
      title: "Butterfly Design",
      price: 40.45,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/files/atlls9agqjqjjhh5kgvr_large.jpg?v=1682605243",
    };
  } else if (params.id === "03") {
    productData = {
      id:"03",
      title: "Tree Life Design",
      price: 35.5,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/files/lloekx546n7mlxdobvia_large.jpg?v=1682605236",
    };
  } else if (params.id === "04") {
    productData = {
      id:"04",
      title: "Red Moon Desgin ",
      price: 28.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/files/s8kq1msyny8roupjppy6_large.jpg?v=1682605111",
    };
  } else if (params.id === "05") {
    productData = {
      id:"05",
      title: "Howdy Cowboy",
      price: 32.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/t6htkg7u2qju0jpgar0y_large.jpg?v=1681234446",
    };
  } else if (params.id === "06") {
    productData = {
      id:"06",
      title: "Lizard Fusion",
      price: 32.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/xwiuua3zulrvccxhmuuh_large.jpg?v=1681234331",
    };
  } else if (params.id === "07") {
    productData = {
      id:"07",
      title: "Abstract Faces Design",
      price: 40.45,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/dmqtwyjvi9xfxolzuwqi_large.jpg?v=1681234334",
    };
  } else if (params.id === "08") {
    productData = {
      id:"08",
      title: "Boxing Design",
      price: 32.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/frzimbpzn0gng5qcf82w_large.jpg?v=1645131172",
    };
  } else if (params.id === "09") {
    productData = {
      id:"09",
      title: "Graffiti Peace Design",
      price: 28.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/gzrlv5eyxi8x1evvgxot_large.jpg?v=1680785281",
    };
  } else if (params.id === "10") {
    productData = {
      id:"10",
      title: "18 Kt.gold",
      title1: "Cao cấp",
      price: 200.033,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/195_MAIN_large.jpg?v=1617104296",
    };
  } else if (params.id === "11") {
    productData = {
      id:"11",
      title: "Bimetall (Copper Bottom)",
      title1: "Cao cấp",
      price: 300.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/files/flmqdmaemoeshqbbczv6_large.jpg?v=1683128914",
    };
  } else if (params.id === "12") {
    productData = {
      id:"12",
      title: "Luxury Diamond Design",
      title1: "Cao cấp",
      price: 230.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/b0e0191e55b664c3f1e8a3de45e3de9ad93f88f4_large.jpg?v=1672578612",
    };
  } else if (params.id === "13") {
    productData = {
      id:"13",
      title: "Currency Design",
      title1: "Cao cấp",
      price: 210.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/olwypri8djgg5weqtft8_large.jpg?v=1672578784",
    };
  } else if (params.id === "14") {
    productData = {
      id:"14",
      title: "Armor® Tree of Life",
      title1: "Cao cấp",
      price: 97.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/05a40faf16fa70fd036e6f216e1e2de94a088fc9_large.jpg?v=1672578605",
    };
  } else if (params.id === "15") {
    productData = {
      id:"15",
      title: "Armor® High Polish Blue Diamonds",
      title1: "Cao cấp",
      price: 115.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/0d519de12b9c9391368e93cd9e834a72eeebcbe7_large.jpg?v=1672578628",
    };
  } else if (params.id === "16") {
    productData = {
      id:"16",
      title: "Armor® Fleur-de-lis Design",
      title1: "Cao cấp",
      price: 140.25,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/94ef3847d4fc58a6336ca0e16a8256cd866d1c8b_large.jpg?v=1680098100",
    };
  } else if (params.id === "17") {
    productData = {
      id:"17",
      title: "Founder's Day Collectible",
      title1: "Cao cấp",
      price: 120.0,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/files/ffdjxypl3ktjsaum2nu9_large.jpg?v=1684182773",
    };
  } else if (params.id === "18") {
    productData = {
      id:"18",
      title: "SunBeam Pendant",
      title1: "Cao cấp",
      price: 76.5,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/tebzv8anb5lgfhukgvkh_large.jpg?v=1681234343",
    };
  } else if (params.id === "19") {
    productData = {
      id:"19",
      title: "Rechargeable Candle Lighter",
      title1: "Zippo Đa năng",
      price: 25.45,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/1e0716cc00caf63a2bfdd38be22c5b86e00b88ca_large.jpg?v=1624458311",
    };
  } else if (params.id === "20") {
    productData = {
      id:"20",
      title: "Flex Neck XL Utility Lighter",
      title1: "Zippo Đa năng",
      price: 24.45,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/fd6d32c8c09209df9eece941aba040516804e644_large.jpg?v=1624299978",
    };
  } else if (params.id === "21") {
    productData = {
      id:"21",
      title: "Flex Neck Utility Lighter",
      title1: "Zippo Đa năng",
      price: 21.95,
      img: "https://cdn.shopify.com/s/files/1/1295/7985/products/sejqat8evyqdxw56kzv2_large.jpg?v=1624300218",
    };
  }

  return (
    <div>
      <Header />

      <div className="details__container">
        {/* <img src={product.img} alt={product.title} fluid />
      <h3>{product.title}</h3> */}
        <p>{params.id}</p>
        {productData != null ? (
          <>
            <div className="details">
              <div className="big-img">
                <img src={productData.img} alt={productData.title} />
              </div>
              <div className="box__details">
                <div className="row__details">
                  <h2> {productData.title}</h2>
                  <span>{DollarUsd.format(productData.price)}</span>
                </div>
                <p>{productData.content}</p>
                <div className="thumb">{}</div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Details;
