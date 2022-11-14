import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IconContext } from "react-icons";
import { BsList, BsPersonCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <IconContext.Provider value={{ size: "1.2em" }}>
        <Container fluid>
          <div className="navbar p-4 border-bottom">
            <Button size="sm" variant="outline-dark" onClick={handleShow}>
              <BsList />
            </Button>

            <div className="user_action d-flex align-items-center ">
              <h4 className="me-4 mb-0 fs-5">Ali alami</h4>
              <BsPersonCircle size="1.7em" />
            </div>
          </div>
        </Container>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="brand">Brand.</Offcanvas.Title>
          </Offcanvas.Header>
          <hr />
          <Offcanvas.Body>
            <div className="list-group border-0 mt-5">
              <NavLink to="/">
                <Button
                  type="button"
                  className="list-group-item list-group-item-action border-0"
                  aria-current="true"
                  onClick={handleClose}
                >
                  Catégories
                </Button>
              </NavLink>
              <NavLink to="/products_list">
                <Button
                  type="button"
                  className="list-group-item list-group-item-action border-0"
                  onClick={handleClose}
                >
                  Produits
                </Button>
              </NavLink>
              <NavLink to="/commandes_list">
                <Button
                  type="button"
                  className="list-group-item list-group-item-action border-0"
                  onClick={handleClose}
                >
                  Commandes
                </Button>
              </NavLink>

              <Button
                type="button"
                className="list-group-item list-group-item-action border-0 "
                onClick={handleClose}
              >
                Utilisateurs
              </Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
