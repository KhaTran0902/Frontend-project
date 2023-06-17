import { useContext } from "react"
import { ZippoHighEnds, ZippoPk } from "../../assets/fake-data/ListProducts"
import { AppConText } from "../../AppContext"
import "./ProductsHigh.css"
import { Link } from "react-router-dom"
export default function ProductsHigh () {
    const {handleAddProduct} =useContext(AppConText)
    return (
        <div className="products">
        {ZippoPk.map((item) => (
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
    )
}