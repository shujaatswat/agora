import React, { useContext } from "react";
import Container from "../components/Layout/container";
import ProductSlider from "../components/Slider";
import { ProductDetailsCard } from "../components/Cards/ProductDetailsCard";
import Reviews from "../components/Constant/reviews";
import { useParams } from "react-router-dom";
import { ProductCardContext } from "../components/Context/ProductCardContext";
import Header from "../components/Layout/Header";
import CustomButton from "../components/Constant/customButton";
import CompareTable from "../components/Tables/CompareTable";
import SimilarProduct from "../components/SimilarProduct";
import SimilarContextProvider from "../components/Context/similarContext";

function ProductDetails() {
  const { productId } = useParams();
  const { productData } = useContext(ProductCardContext);
  const product = productData.find((p) => p._id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <SimilarContextProvider similarId={productId}>
        <Header />
        <Container>
          <div className="grid lg:gap-10 lg:grid-cols-2 overflow-hidden">
            <ProductSlider productImages={product.images || []} />
            <ProductDetailsCard product={product} />
          </div>
          <div className="flex flex-col lg:flex-row justify-between my-20">
            <div className="flex mb-4 lg:mb-0">
              <p className="text-lg font-light mr-2 cursor-pointer">
                0 customer reviews
              </p>
              <Reviews rating={product.rating} />
            </div>
            <CustomButton BtnText="Leave a review" />
          </div>
          <section>
            <h2 className="text-2xl font-semibold text-center my-10">
              Similar products
            </h2>
            <div className="grid gap-5 fullSmall:grid-cols-1 extraLarge:grid-cols-5 extraSmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-3 lessMedium:grid-cols-4 large:grid-cols-4">
              <SimilarProduct />
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-center mb-10 mt-32">
              Compare products
            </h2>
            <CompareTable />
          </section>
        </Container>
        <div className="w-">
          <CustomButton
            BtnText="Add to cart"
            className="fixed bottom-0 w-[95%] mx-auto left-4 block md:hidden sm:right-6 bg-lightbrown hover:bg-amber-700"
          />
        </div>
      </SimilarContextProvider>
    </>
  );
}

export default ProductDetails;
