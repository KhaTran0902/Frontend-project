import { useContext } from "react"
import { ZippoHighEnds } from "../../assets/fake-data/ListProducts"
import { AppConText } from "../../AppContext"
import "./ProductsHigh.css"
import { Link } from "react-router-dom"
export default function ProductsHigh () {
    const {handleAddProduct} =useContext(AppConText)
    return (
      <>
          <div className="products__banner">
            <img src="https://cdn.shopify.com/s/files/1/0471/9532/4576/t/30/assets/slide_3_image.jpg?v=67866639453558017301685209672"/>
          </div>
        <div className="products">
        {ZippoHighEnds.map((item) => (
          <div data-aos="fade-up" className="product__cards" key={item.id}>
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
            <div className="product-price">{item.price} $ </div>
            <div> <button className="product-add-button" onClick={() => handleAddProduct(item)}> Buy now</button> </div>
          </div>
        ))}
      </div>
      </>
    )
}