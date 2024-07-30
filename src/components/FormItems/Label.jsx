import React from "react";
import { Label } from "../ui/label";

const LabelText = ({ text ,className}) => {
  return <Label className={`text-sm font-medium font-sans ${className}`}>{text}</Label>;
};

export default LabelText;
