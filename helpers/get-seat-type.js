// Space Complexity: O(1)
// Time Complexity: O(1)
const getSeatType = (blockIndex, totalBlocks, columnIndex, totalColums) => {
  const isFirstBlock = blockIndex === 0;
  const isLastBlock = blockIndex === totalBlocks - 1;

  let seatType = "";

  if ((isFirstBlock && columnIndex === 0) || (isLastBlock && columnIndex === totalColums - 1)) {
    seatType = "window";
  } else if (columnIndex === 0 || columnIndex === totalColums - 1) {
    seatType = "aisle";
  } else {
    seatType = "middle";
  }

  return seatType;
};

export default getSeatType;
