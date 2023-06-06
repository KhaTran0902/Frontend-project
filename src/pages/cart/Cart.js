import { useContext } from "react";
import { AppConText } from "../../AppContext";
import "./Cart.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Cart() {
  const { cart, handleAddProduct, handleRemoveProduct, handleCartClear } =
    useContext(AppConText);
  const totalPrice = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <>
      <Header/>
    
    <div className="cart-items">
      <h2 className="cart-items-header">Cart items</h2>
      <div className="clear-cart">
        {cart.length >= 1 && (
          <button
            className="clear-cart-button"
            onClick={() => handleCartClear()}
          >
            Xóa toàn bộ
          </button>
        )}
      </div>
      {cart.length === 0 && <div className="cart-items-empty">No empty </div>}
      <div>
        {cart.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img className="cart-items-image" src={item.img} alt={item.id} />
            <div className="cart-items-name">{item.title} </div>
            <div className="cart-items-quantity">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * ${item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total price
        <div className="cart-items-total-price">${totalPrice}</div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
