import { Center, Text } from "@chakra-ui/react";

const Seat = ({ type, blockIndex, rowIndex, colIndex, bookedSeats }) => {
  const typeLetter = type.slice(0, 1).toUpperCase();
  const seatId = `${typeLetter}-b${blockIndex}-r${rowIndex}-c${colIndex}`;
  const isBooked = bookedSeats[seatId];

  let seatColor = "";

  switch (type) {
    case "window":
      seatColor = isBooked ? "green.500" : "green.200";
      break;
    case "aisle":
      seatColor = isBooked ? "blue.500" : "blue.200";
      break;
    case "middle":
      seatColor = isBooked ? "red.500" : "red.200";
      break;
    default:
      seatColor = "gray.200";
      break;
  }

  return (
    <Center id={seatId} boxSize={10} bgColor={seatColor} borderRadius="xl" fontSize="sm">
      <Text fontWeight={isBooked ? "medium" : "normal"} color={isBooked ? "white" : "initial"}>
        {isBooked ? bookedSeats[seatId] : typeLetter}
      </Text>
    </Center>
  );
};

export default Seat;
