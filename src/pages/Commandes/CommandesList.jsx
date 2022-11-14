import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BiEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import useFetch from "../../hooks/useFetch";

const CommandesList = () => {
  const [commandes, setCommandes] = useState([]);
  const { list, remove } = useFetch();

  useEffect(() => {
    list("orders").then((data) => setCommandes(data));
  }, []);

  const handleRemove = (id) => {
    remove("orders", id).then((data) =>
      list("orders").then((data) => setCommandes(data))
    );
  };

  return (
    <>
      <IconContext.Provider value={{ size: "1.2em" }}>
        <Container gap={3} fluid="md" className=" mt-5 p-3 d-grid gap-5">
          <Row className="row align-items-start">
            <Col md={8}>
              <h1 className="header ">Liste de Commandes</h1>
            </Col>
            <Col md={4} className="align-self-center">
              <Link className="btn btn-primary" to="/commandes_create">
                Nouvell Commande
              </Link>
            </Col>
          </Row>
          <Row>
            <table className="table text-center">
              <thead className="table-dark ">
                <tr>
                  <th>Numéro</th>
                  <th>Nombre Produits</th>
                  <th>Prix Total</th>
                  <th>Statut</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* traitée */}
                {commandes &&
                  commandes.map((command) => {
                    return (
                      <tr key={command.id}>
                        <td>
                          <Link to={`/commandes_details/${command.id}`}>
                            {command.id}{" "}
                          </Link>
                        </td>
                        <td>{command.products.length} Produits</td>

                        <td>MAD</td>
                        <td>
                          {command.is_shipped ? (
                            <span className="text-success">
                              <BsCheck2Circle /> Traitée
                            </span>
                          ) : (
                            <span className="text-warning">
                              <GiBackwardTime /> En attente
                            </span>
                          )}
                        </td>
                        <td>
                          <div className="action-icons justify-content-center d-flex align-items-center gap-3">
                            <Link to="/commandes_edite">
                              <BiEdit />
                              Modifier
                            </Link>
                            <Link
                              onClick={() => handleRemove(command.id)}
                              variant="danger"
                              className="text-danger"
                            >
                              <FaTrash />
                              Supprimer
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Row>
        </Container>
      </IconContext.Provider>
    </>
  );
};

export default CommandesList;
