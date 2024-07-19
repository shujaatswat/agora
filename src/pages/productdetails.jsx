/** @format */

import React from "react";
import ProductSlider from "../components/Slider";
import Header from "../components/Header";
import { ProductDetailsCard } from "../components/Cards/ProductDetailsCard";
import Container from "../components/container";
import Reviews from "../components/reviews";
import CustomButton from "../components/customButton";
import CompareTable from "../components/CompareTable";

function ProductDetails() {
  return (
    <>
      <Header />
      <Container>
        <div className="grid lg:gap-10 lg:grid-cols-2 overflow-hidden">
          <ProductSlider />
          <ProductDetailsCard />
        </div>
        <div className="flex flex-col lg:flex-row justify-between my-20">
          <div className="flex mb-4 lg:mb-0">
            <p className="text-lg font-light mr-2 cursor-pointer">
              0 customer reviews
            </p>
            <Reviews rating="0.00" />
          </div>
          <CustomButton BtnText="Leave a review " />
        </div>
        <section>
          <h2 className="text-center text-4xl font-semibold my-[5rem]">
            Compare products
          </h2>
          <CompareTable />
        </section>
      </Container>
    </>
  );
}

export default ProductDetails;
