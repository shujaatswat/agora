import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import CustomButton from "../Constant/customButton";

const CartCard = ({ cartText, BtnText }) => {
  return (
    <Card className="mb-5">
      <CardHeader className="border-b p-5">
        <h1 className="text-2xl font-semibold">{cartText}</h1>
      </CardHeader>
      <CardContent className="pt-5 pb-10 px-7">
        <CustomButton BtnText={BtnText} className="px-2 py-4 w-fit" />
      </CardContent>
    </Card>
  );
};

export default CartCard;
