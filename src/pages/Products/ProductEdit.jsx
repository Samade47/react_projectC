import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";

const ProductEdit = () => {
  return (
    <Container>
      <Row>
        <h1 className="header text-center my-4">
          <BiEdit />
          Modifier Produit
        </h1>
      </Row>
      <Row className="shadow_2 mt-5 py-4">
        <Col xs={12} md={4} className="mb-3">
          <div className="product_img ">
            <img
              src="https://dummyimage.com/700x500/ede8ed/1b1b1c.jpg"
              alt="dummy img"
              className="img"
            />
          </div>
        </Col>
        <Col xs={12} md={8}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Titre</Form.Label>
              <Form.Control id="disabledTextInput" placeholder="Pc Asus1" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="categorySelect">Categorie</Form.Label>
              <Form.Select id="categorySelect">
                <option>Ordinateur</option>
                <option>Smartphones</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Description</Form.Label>
              <Form.Control
                type="textaria"
                id="disabledFieldsetCheck"
                label="Can't check this"
              />
            </Form.Group>
            <Button type="submit">Sauvegarder</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductEdit;
