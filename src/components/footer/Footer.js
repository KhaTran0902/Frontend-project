import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="col">
        <h4>Liên hệ</h4>
        <p>
          <strong>Địa chỉ:</strong> 72/13 Võ Thị Sáu tỉnh BR-VT{" "}
        </p>
        <p>
          <strong>Số điện thoại: </strong> 039.5678.343{" "}
        </p>
        <p>
          <strong>Giờ mở cửa:</strong> 9:00 - 18:00. Thứ 2 - Thứ 7{" "}
        </p>
        <div className="footer__follow">
          <h4> Theo dõi chúng tôi</h4>
          <div className="icon">
            <Link
              className="footer__icon"
              to="https://www.facebook.com/profile.php?id=100009632739463"
            >
              <BsFacebook className="icon__face" />
            </Link>
            <AiFillInstagram className="icon__ins" />
          </div>
        </div>
      </div>
      <div className="col">
        <h4 className="zippo__content" > Về chúng tôi</h4>
        <div className="link__zippo">
        <Link to=" " className="zippo__link">
          Zippo phổ thông
        </Link>
        <Link to=" " className="zippo__link">
          Zippo cao cấp
        </Link>
        <Link to=" " className="zippo__link">
         Phụ kiện Zippo 
        </Link>
        </div>
       
      </div>
      <div className="col">
        <h4 className="bank__content"> Hình thức thanh toán </h4>
        <div className="pay">
          <div className="momo">
            <p> Thanh toán MOMO</p>
            <img
              className="img__momo"
              src="https://file.hstatic.net/1000273026/article/momo_logo_ee7f0396e57f4820a504f7ab63e9eade_1024x1024.png"
            />
          </div>
          <div className="bank">
            <p> Thanh toán Banking</p>
            <img
              className="img__bank"
              src="https://play-lh.googleusercontent.com/knIdLBzE-ngS8Fhim_0FxH56vWhXaQmuLcpMdAcoFY_790hd3t4_XQAlyEWUnYJRyWFP"
            />
          </div>
        </div>
      </div>
    </div>
  );
}