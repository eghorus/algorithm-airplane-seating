import getSeatType from "./get-seat-type";

// Space Complexity: O(n³)
// Time Complexity: O(1)
const assignSeats = (seatsByBlock, numOfPassengers) => {
  const assignedSeats = [];
  const totalRows = Math.max(...seatsByBlock.map((b) => b[1]));

  for (let rowId = 0; rowId < totalRows; rowId++) {
    assignedSeats.push({});

    for (let blockId = 0; blockId < seatsByBlock.length; blockId++) {
      if (rowId + 1 <= seatsByBlock[blockId][1]) {
        const totalColums = seatsByBlock[blockId][0];

        for (let colId = 0; colId < totalColums; colId++) {
          const seatType = getSeatType(blockId, seatsByBlock.length, colId, totalColums);
          assignedSeats[rowId][seatType] = assignedSeats[rowId][seatType] ? [...assignedSeats[rowId][seatType]] : [];
          const seatLabel = `${seatType.slice(0, 1).toUpperCase()}-b${blockId}-r${rowId}-c${colId}`; // a-b-r-c

          assignedSeats[rowId][seatType].push(seatLabel);
        }
      }
    }
  }

  let remainingPassengers = numOfPassengers;
  const bookedSeats = {};

  for (let rowId = 0; rowId < assignedSeats.length; rowId++) {
    while (assignedSeats[rowId].aisle.length > 0 && remainingPassengers > 0) {
      const aisleSeat = assignedSeats[rowId].aisle.shift();
      bookedSeats[aisleSeat] = numOfPassengers - remainingPassengers + 1;
      remainingPassengers -= 1;
    }

    while (assignedSeats[rowId].window.length > 0 && remainingPassengers > 0) {
      const windowSeat = assignedSeats[rowId].window.shift();
      bookedSeats[windowSeat] = numOfPassengers - remainingPassengers + 1;
      remainingPassengers -= 1;
    }

    while (assignedSeats[rowId].middle.length > 0 && remainingPassengers > 0) {
      const middleSeat = assignedSeats[rowId].middle.shift();
      bookedSeats[middleSeat] = numOfPassengers - remainingPassengers + 1;
      remainingPassengers -= 1;
    }
  }

  return { bookedSeats, remainingPassengers };
};

export default assignSeats;
