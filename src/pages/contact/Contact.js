import { Col } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./Contact.css"
export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact__container">
        <h1> Contact us </h1>
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.2187697766976!2d107.20101111162002!3d10.483412964484847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175756a9dbf273f%3A0x578dfad887308f91!2zNzIvMTEvMiBWw7UgVGjhu4sgU8OhdSwgVFQuIExvbmcgxJBp4buBbiwgTG9uZyDEkGnhu4FuLCBCw6AgUuG7i2EgLSBWxaluZyBUw6B1LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1686309667856!5m2!1svi!2s"
            className="map"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact__lh">
            <div className="contact__contain">
                <form className="contact__form">
                    <h1>Liên hệ</h1>
                    <label>Họ và tên: </label>
                    <input placeholder="  Nhập Họ và tên"/>

                    <label>SĐT: </label>
                    <input placeholder=" Nhập số điện thoại"/>

                    <label>Email: </label>
                    <input placeholder=" Email"/>

                    <label>Tin nhắn: </label>
                    <textarea className="message" placeholder=" Nhập tin nhắn"/>

                    <button className="contact__btn"> Gửi </button>
                </form>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
