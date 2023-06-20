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
         
          <Link to="/cart" className="nav__item">
            <AiOutlineShoppingCart className="icon__nav" />
            <div className="lengthcart" style={{ marginBottom: "15px" }}>{cart?.length}</div>
          </Link>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}
