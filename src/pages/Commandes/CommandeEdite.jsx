import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import { CgAdd } from "react-icons/cg";

const CommandesEdite = () => {
  return (
    <Container>
      <Row className="mb-5 mt-3">
        <Col xs={12}>
          <h1 className="header ">
            <u>Commande</u> #123{" "}
          </h1>
        </Col>
      </Row>
      <Row>
        <Form className="d-flex gap-5 flex-wrap">
          <Col xs={12} md={4}>
            <Row>
              <h2 className="mb-3">Client</h2>
            </Row>
            <Row>
              <div className="client-info">
                <Form.Group className="mb-3" controlId="clientName">
                  <Form.Label>Nom Client (*)</Form.Label>
                  <Form.Control type="text" placeholder="Mohamed Alami" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="clientNumber">
                  <Form.Label>Téléphone (*)</Form.Label>
                  <Form.Control type="number" placeholder="+21260101010" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="clientAdresse">
                  <Form.Label>Téléphone (*)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Avenu 1,N°1 Casablanca"
                  />
                </Form.Group>
              </div>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <h2 className="mb-3">Produits</h2>
            </Row>
            <Row className="d-flex gap-3 flex-column">
              <div className="command_field command_mod d-flex align-items-end gap-2 ">
                <Form.Group className="mb-3">
                  <Form.Label>Categorie (*) </Form.Label>
                  <Form.Select aria-label="categorie">
                    <option value="1">Ordinateur</option>
                    <option value="2">SmartPhone</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicQuantité">
                  <Form.Label>Quantité (*)</Form.Label>
                  <Form.Control type="number" placeholder="2" min="0" />
                </Form.Group>
                <Button
                  variant="outline-dark"
                  className="mb-3 d-flex gap-1 align-items-center"
                >
                  <TiDeleteOutline />
                  Supprimer
                </Button>
              </div>
              <div className="command_field row  command_add d-flex align-items-end gap-2 ">
                <Form.Group className="mb-3 col-5">
                  <Form.Label>Categorie (*) </Form.Label>
                  <Form.Select aria-label="categorie">
                    <option value="1">Ordinateur</option>
                    <option value="2">SmartPhone</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3 col-4"
                  controlId="formBasicQuantité"
                >
                  <Form.Label>Quantité (*)</Form.Label>
                  <Form.Control type="number" min="0" />
                </Form.Group>
                <Button
                  variant="dark"
                  className="mb-3 col-2 d-1 d-flex gap-1 align-items-center"
                >
                  <CgAdd />
                  Ajouter
                </Button>
              </div>
            </Row>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default CommandesEdite;
