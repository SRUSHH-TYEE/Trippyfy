import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavAdmin = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ position: "sticky", top: 0, zIndex: 100 }}
      >
        <Link className="navbar-brand d-inline-block" to="/">
          {/* Trippify Logo */}
          {/* <h3 style={{ marginBottom: "0rem", zIndex: "7" }}> */}
          <img
            src={process.env.PUBLIC_URL + "logo_no_bg.svg"}
            alt="Trippify"
            style={{ width: "64%", height: "8rem", marginLeft: "1rem" }}
          />
          {/* </h3> */}
        </Link>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="light"
          style={{
            backgroundColor: "rgb(167 177 184 / 45%)",
            width: "80%",
            marginRight: "2rem",
            marginBottom: "2rem",
          }}
        >
          <Container>
            <Navbar.Brand href="#home">Admin Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                
                <Nav.Link
                  as={Link}
                  to="/admin"
                  style={{ textDecoration: "none" }}
                >
                  Organizations
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/addOrg"
                  style={{ textDecoration: "none" }}
                >
                  Add Organization
                </Nav.Link>
              </Nav>
              <Nav>
                <button
                  className="btn"
                  style={{
                    width: "6rem",
                    position: "relative",
                    right: "2rem",
                    backgroundColor: "#01ff2c",
                    color: "#2a314d",
                    border: "2px solid #2a314d",
                  }}
                >
                  Logout
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavAdmin;
