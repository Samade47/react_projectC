import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BiEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";

const CategorieList = () => {
  const [categories, setCategories] = useState([]);
  const { list, remove, loading } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    list("categories").then((data) => setCategories(data));
  }, []);

  const handleDelete = (id) => {
    remove("categories", id).then((data) => {
      list("categories").then((data) => setCategories(data));
    });
  };

  return (
    <>
      <IconContext.Provider value={{ size: "1em" }}>
        <Container gap={3} fluid="md" className=" mt-5 p-3 d-grid gap-5">
          <Row className="row align-items-start">
            <Col md={8}>
              <h1 className="header ">Catégories des produits</h1>
            </Col>
            <Col md={4} className="align-self-center">
              <Link className="btn btn-primary" to="/categorie_nouvelle">
                Nouvell Catégorie
              </Link>
            </Col>
          </Row>
          <Row>
            <table className="table text-center">
              <thead className="table-dark ">
                <tr>
                  <th>Categorie</th>
                  <th>Color</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading && <Loading />}
                {categories.map(
                  (category) =>
                    category && (
                      <tr key={category.id}>
                        <td>
                          <Link to={`/categorie_details/${category.id}`}>
                            {category.title}
                          </Link>
                        </td>
                        <td
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            className=".color-box"
                            style={{
                              backgroundColor: `${category.color}`,
                              height: "50px",
                              width: "50%",
                              padding: "0 1%",
                              borderRadius: "100vmax",
                            }}
                          ></div>
                        </td>
                        <td>
                          <div className="action-icons justify-content-center d-flex align-items-center gap-3">
                            <Link to="/categorie_edit" className="btn-light">
                              <BiEdit />
                              Modifier
                            </Link>

                            <Button
                              onClick={() => handleDelete(category.id)}
                              className="btn-light del-action"
                            >
                              <FaTrash />
                              Supprimer
                            </Button>
                          </div>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </Row>
        </Container>
      </IconContext.Provider>
    </>
  );
};

export default CategorieList;
