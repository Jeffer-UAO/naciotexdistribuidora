import React from 'react'
import { BASE_NAME } from "@/config/constants";
import { WhatsApp } from "@/components/WhatsApp";
import Link from "next/link";

import { CardImg, CardSubtitle, CardTitle, Button } from "reactstrap";

import styles from "./Available.module.scss";

export function Available(props) {
    const { product } = props;



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
    </div>
  );
}
