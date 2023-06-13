import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductsNor from "./ProductsNor";
import "./ListNor.css"
export default function ListNor() {
  return (
    <div>
      <Header />
      <div className="list__img">
        <img src="https://zippo.vn/wp-content/uploads/2022/07/Zippo-Lighters-Made-in-USA.png" alt="" />
      </div>
      <ProductsNor />
      <Footer />
    </div>
  );
}
