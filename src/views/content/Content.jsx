import { useEffect, useState } from "react";
import "./Content.css";
import { Box, Button } from "@chakra-ui/react";
export default function Content() {
  const [counter, setCounter] = useState(0);
  function filterNegative(value) {
    return value < 0 ? 0 : value;
  }
  return (
    <main>
      <div className='content-title'>Service</div>
      <div className='service-container'>
        <Box bgColor={"aqua"} className='service'>
          <span>Counter</span>
          <span>{counter}</span>
          <Button
            margin={"10px"}
            colorScheme='linkedin'
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Increment
          </Button>
          <Button
            margin={"10px"}
            colorScheme='red'
            onClick={() => {
              setCounter(filterNegative(counter - 1));
            }}
          >
            Decrement
          </Button>
        </Box>
      </div>
    </main>
  );
}
