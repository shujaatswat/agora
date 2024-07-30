import React, { useContext } from "react";
import { Card } from "../ui/card";
import CustomButton from "../Constant/customButton";
import { CartContext } from "../Context/CartContext";

const CartOrderCard = () => {
  const { cart } = useContext(CartContext);

  // Calculate the subtotal
  const subTotal = () => {
    return cart.reduce(
      (acc, element) => acc + element.price * element.count,
      0
    );
  };

  const total = subTotal(); // Calculate total
  const shipping = 0; // Assuming shipping is free
  const taxesAndFees = 0; // Assuming no taxes or fees

  return (
    <Card className="p-5">
      <h2 className="text-2xl font-semibold pb-7">Order summary</h2>

      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping:</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Taxes and fees:</span>
        <span>${taxesAndFees.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-bold">Total:</span>
        <span className="font-bold">
          ${(total + shipping + taxesAndFees).toFixed(2)}
        </span>
      </div>

      <CustomButton BtnText={"Place your order"} className="w-fit mt-4" />
    </Card>
  );
};

export default CartOrderCard;
