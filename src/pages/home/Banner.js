import "animate.css";
import "./Banner.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="home">
      <Container>
        <Row className="row">
          <Col lg="6" md="6" className="home__contens">
            <div className="home__content">
              <h1 class="animate__animated animate__fadeInDown">
                Zippo-
                <span>Khói Lửa</span>
              </h1>
              <h2 class="animate__animated animate__fadeInDown">
                Chuyên bán về các dòng zippo chính hãng
              </h2>

              <p class="animate__animated animate__fadeInDown">
                Chỉ bán nhằm mục đích trưng bày và sưu tầm
              </p>

              <div d-flex align-items-center gap-4 className="homes__btn">
                <button className="home__btn" d-flex align-items-center gap-2>
                  <Link to="/products"> Xem thêm nhiều sản phẩm </Link>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
