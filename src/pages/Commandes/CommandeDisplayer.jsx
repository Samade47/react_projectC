import React from "react";
import { Form, Button } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import { CgAdd } from "react-icons/cg";

const CommandeDisplayer = ({ items, onRemove }) => {
  return (
    <div className="command_field command_mod w-100 d-flex flex-column align-items-end gap-2 ">
      {items &&
        items.map((item) => {
          return (
            <div
              key={item.productId}
              className="w-100 d-flex align-items-end justify-content-between gap-1"
            >
              <Form.Group className="mb-3">
                {/* <Form.Label>Categorie (*) </Form.Label> */}
                <Form.Select aria-label="categorie" desibled>
                  <option value={item.productId}>{item.productId}</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicQuantité">
                <Form.Control type="number" min="0" value={item.quantity} />
              </Form.Group>
              <Button
                variant="outline-dark"
                className="mb-3 d-flex gap-1 align-items-center"
                onClick={() => onRemove(item.productId)}
              >
                <TiDeleteOutline />
                Supprimer
              </Button>
            </div>
          );
        })}
    </div>
  );
};

export default CommandeDisplayer;
