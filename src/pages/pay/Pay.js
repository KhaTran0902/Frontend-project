import momo from "../../assets/images/momo.jpg";
import acb from "../../assets/images/acb.jpg";
import "./Pay.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
export default function Pay() {
  return (
    <>
      <Header />
      <div className="pay__container">
        <div>
          <h1>Hình thức thanh toán</h1>
        </div>
        <div>
          <p>
            {" "}
            Quý khách vui lòng thanh toán qua 1 trong 2 hình thức dưới đây:
          </p>
        </div>

        <div className="pay__img">
          <div>
            <h3>Momo</h3>
            <img src={momo} className="momo__img" />
          </div>
          <div>
            <h3>Thanh toán qua ngân hàng ACB</h3>
            <img src={acb} />
          </div>
        </div>
        <div className="pay__content">
            <div>
                <p> Sau khi thanh toán xong quý khách vui lòng chụp và gửi hóa đơn qua zalo dưới đây để shop check </p>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
