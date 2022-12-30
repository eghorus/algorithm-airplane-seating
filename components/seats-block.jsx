import { HStack } from "@chakra-ui/react";
import SeatColumn from "./seats-column";
import getSeatType from "../helpers/get-seat-type";

const SeatBlock = ({ blockIndex, totalBlocks, columns, rows, bookedSeats }) => {
  return (
    <HStack>
      {Array(columns)
        .fill(null)
        .map((_, index) => (
          <SeatColumn
            key={index}
            type={getSeatType(blockIndex, totalBlocks, index, columns)}
            noOfSeats={rows}
            blockIndex={blockIndex}
            colIndex={index}
            bookedSeats={bookedSeats}
          />
        ))}
    </HStack>
  );
};

export default SeatBlock;
