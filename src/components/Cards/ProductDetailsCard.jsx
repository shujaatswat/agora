import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Hurt from "../Constant/Hurt";
import Reviews from "../Constant/reviews";
import CustomButton from "../Constant/customButton";
import { toast, Toaster } from "sonner";
import LabelText from "../FormItems/Label";
import { SelectComponent } from "../FormItems/Select";
import { CartContext } from "../Context/CartContext";

export function ProductDetailsCard({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const router = useNavigate();

  const handleCart = () => {
    toast("Product added to cart", {
      icon: <i class="fa-solid fa-circle-check"></i>,
      description: product.description,
      action: {
        label: "View Cart",
        onClick: () => router("/cartpage"),
      },
    });
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product.id
    );

    if (existingProductIndex !== -1) {
      const newCart = [...cart];
      newCart[existingProductIndex].count += 1;
      setCart(newCart);
    } else {
      const updatedCart = [...cart, { ...product, count: 1 }];
      setCart(updatedCart);
    }
  };

  return (
    <div className="mt-48 lg:m-auto lg:mt-0 lg:w-[371px]">
      <button className="text-neutral-700 text-sm font-medium px-1.5 py-0.5 rounded bg-neutral-100 w-max capitalize">
        {product.name}
      </button>
      <Toaster />
      <div className="flex flex-col space-y-1.5">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-semibold lg:max-w-[307px] text-black capitalize">
            {product.description}
          </h1>
          <Hurt className="h-8 w-8 stroke-gray-400" />
        </div>
        <Reviews rating={product.rating} />
        <div className="prose-p:my-1 prose-ul:my-2 w-full md:max-w-[50ch] my-2 prose-sm prose text-gray-600">
          {/* <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul> */}
        </div>
        <div className="grid gap-2">
          <LabelText text="Color" />
          <SelectComponent
            placeholder="Black"
            options={[
              {
                value: "Black",
                text: "Black",
              },
            ]}
          />
          <LabelText text="size" />
          <SelectComponent
            placeholder="Large"
            options={[
              {
                value: "Large",
                text: "Large",
              },
            ]}
          />
          <p className="font-semibold text-black my-6">${product.price}</p>
          <div className="w-full relative">
            <CustomButton
              onClick={handleCart}
              BtnText="Add to cart"
              className="bg-lightbrown hover:bg-amber-700 my-2 w-full box-border hidden md:block"
            />
          </div>
          <CustomButton BtnText="Learn more" className="mb-2" />
        </div>
      </div>
    </div>
  );
}
