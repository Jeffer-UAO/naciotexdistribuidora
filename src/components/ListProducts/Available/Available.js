import React, { useState } from "react";
import { BASE_NAME } from "@/config/constants";
import { useCart } from "@/hooks/useCart";
import { WhatsApp } from "@/components/WhatsApp";
import Link from "next/link";
import { toast } from "react-toastify";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  CardImg,
} from "reactstrap";
import styles from "./Available.module.scss";

export function Available(props) {
  const { product } = props;
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

  const addProductId = (id) => {
    setIdPropduct(id);
    toggleModal();
  };

  return (
    <div className={styles.list__product}>
      <Link href={`/${product.productData.slug}`}>
        <CardImg
          alt="Card image cap"
          src={BASE_NAME + product.productData.images}
        />
      </Link>

      <h5>{product.productData.name_extend}</h5>
      <div className={styles.product}>
        <div className={styles.price}>
          {product.productData.price2 > 0 && (
            <h6>Por mayor $ {product.productData.price2}</h6>
          )}
          {product.productData.price1 > 0 && (
            <h6>Al detal $ {product.productData.price1}</h6>
          )}
        </div>

        <div className={styles.WhatsApp}>
          <WhatsApp
            phoneNumber="+573106556056"
            message={
              BASE_NAME +
              product.productData.images +
              " " +
              product.productData.name_extend +
              " " +
              "Referencia: " +
              product.productData.ref
            }
          />
        </div>
      </div>

      <Button
        color="primary"
        onClick={() => addProductId(product.productData.codigo)}
      >
        Agregar al Carrito
      </Button>

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
