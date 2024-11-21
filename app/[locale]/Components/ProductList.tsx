"use client";

import { Link } from "@/i18n/routing";
import "./ProductList.css";
import { ProductType } from "../interfaces";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const ProductCard = ({ products }: { products: [ProductType] }) => {
  // console.log('onCard', search);
  // const products = await fetchProducts(search);

  // const onDelete = (id) => {
  //   setProducts(products.filter((product) => product.id !== id));
  // };

  // const onUpdate = (id) => {
  //   setCurrentProduct(products.find((product) => product.id === id));
  //   console.log("Update", id);
  //   setActive(true);
  // };

  const t = useTranslations("ProductCard");
  const path = usePathname();
  const isEnglish = path.includes("/en");

  return (
    <div className="ProductList">
      {products.map((product: ProductType) => (
        <div className="ProductCard" key={product.id}>
          <div className="card-image">
            <img
              src={product.thumbnail}
              alt={isEnglish ? product.title_en : product.title_ge}
            />
          </div>
          <p className="ProductCard-discount">
            {product.discountPercentage}% {t("discount")}
            <span className="limited-deal">{t("deal")}</span>
          </p>
          <Link href={`/products/${product.id}`}>
            <h2 className="ProductCard-title">
              {isEnglish ? product.title_en : product.title_ge}
            </h2>
          </Link>
          <p className="ProductCard-description">
            {isEnglish ? product.description_en : product.description_ge}
          </p>
          <div>
            <p className="ProductCard-rating">
              {t("rating")} {product.rating}
            </p>
            <span className="ProductCard-price">
              {t("price")} ${product.price}
            </span>
          </div>
          {/* <div className="ProductCard-btns">
            <button
              className="ProductCard-button-update"
              onClick={() => onUpdate(product.id)}
            >
              Update
            </button>
            <button
              className="ProductCard-button"
              onClick={() => onDelete(product.id)}
            >
              Delete
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
