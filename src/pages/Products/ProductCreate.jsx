import React, { useRef, useState, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ProductCreate = () => {
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef();
  const navigate = useNavigate();
  const { post, list } = useFetch();
  const [values, setValues] = useState({
    title: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    thumbnail: "",
  });

  useEffect(() => {
    list("categories").then((data) => setCategories(data));
  });

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post("products", values).then((data) => navigate("/products_list"));
    console.log(values.thumbnail);
  };

  return (
    <Container gap={3} fluid="md" className=" mt-5 mb-3 p-3 d-grid gap-5">
      <div className="create_product p-5 ">
        <Form className="gap-5">
          <Row>
            {/* Images Column */}
            <Col xs={12} md={4}>
              <Form.Group className="product-img-wraper">
                {preview ? (
                  <img
                    src={preview}
                    style={{ objectFit: "cover" }}
                    alt="bg"
                    onClick={() => setImage(null)}
                  />
                ) : (
                  <button
                    className="image_select"
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                  >
                    Add Image{" "}
                  </button>
                )}
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  accept="image/*"
                  value={values.thumbnail}
                  onChange={(e) => {
                    setValues({ ...values, thumbnail: e.target.files[0] });
                    const file = e.target.files[0];
                    if (file && file.type.substring(0, 5) === "image") {
                      setImage(file);
                    } else {
                      setImage(null);
                    }
                  }}
                />
              </Form.Group>
            </Col>
            {/* Product infos Col */}
            <Col xs={12} md={8}>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3  " controlId="formBasicEmail">
                    <Form.Label>Titre (*)</Form.Label>
                    <Form.Control
                      value={values.title}
                      onChange={(e) =>
                        setValues({ ...values, title: e.target.value })
                      }
                      type="text"
                      placeholder="Saisir le Titre du produit"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Prix (*)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Saisir le prix"
                      min={1}
                      max={9999}
                      value={values.price}
                      onChange={(e) =>
                        setValues({ ...values, price: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Stock (*)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Saisir la quantité du stock"
                      min={0}
                      value={values.stock}
                      onChange={(e) =>
                        setValues({ ...values, stock: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Categorie (*)</Form.Label>
                    <Form.Select
                      value={values.category}
                      onChange={(e) =>
                        setValues({ ...values, category: e.target.value })
                      }
                      required
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.color}>
                          {" "}
                          {category.title}{" "}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* Product Description Sectioon */}
          <Row className="mt-3">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Saisir la Description"
                rows={4}
                value={values.description}
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <Row className="mx-1" xs={2} md={6}>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit{" "}
            </Button>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default ProductCreate;
