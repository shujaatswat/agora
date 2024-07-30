import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function SelectComponent({ placeholder, options }) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((items, index) => {
          <SelectItem key={index} value={items.value}>
            {items.text}
          </SelectItem>;
        })}
      </SelectContent>
    </Select>
  );
}