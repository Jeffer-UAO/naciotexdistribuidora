import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
} from "reactstrap";
import { map } from "lodash";
import { toast } from "react-toastify";

import styles from "./ListProduts.module.scss";

import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { Available } from "./Available";
import { SoldOut } from "./SoldOut";

export function Listproducts(props) {
  const { products, title } = props;
  const { addCart, loading } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [idProduct, setIdPropduct] = useState();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const addData = () => {
    addCart(idProduct, quantity);
    toast.success("¡Se agrego con exito!");
    toggleModal();
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  return (
    <div className={styles.listProduct}>
      <h4>{title}</h4>
      <div className={styles.product}>
        {map(products, (product, index) => (
          <>
            {product.productData.active && (
              <>
                {!product.productData.soldout ? (
                  <Available key={index} product={product} />
                ) : (
                  <SoldOut kay={index} product={product} />
                )}
              </>
            )}
          </>
        ))}
      </div>

      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Ingrese Cantidad</ModalHeader>

        <ModalBody>
          Cantidad
          <FormGroup>
            <Input
              value={quantity}
              type="number"
              name="cantidad"
              id="cantidad"
              placeholder="Cantidad"
              onChange={handleQuantityChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={addData}>
            Aceptar
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
