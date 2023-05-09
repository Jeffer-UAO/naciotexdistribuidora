import { CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";
import { WhatsApp } from "../WhatsApp";

import styles from "./ListProduts.module.scss";
import Link from "next/link";

export function Listproducts(props) {
  const { products, title } = props;

  return (
    <div className={styles.listProduct}>
     <h4>{title}</h4>
      <div className={styles.list}>      
        {map(products, (product, index) => (
          <div key={index} className={styles.list__product}>
            <div>
              <Link href={`/${product.productData.slug}`}>
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + product.productData.images}
                />
              </Link>
              <div className={styles.product}>
                <CardTitle className={styles.title}>
                  <h5>{product.productData.name_extend}</h5>
                </CardTitle>

                <div className={styles.title}>
                  <CardSubtitle>
                    {product.productData.price1 !== null && (
                      <h5> $ {product.productData.price1}</h5>
                    )}
                  </CardSubtitle>

                  <div>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
