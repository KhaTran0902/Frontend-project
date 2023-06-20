import { createContext, useEffect, useState } from "react";
import { ZippoAll, ZippoHighEnds } from "./assets/fake-data/ListProducts";
import AOS from "aos";

export const AppConText = createContext({});
export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] =  useState()
  const handleAddProduct = (product) => {
    let ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      const newCartItems = cart.map((item) =>
        item.id === product.id
          ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
          : item
      );
      setCart(newCartItems);
      localStorage.setItem("cart", JSON.stringify(newCartItems));

      // localStorage.setItem(
      //   "cartItem",
      //   JSON.stringify({ ...ProductExist, quantity: ProductExist.quantity + 1 })
      // );
    } else {
      const newCartItems = [...cart, { ...product, quantity: 1 }];
      setCart(newCartItems);
      localStorage.setItem("cart", JSON.stringify(newCartItems));
      // localStorage.setItem(
      //   "cartItem",
      //   JSON.stringify([...cart, { ...product, quantity: 1 }])
      // );
    }
  };

 

  const handleRemoveProduct = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      const newCartItems = cart.filter((item) => item.id !== product.id);
      setCart(newCartItems);
      localStorage.setItem("cart", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cart.map((item) =>
        item.id === product.id
          ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
          : item
      );
      setCart(newCartItems);
      localStorage.setItem("cart", JSON.stringify(newCartItems));
    }
  };
  useEffect(() => {
    
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  });
  const handleCartClear = () => {
    const newCartItems = [];
    setCart(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };
  const DollarUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    setData(ZippoAll);
    setCollection([...new Set(ZippoAll.map((item) => item.title1))]);
  }, []);

  const gallery__filter = (itemData) => {
    const filterData = ZippoAll.filter((item) => item.title1 == itemData);
    setData(filterData);
  };
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((price, item) => {
        return price + (item.price * item.count);
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (product) => {
    cart.forEach((item) => {
      if (item._id === product._id) {
        item.count === 1 ? (item.count = 1) : item.count -= 1;
      }
    });
    setCart([...cart]);
  };

  const increase = (product) => {
    cart.forEach((item) => {
      if (item._id === product._id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

 
  return (
    <div>
      <AppConText.Provider
        value={{
          cart,
          handleAddProduct,
          handleRemoveProduct,
          handleCartClear,
          DollarUsd,
          gallery__filter,
          collection,
          setData,
          data,
          reduction,
          increase,
          total,
        }}
      >
        {children}
      </AppConText.Provider>
    </div>
  );
};
