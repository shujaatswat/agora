/** @format */

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { featureContext } from "../components/Context/FeatureContext";
import { Card } from "../components/ui/card";
import products from "../components/assets/products";
import ProductCard from "../components/Cards/productCard";
import CustomButton from "../components/Constant/customButton";

function Collections() {
  const { featureId } = useParams();
  const { featureData } = useContext(featureContext);
  return (
    <div className="my-20 bg-slate-500">
      <Card className="flex justify-between">
        <div></div>
        <h2 className="text-4xl text-green-500">heading two</h2>
        <CustomButton BtnText="some text" />
        {products.map((value, index) => {
          <ProductCard product={value} key={index} />;
        })}
      </Card>
    </div>
  );
}

export default Collections;
