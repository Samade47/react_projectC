import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import CategoryColor from "./CategoryColor";

const ProductsList = () => {
  const { list, remove, loading } = useFetch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    list("products").then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    remove("products", id).then((data) => {
      list("products").then((data) => setProducts(data));
    });
  };

  return (
    <>
      <IconContext.Provider value={{ size: "1.2em" }}>
        <Container gap={3} fluid="md" className=" mt-5 p-3 d-grid gap-5">
          <Row className="row align-items-start">
            <Col md={8}>
              <h1 className="header ">List des produits</h1>
            </Col>
            <Col md={4} className="align-self-center">
              <Link className="btn btn-primary" to="/product_create">
                Nouvell Produit
              </Link>
            </Col>
          </Row>
          <Row>
            <table className="table">
              <thead className="table-dark ">
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Titre</th>
                  <th>Category</th>
                  <th>Prix</th>
                  <th>Stock</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading && <Loading />}
                {products.map(
                  (product) =>
                    product && (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>
                          <div className="img-wrap ">
                            <img
                              src={`http://localhost:5000${product.thumbnail}`}
                              alt="product"
                              className="img"
                            />
                          </div>
                        </td>
                        <td>
                          <Link to={`/product_details/${product.id}`}>
                            {product.title}{" "}
                          </Link>
                        </td>

                        <td
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CategoryColor categoryId={product.categoryId} />
                        </td>
                        <td>{product.price} </td>
                        <td>{product.stock} </td>
                        <td>
                          <div className="action-icons d-flex align-items-center gap-2 ">
                            <Link to="/product_edit" className="btn-light">
                              <BiEdit />
                            </Link>
                            <Button
                              onClick={() => handleDelete(product.id)}
                              className="btn-light del-action"
                            >
                              <FaTrash className="icon" />
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

export default ProductsList;
