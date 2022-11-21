import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { actionLogoutAsync } from "../../redux/actions/userActions";
import  './navigationBar.css'



const Navigationbar = ({ isAuthentication }) => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(actionLogoutAsync());
  };
  return (
    <Navbar bg="light" expand="md" className="mb-3">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${"md"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
          placement="end"
        >
          <Offcanvas.Body>
            {isAuthentication ? (
              <Nav className="justify-content-end flex-grow-1 pe-3 gap-3 m-3">
                <NavLink to="/home" className={({isActive})=>isActive?'navLink navLink--active': 'navLink ' }>Home</NavLink>
                <button onClick={logOut}>Logout</button>
              </Nav>
            ) : (
              <Nav className="justify-content-end flex-grow-1 pe-3 gap-3 m-3">
                <NavLink to="/" className={({isActive})=>isActive?'navLink navLink--active': 'navLink ' }>Login</NavLink>
                <NavLink to="/register" className={({isActive})=>isActive?'navLink navLink--active': 'navLink ' }>Register</NavLink>
              </Nav>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
