import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";

const CategorieEdit = () => {
  return (
    <Container gap={3} fluid="md" className=" mt-5 p-3 d-grid gap-5">
      <Row>
        <h1 className="header text-center">
          <BiEdit />
          Modifier Catégorie
        </h1>
      </Row>
      <Row>
        <div className="edit_section slide p-4">
          <Form>
            <Form.Group className="mb-3" controlId="formGroupCategory">
              <Form.Label>Categorie</Form.Label>
              <Form.Control type="text" placeholder="Category" />
            </Form.Group>
            <div className="form_wrapper d-flex justify-content-between align-items-center ">
              <Form.Group className="mb-3" controlId="formGroupColor">
                <Form.Label>Couleur</Form.Label>
                <Form.Control type="color" />
              </Form.Group>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default CategorieEdit;
