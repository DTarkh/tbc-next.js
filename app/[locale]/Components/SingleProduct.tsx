'use client'

import Image from "next/image";
import { ProductType } from "../interfaces";
import "./SingleProduct.css";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";


const SingleProduct = ({ product }: { product: ProductType }) => {
  const t = useTranslations("ProductCard");
  const path = usePathname();
  const isEnglish = path.includes("/en");


  return (
    <>
      <div className="product-details-container" key={product.id}>
        <div className="product-image">
          <Image
            src={product.thumbnail}
            alt="Product image"
            width={300}
            height={300}
          />
        </div>

        <div className="product-info">
          <h2 className="product-title">{isEnglish ? product.title_en : product.title_ge}</h2>
          <p className="product-description">{isEnglish ? product.description_en : product.description_ge}</p>

          <div className="product-meta">
            <p className="product-category">Category: {isEnglish ? product.category_en : product.category_ge}</p>
            <p className="product-price">{t("price")} ${product.price}</p>
            <p className="product-discount">
            {t("discount")} {product.discountPercentage}%
            </p>
            <p className="product-rating">{t("rating")}  {product.rating}/5</p>
            <p className="product-stock">{t("stock")}  {product.stock} units</p>
            <p className="product-brand">{t("brand")}  {product.brand}</p>
          </div>

          {/* <div className="product-additional-info">
            <p className="product-warranty">
              Warranty: {product.warrantyInformation}
            </p>
            <p className="product-shipping">
              Shipping: {product.shippingInformation}
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
