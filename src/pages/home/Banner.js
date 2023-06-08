import "animate.css";
import "./Banner.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import Carousel from 'react-bootstrap/Carousel';

export default function Banner() {
  // return (
  //   <div className="home">

  //     <Container>
  //       <Row className="row">
  //         <Col lg="6" md="6" className="home__contens">
  //           <div className="home__content">
  //             <h1 class="animate__animated animate__fadeInDown">
  //               Zippo-
  //               <span>Khói Lửa</span>
  //             </h1>
  //             <h2 class="animate__animated animate__fadeInDown">
  //               Chuyên bán về các dòng zippo chính hãng
  //             </h2>

  //             <p class="animate__animated animate__fadeInDown">
  //               Chỉ bán nhằm mục đích trưng bày và sưu tầm
  //             </p>


  //           </div>
  //           <div d-flex align-items-center gap-4 className="homes__btn">
  //               <button className="home__btn" d-flex align-items-center gap-2>
  //                 <Link to="/products"> Xem thêm nhiều sản phẩm </Link>
  //               </button>
  //             </div>
  //         </Col>
  //       </Row>
  //     </Container>
  //   </div>
  // );


  // export default class SimpleSlider extends Component {

  return (

    <Carousel fade-in >

      <Carousel.Item interval={500} className="banner__item">



        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/1295/7985/t/195/assets/slide_3_image.jpg?v=44887156970483331431685026280"
          alt="First slide"
        />

      </Carousel.Item >
      <Carousel.Item className="banner__item">
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/1295/7985/collections/pipe.jpg?v=1667419613"
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item className="banner__item">
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/1295/7985/collections/butane-inserts_2030x648_collection-header_2030x648.jpg?v=1666622305"
          alt="Third slide"
        />


      </Carousel.Item>

    </Carousel>
  )
}