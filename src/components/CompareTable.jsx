import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "../components/ui/table";
import items from "./assets/CompareProducts";
import CompareCard from "./Cards/CompareCard";
import Reviews from "./reviews";

const CompareTable = () => {
  return (
    <Table className="table-auto w-full border-collapse text-center">
      <TableBody>
        <TableRow>
          <TableHead className="border-b border-gray-300 text-left"></TableHead>
          {items.map((item, i) => (
            <TableCell key={i} className="border-b border-gray-300">
              <CompareCard item={item} />
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableHead className="border-b border-gray-300">Price</TableHead>
          {items.map((item, i) => (
            <TableCell key={i} className="border-b border-gray-300">
              {item.price}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableHead className="border-b border-gray-300">Brand</TableHead>
          {items.map((item, i) => (
            <TableCell key={i} className="border-b border-gray-300">
              {item.brand}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableHead className="border-b border-gray-300">
            Agora score
          </TableHead>
          {items.map((item, i) => (
            <TableCell key={i} className="border-b border-gray-300 ">
              <Reviews rating={item.agoraScore} />
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableHead>Customer rating</TableHead>
          {items.map((item, i) => (
            <TableCell key={i} className="py-2">
              <Reviews rating={item.customerRating} />
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CompareTable;
