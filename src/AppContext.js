import { createContext, useEffect, useState } from "react";
import { ZippoAll } from "./assets/fake-data/ListProducts";
export const AppConText = createContext({});
export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const response = await ZippoAll.products.list();
    setProducts ((response && response.data) || [])
  }
  const handleAddProduct = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCartClear = () => {
    setCart([]);
  };
  const DollarUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    setData(ZippoAll);
    setCollection([... new Set(ZippoAll.map((item) => item.title1))]);
    
  }, []);

  const gallery__filter = (itemData) => {
    const filterData = ZippoAll.filter((item) => item.title1 == itemData);
    setData(filterData);
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
          data
        }}
      >
        {children}
      </AppConText.Provider>
    </div>
  );
};
