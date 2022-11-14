import React, { useState } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { CgAddR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const CategoryCreate = () => {
  const navigate = useNavigate();
  const { post } = useFetch();
  const [values, setValues] = useState({
    title: "",
    slug: "",
    color: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("categories", values).then((data) => navigate("/"));
    console.log(values);
  };

  return (
    <Container gap={3} fluid="md" className=" mt-5 p-3 d-grid gap-5">
      <Row>
        <h1 className="header text-center">
          <CgAddR />
          Nouvelle Catégorie
        </h1>
      </Row>
      <Row>
        <div className="edit_section slide p-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupCategory">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category"
                value={values.title}
                onChange={(e) =>
                  setValues({ ...values, title: e.target.value })
                }
              />
            </Form.Group>
            <div className="form_wrapper d-flex justify-content-between align-items-center ">
              <Form.Group className="mb-3" controlId="formGroupColor">
                <Form.Label>Couleur</Form.Label>
                <Form.Control
                  type="color"
                  value={values.color}
                  onChange={(e) =>
                    setValues({ ...values, color: e.target.value })
                  }
                />
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

export default CategoryCreate;
