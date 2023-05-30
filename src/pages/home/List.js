import "./List.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function List() {
  return (
    <div className="list__container">
      <h1>Danh mục sản phẩm</h1>
      <div className="list__card">
        <Card style={{ width: "17rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/d9/3f/f5/d93ff5c4e9720979e5cf699e03fb2ebd.jpg"
            />
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/85/80/01/858001796b94cb9b6bde17358a452d2e.jpg"
            />
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/11/23/49/1123497541d86e80df5d9ea6ce4e3158.jpg"
            />
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
