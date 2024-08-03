import React from "react";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import CustomButton from "../Constant/customButton";

const Payment = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-300">
      <h2 className="text-2xl font-semibold mb-2">Payment methods</h2>
      <p className="mb-4">Manage your payment methods below.</p>
      <Table className="w-full mb-4">
        <TableBody>
          <TableRow className="border-b">
            <TableCell className="font-semibold">Brand</TableCell>
            <TableCell className="font-semibold">Last 4 Digits</TableCell>
            <TableCell className="font-semibold">Expiry</TableCell>
            <TableCell className="font-semibold">Actions</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p className="mb-4">No payment methods available</p>
      <CustomButton
        BtnText="Add payment method"
        className="bg-black text-white py-2 px-4 rounded-full w-fit"
      />
    </div>
  );
};

export default Payment;
