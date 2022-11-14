import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import { CgAdd } from "react-icons/cg";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import CommandeController from "./CommandeController";
import CommandeDisplayer from "./CommandeDisplayer";

const CommandeCreate = () => {
  const navigate = useNavigate();
  const { post } = useFetch();
  const [newCommand, setNewCommand] = useState({
    client_name: "",
    client_phone: "",
    client_address: "",
    products: [],
    is_shipped: false,
  });

  const Checker = (list) => {
    setNewCommand({ ...newCommand, products: list });
    console.log(list);
  };

  const handleRemove = (id) => {
    newCommand.products.filter((item) => item.productId !== id);
  };

  const CommandSubmit = () => {
    post("orders", newCommand).then(() => navigate("/commandes_list"));
  };

  return (
    <Container className="my-5">
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
                  <Form.Control
                    type="text"
                    placeholder="Mohamed Alami"
                    value={newCommand.client_name}
                    onChange={(e) =>
                      setNewCommand({
                        ...newCommand,
                        client_name: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="clientNumber">
                  <Form.Label>Téléphone (*)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="+21260101010"
                    value={newCommand.client_address}
                    onChange={(e) =>
                      setNewCommand({
                        ...newCommand,
                        client_address: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="clientAdresse">
                  <Form.Label>Address (*)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Avenu 1,N°1 Casablanca"
                    value={newCommand.client_phone}
                    onChange={(e) =>
                      setNewCommand({
                        ...newCommand,
                        client_phone: e.target.value,
                      })
                    }
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
              <CommandeDisplayer
                items={newCommand.products}
                onRemove={handleRemove}
              />
              <CommandeController onCheck={Checker} />
              <Col className="offset-9 col-3  ">
                <Button onClick={CommandSubmit} className=" mt-3 w-100">
                  Sauvegarder
                </Button>
              </Col>
            </Row>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default CommandeCreate;
