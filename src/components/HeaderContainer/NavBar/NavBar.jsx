import React, { useContext } from "react";
import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import Logo from './Logo/Logo';
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

function NavBar() {
  //
  const {items} = useContext(CartContext);
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <NavLink to="/"><Logo/></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar__nav">
              <NavLink className="navbar__nav__navlink menuLaterales" activeClassName="navbar__nav__navlink--active" to="/inicio">Inicio</NavLink>
              <NavDropdown title="Servicios" id="basic-nav-dropdown" className="navbar__nav__navlink">
                <NavDropdown.Item>
                  <NavLink className="navbar__nav__navlink__subMenuBar" to="/catalogo/1">Sitios Web</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink className="navbar__nav__navlink__subMenuBar" to="/catalogo/2">Comercio electrónico</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink className="navbar__nav__navlink__subMenuBar" to="/catalogo/3">Aplicaciones Web</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink className="navbar__nav__navlink__subMenuBar" to="/catalogo/4">Aplicaciones Móviles</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="navbar__nav__navlink menuLaterales" activeClassName="navbar__nav__navlink--active" to="/contacto">Contáctenos</NavLink>
            </Nav>
          </Navbar.Collapse>
          {items.length?<NavLink to="/carrito"><CartWidget/></NavLink>:<></>}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
