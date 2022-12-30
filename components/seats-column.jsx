import { VStack } from "@chakra-ui/react";
import Seat from "./seat";

const SeatColumn = ({ type, noOfSeats, blockIndex, colIndex, bookedSeats }) => {
  return (
    <VStack spacing={1}>
      {Array(noOfSeats)
        .fill(null)
        .map((_, index) => (
          <Seat
            key={index}
            type={type}
            blockIndex={blockIndex}
            rowIndex={index}
            colIndex={colIndex}
            bookedSeats={bookedSeats}
          />
        ))}
    </VStack>
  );
};

export default SeatColumn;
