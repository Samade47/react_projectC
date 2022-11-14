import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { CgAdd } from "react-icons/cg";
import useFetch from "../../hooks/useFetch";

const CommandeController = ({ onCheck }) => {
  const [products, setProducts] = useState([]);
  const [command, setCommand] = useState([]);
  const productId = useRef(null);
  const quantity = useRef(null);
  //   const [values, , setValues] = useState({
  //     productId: "",
  //     quantity: "",
  //   });
  const { list } = useFetch();

  useEffect(() => {
    list("products").then((data) => setProducts(data));
  }, []);

  const onAdd = () => {
    const values = {
      productId: productId.current.value,
      quantity: quantity.current.value,
    };
    setCommand([...command, values]);
    onCheck(command);
  };

  return (
    <div className="command_field row  command_add d-flex align-items-end gap-2 ">
      <Form.Group className="mb-3 col-5">
        <Form.Label>Product (*) </Form.Label>
        <Form.Select aria-label="categorie" ref={productId}>
          {products &&
            products.map((product) => {
              return (
                <option key={product.id} value={product.title}>
                  {product.title}
                </option>
              );
            })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 col-4" controlId="formBasicQuantité">
        <Form.Label>Quantité (*)</Form.Label>
        <Form.Control type="number" min="0" ref={quantity} />
      </Form.Group>
      <Button
        onClick={onAdd}
        variant="dark"
        className="mb-3 col-2 d-1 d-flex gap-1 align-items-center"
      >
        <CgAdd />
        Ajouter
      </Button>
    </div>
  );
};

export default CommandeController;
