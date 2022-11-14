import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const CategorieDetails = () => {
  const { id } = useParams();
  const { get, list, remove } = useFetch();
  const [category, setCategory] = useState(null);
  const [products, setPrducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    get("categories", id).then((data) => {
      setCategory(data);
    });
  }, []);

  useEffect(() => {
    list("products").then((data) => {
      setPrducts(data);
    });
  }, []);

  const handleDelete = () => {
    remove("categories", id).then((data) => {
      navigate("/");
    });
  };

  const newList = products.filter(
    (product) => product.categoryId === category.id
  );

  return (
    <>
      <Container gap={3} fluid="md" className=" mt-5 p-3 d-grid gap-5 ">
        <Row className="row align-items-start gap-4">
          <Col md={7}>
            {category && (
              <h1 className="header ">
                Catégorie <span className="header_bold">{category.title}</span>{" "}
              </h1>
            )}
          </Col>
          <Col md={4} className="d-grid align-self-center gap-3">
            <Button variant="outline-secondary">Modifier</Button>
            <Button onClick={handleDelete} variant="outline-danger">
              Supprimer
            </Button>
          </Col>
        </Row>
        <Row>
          <table className="table">
            <thead className="table-dark ">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Prix</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {newList.map(
                (item) =>
                  item && (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <Link to={`/product_details/${item.id}`}>
                          {item.title}
                        </Link>
                      </td>
                      <td>{item.price}</td>
                      <td>{item.stock}</td>
                      <td>
                        <div className="action-icons d-flex gap-2 ">
                          <Button className="btn-light">
                            <BiEdit />
                          </Button>
                          <Button className="btn-light del-action">
                            <FaTrash />
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
    </>
  );
};

export default CategorieDetails;
