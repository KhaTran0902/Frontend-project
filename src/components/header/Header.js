import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";
import { useContext } from "react";
import { AppConText } from "../../AppContext";
export default function Header() {
  const {cart} = useContext(AppConText)
  return (
    // <div className="header">
    //   <Container>
    //     <div className="navigation">
    //       <div className="logo">
    //         <img src={logo} className="d-flex gap-2 align-items-center" />
    //       </div>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <div className="nav__menu">
    //         <div className="nav__list">
    //           <Link to="/" className="nav__item">Home</Link>
    //           <Link to="/products" className="nav__item" >Products</Link>
    //           <Link to="/contact" className="nav__item">Contact</Link>
    //         </div>
    //       </div>
    //       <div className="nav__right d-flex align-items-center gap-5">
    //         <button className="btn ">
    //           <Link to="" className="d-flex gap-2 align-items-center">
    //           Cart
    //             <span>
    //               <AiOutlineShoppingCart />{" "}
    //             </span>

    //           </Link>
    //         </button>
    //         <span className="mobile__menu">
    //           <Link to="">
    //             <AiOutlineMenu />
    //           </Link>
    //         </span>
    //       </div>
    //     </div>
    //   </Container>
    // </div>
    <Navbar bg="light" expand="lg" className="navbar__container">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand href="#home" className="nav__left">
            <img src={logo} className="imgs" />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle"  />
        <Navbar.Collapse id="basic-navbar-nav" className="toggle__collapse">
          <Nav className="m-auto my-2 my-lg-0 nav_links ">
            <Link to="/" className="nav__item">
              <Nav.Link href="#home" >Home</Nav.Link>
            </Link>
            <Link to="/products" className="nav__item">
              <Nav.Link href="#link">Products</Nav.Link>
            </Link>
            <Link to="/contact" className="nav__item">
              <Nav.Link href="#link">Contact</Nav.Link>
            </Link>
            <Link to="/about" className="nav__item">
              <Nav.Link href="#link">About</Nav.Link>
            </Link>
            
          </Nav>
          <div class="container-input">
            <input type="text" placeholder="Search" name="text" class="input" />
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <Link to="/cart" className="nav__item">
            <AiOutlineShoppingCart className="icon" />
            <div style={{ marginBottom: "15px" }}>{cart.length}</div>
          </Link>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}
