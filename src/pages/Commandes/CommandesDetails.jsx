import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiBackwardTime } from "react-icons/gi";
import { BsCheck2Circle } from "react-icons/bs";

import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";

const CommandesDetails = () => {
  const [command, setCommand] = useState();
  const { id } = useParams();
  const { get } = useFetch();

  useEffect(() => {
    get("orders", id).then((data) => setCommand(data));
  }, []);

  return (
    <Container gap={3} fluid="md" className=" mt-5 p-3 d-grid gap-5">
      {command && (
        <>
          <Row>
            <h1 className="header ">
              <u>Commande</u> #{command.id}{" "}
            </h1>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <div className="command-details-info border rounded-2 border-2 d-flex flex-xs-row flex-md-column justify-content-md-center flex-wrap px-xs-2 p-3  gap-1  ">
                <div className="command-info">
                  <b>Statut</b>
                  <p className="text-warning">
                    {command.is_shipped ? (
                      <span className="text-success">
                        <BsCheck2Circle /> Traitée
                      </span>
                    ) : (
                      <span className="text-warning">
                        <GiBackwardTime /> En attente
                      </span>
                    )}
                  </p>
                </div>
                <hr />
                <div className="command-info">
                  <b>Prix Total</b>
                  <p>3000 MAD</p>
                </div>
                <hr />

                <div className="command-info">
                  <b>Nombre de produits</b>
                  <p>{command.products.length} Produits</p>
                </div>
                <hr />

                <div className="command-info">
                  <b>Client</b>
                  <p>
                    {command.client_name} <br />
                    {command.client_phone}
                  </p>
                </div>
                <hr />

                <div className="command-info">
                  <b>Adress Livraison</b>
                  <p>{command.client_address}</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={9}>
              <Row>
                <Col xs={12}>
                  <div className="command-details-wraper d-flex flex-column gap-3">
                    <div className="command d-flex align-items-center shadow">
                      <div className="command-number">2</div>
                      <div className="command-details d-flex justify-content-center align-items-center gap-2">
                        <div className="command-img">
                          <img
                            src="https://dummyimage.com/700x500/ede8ed/1b1b1c.jpg"
                            alt="dummy img"
                            className="img"
                            style={{ width: "200px" }}
                          />
                        </div>
                        <div className="product_infos px-2 py-3">
                          <h4 className="mb-3">Pc ASUS 1</h4>
                          <div className="product_info_container d-flex align-items-start justify-content-between gap-1">
                            <div className="product_info text-center">
                              <h6>
                                <b>Prix</b>
                              </h6>
                              <span>120 DH</span>
                            </div>
                            <hr className="align-self-center mx-1 border-primary border-3" />
                            <div className="product_info text-center">
                              <h6>
                                <b>Stock</b>
                              </h6>
                              <span>20 unité</span>
                            </div>
                            <hr className="align-self-center mx-1 border-primary border-2" />
                            <div className="product_info text-center">
                              <h6>
                                <b>Category</b>
                              </h6>
                              <span>Ordinateur</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="action-wraper d-flex gap-2 mt-3">
                    <Button variant="outline-success" className="p-2">
                      Traité
                    </Button>
                    <Button variant="outline-dark">Annulée</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default CommandesDetails;
