import "./List.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import list from "../../assets/images/list.png"
export default function List() {
  return (
    <div  className="list__container">
      <h1 className="card__container">Danh mục sản phẩm</h1>
      <div  className="list__card">
        <Card className="card" style={{ width: "17rem" }}>
          <Card.Body>
            <Card.Title className="card__title">Zippo Phổ Thông</Card.Title>
            <Card.Img
              className="card__img_1"
              variant="top"
              src="https://i.pinimg.com/564x/d9/3f/f5/d93ff5c4e9720979e5cf699e03fb2ebd.jpg"
            />
            <Link to="/products/zipponor">
              <Button className="btn__card" variant="primary">
                Xem chi tiết
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="card__title">Zippo Cao Cấp</Card.Title>

            <Card.Img
              className="card__img_1"
              variant="top"
              src="https://i.pinimg.com/564x/85/80/01/858001796b94cb9b6bde17358a452d2e.jpg"
            />
            <Link to="/products/zippohighends">
              <Button className="btn__card" variant="primary">
                Xem chi tiết
              </Button>
            </Link>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="card__title"> Zippo đa năng </Card.Title>

            <Card.Img
              className="card__img_1"
              variant="top"
              src={list}
            />
            <Link to="/products/accesories">
              <Button className="btn__card" variant="primary">
                Xem chi tiết
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
