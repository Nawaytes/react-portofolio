import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CloseButton,
  Progress,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./Content.css";
export default function Content() {
  const [counter, setCounter] = useState(0);
  function filterNegative(value) {
    return value < 0 ? 0 : value;
  }
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });
  useEffect(() => {
    if (counter === 100) {
      onOpen();
      setCounter(0);
    }
  }, [counter, onOpen]);

  return (
    <main>
      <div className='content-title'>Finish this challenge</div>
      <Progress
        value={counter}
        margin={"auto"}
        marginTop={"30px"}
        marginBottom={"30px"}
        width={"400px"}
      />
      {isVisible ? (
        <Alert
          status='info'
          // width={"60vw"}
          margin={"auto"}
          marginBottom={"30px"}
          width={"fit-content"}
        >
          <AlertIcon />
          Congratulation! You have successfully click increment 100x !!!
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      ) : null}
      <div className='service-container'>
        <Box bgColor={"white"} className='service'>
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
