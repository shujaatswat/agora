/** @format */

import React, { useContext } from "react";
import ProductCard from "../components/Cards/productCard";
// import items from "../components/assets/Featured";
import Container from "../components/Layout/container";
// import products from "../components/assets/products";
import { ProductCardContext } from "../components/Context/ProductCardContext";
import { featureContext } from "../components/Context/FeatureContext";
import Header from "../components/Layout/Header";
import CustomButton from "../components/Constant/customButton";
import FeaturedCard from "../components/Cards/featuredCard";
// import items from "../components/assets/Featured";

function Home() {
  const { productData } = useContext(ProductCardContext);
  const { featureData } = useContext(featureContext);
  console.log(featureData, "shujat");
  return (
    <>
      <Header />
      <Container>
        <div className="grid gap-5 fullSmall:grid-cols-1 extraLarge:grid-cols-5 extraSmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-3 lessMedium:grid-cols-4 large:grid-cols-4">
          {productData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className="flex justify-between items-center my-32">
          <h3 className="font-sans font-semibold text-2xl">
            Featured collections
          </h3>
          <CustomButton BtnText="More Collections" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-36">
          {featureData.map((item, index) => (
            <FeaturedCard key={index} item={item} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Home;
