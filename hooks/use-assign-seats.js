import { useEffect, useState } from "react";
import assignSeats from "../helpers/assign-seats";

const useAssignSeats = () => {
  const [seatsByBlock, setSeatsByBlock] = useState([]);
  const [numOfPassengers, setNumOfPassengers] = useState(0);
  const [bookedSeats, setBookedSeats] = useState({});
  const [remainingPassengers, setRemainingPassengers] = useState(0);

  useEffect(() => {
    const { bookedSeats, remainingPassengers } = assignSeats(seatsByBlock, numOfPassengers);
    setBookedSeats(bookedSeats);
    setRemainingPassengers(remainingPassengers);
  }, [seatsByBlock, numOfPassengers]);

  return { seatsByBlock, setSeatsByBlock, numOfPassengers, setNumOfPassengers, bookedSeats, remainingPassengers };
};

export default useAssignSeats;
