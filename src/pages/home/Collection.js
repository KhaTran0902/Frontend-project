import "./Collection.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Collection() {
  return (
    <>
      <div className="collection__content">
        <h1>Bộ sưu tập</h1>
        <p>Mùa xuân 2023</p>
      </div>

      <div className="collection__cards">
        <Card data-aos="fade-up-right" className="collection__card" style={{ width: "18rem" }}>
          <Card.Img
            
            variant="top"
            src="https://cdn.shopify.com/s/files/1/1295/7985/t/195/assets/square_promo_5_image.jpg?v=166251403594445428591685968566"
          />
        </Card>
        <Card data-aos="fade-up-left" className="collection__card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.shopify.com/s/files/1/1295/7985/t/195/assets/square_promo_4_image.jpg?v=46344465770202743711685968566"
          />
        </Card>
      </div>
    </>
  );
}
