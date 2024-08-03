import React from "react";
import CartCard from "../components/Cards/CartCard";
import Container from "../components/Layout/container";
import CartOrderCard from "../components/Cards/CartOrderCard";
import CartTableCard from "../components/Tables/CartTableCard";
import Header from "../components/Layout/Header";

const CartPage = () => {
  return (
    <Container>
      <div className="px-32">
        <Header />
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9 ">
          <CartCard cartText="Payment method" BtnText="Add payment method" />
          <CartCard cartText="Shipping address" BtnText="Add new address" />
          <CartTableCard />
        </div>
        <div className="col-span-3">
          <CartOrderCard />
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
