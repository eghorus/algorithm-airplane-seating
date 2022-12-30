import { useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

const InputForm = ({ setSeatsByBlock, setNumOfPassengers }) => {
  const seatsInputRef = useRef("");
  const passengersInputRef = useRef(0);

  const handleAssign = () => {
    const seatsInputValue = seatsInputRef.current?.value.trim();
    const passengersInputValue = passengersInputRef.current?.value.trim();

    if (!seatsInputValue || !passengersInputValue) {
      window.alert("Please enter all required inputs.");
      return;
    }

    const seatsByBlockArr = seatsInputValue
      .replace(/\[|\]|\s/g, "")
      .split(",")
      .map((i) => Number(i));

    let seatsByBlock2DArr = [];
    for (let i = 0; i < seatsByBlockArr.length; i += 2) {
      seatsByBlock2DArr.push([seatsByBlockArr[i], seatsByBlockArr[i + 1]]);
    }

    setSeatsByBlock(seatsByBlock2DArr);
    setNumOfPassengers(passengersInputValue);
  };

  const handleReset = () => {
    seatsInputRef.current.value = "";
    passengersInputRef.current.value = "";
    setSeatsByBlock([]);
    setNumOfPassengers(0);
  };

  return (
    <Card maxW={72} w="full" border="1px" borderColor="gray.200">
      <CardHeader>
        <Heading as="h4" size="md" fontWeight="medium">
          Assign Airplane Seating
        </Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        <Box as="form">
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Seats By Block</FormLabel>
              <Input
                ref={seatsInputRef}
                placeholder="e.g. [3,2], [4,3], [2,3], [3,4]"
                _placeholder={{ fontSize: "sm" }}
              />
              <FormHelperText>2D array that represents [columns, rows].</FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Number of Passengers</FormLabel>
              <Input ref={passengersInputRef} placeholder="e.g. 50" _placeholder={{ fontSize: "sm" }} />
              <FormHelperText>2D array that represents [columns, rows].</FormHelperText>
            </FormControl>
            <Button colorScheme="brand" w="full" onClick={handleAssign}>
              Assign
            </Button>
            <Button colorScheme="brand" variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </VStack>
        </Box>
      </CardBody>
    </Card>
  );
};

export default InputForm;
