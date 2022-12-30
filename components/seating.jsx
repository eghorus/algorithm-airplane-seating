import { Center, HStack, Text } from "@chakra-ui/react";
import SeatBlock from "./seats-block";

const Seating = ({ seatsByBlock, bookedSeats, remainingPassengers }) => {
  return (
    <Center flexDirection="column" justifyContent="start" minW="container.md">
      <Text marginBlock={10} color="gray.500" fontWeight="medium">
        Remaining Passengers: {remainingPassengers}
      </Text>
      <HStack spacing={6} align="start">
        {seatsByBlock.map((block, index) => (
          <SeatBlock
            key={index}
            blockIndex={index}
            totalBlocks={seatsByBlock.length}
            columns={block[0]}
            rows={block[1]}
            bookedSeats={bookedSeats}
          />
        ))}
      </HStack>
    </Center>
  );
};

export default Seating;
