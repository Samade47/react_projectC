import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { get, remove } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    get("products", id).then((data) => setProduct(data));
  }, []);

  const handleDelete = () => {
    remove("products", id).then((data) => console.log(data));
    navigate("/products_list");
    console.log("item deleted successfuly");
  };

  return (
    <Container gap={3} fluid="md" className=" mt-5 p-3 d-grid gap-2">
      <Row className="row align-items-start  mx-4 ">
        <Col className="d-flex align-items-center justify-content-end gap-3">
          <Link to="/product_edit">
            <Button variant="outline-primary">Modifier</Button>
          </Link>
          <Button onClick={handleDelete} variant="outline-danger">
            Supprimer
          </Button>
        </Col>
      </Row>
      {product && (
        <Row className="product_details mx-4 my-1 py-3 px-2 shadow_3">
          <Col xs={12} md={5} className="mb-3">
            <div className="product_img ">
              <img
                src={`http://localhost:5000${product.thumbnail}`}
                alt="dummy img"
                className="img"
              />
            </div>
          </Col>
          <Col xs={12} md={7}>
            <div className="product_body">
              <h2>{product.title} </h2>
              <p className="py-4">{product.description} </p>
              <div className="product_infos w-100 d-flex align-items-start justify-content-between gap-1">
                <div className="product_info text-center">
                  <h4>
                    <b>Prix</b>
                  </h4>
                  <span>{product.price} </span>
                </div>
                <hr className="align-self-center mx-1 border-primary border-3" />
                <div className="product_info text-center">
                  <h4>
                    <b>Stock</b>
                  </h4>
                  <span>{product.stock}</span>
                </div>
                <hr className="align-self-center mx-1 border-primary border-2" />
                <div className="product_info text-center">
                  <h4>
                    <b>Category</b>
                  </h4>
                  <span>Ordinateur</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetails;
