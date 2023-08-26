import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const options = ["Rock", "Paper", "Scissors"];

export default function ScissorPaperRock() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [maxScore, setMaxScore] = useState(null);
  const [startGame, setStartGame] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleChoice = (choice) => {
    setUserChoice(choice);
    const randomIndex = Math.floor(Math.random() * options.length);
    setComputerChoice(options[randomIndex]);
    determineWinner(choice, options[randomIndex]);
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Scissors" && computerChoice === "Paper") ||
      (userChoice === "Paper" && computerChoice === "Rock")
    ) {
      setResult("You win!");
      setUserScore(userScore + 1);
    } else {
      setResult("Computer wins!");
      setComputerScore(computerScore + 1);
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setStartGame(false);
    setMaxScore(null);
    if (userScore === maxScore || computerScore === maxScore) {
      setUserScore(0);
      setComputerScore(0);
    }
  };

  const handleStartGame = () => {
    if (maxScore >= 1 && maxScore <= 5) {
      setStartGame(true);
    } else {
      if (maxScore === 0) setMaxScore(1);
      onOpen();
    }
  };

  const handleAlertDialog = () => {
    onClose();
    setStartGame(true);
  };

  return (
    <>
      <Box height={"10vh"}></Box>
      <Center height='100vh' id='tictactoeID' autoFocus>
        <Box textAlign='center'>
          <Text fontSize='4xl' mb={4}>
            Paper Rock Scissors
          </Text>
          {startGame === false ? (
            <Box>
              <Text fontSize='xl'>Set the maximum score (1-5):</Text>
              <Input
                type='number'
                min={1}
                max={5}
                value={maxScore}
                onChange={(e) => setMaxScore(parseInt(e.target.value))}
              />
              <Button mt={2} onClick={handleStartGame}>
                GO!
              </Button>
            </Box>
          ) : (
            <Box>
              <Text fontSize='2xl' mb={2}>
                You: {userScore} - Computer: {computerScore}
              </Text>
              <Flex justifyContent='center' mb={4}>
                {options.map((option) => (
                  <Button
                    key={option}
                    variant='outline'
                    size='lg'
                    mx={2}
                    onClick={() => handleChoice(option)}
                    disabled={
                      userChoice !== null ||
                      userScore === maxScore ||
                      computerScore === maxScore
                    }
                  >
                    {option}
                  </Button>
                ))}
              </Flex>
              <Text fontSize='xl'>
                {userChoice && `You chose: ${userChoice}`}
              </Text>
              <Text fontSize='xl'>
                {computerChoice && `Computer chose: ${computerChoice}`}
              </Text>
              <Text fontSize='2xl' fontWeight='bold' mt={4}>
                {result}
              </Text>
              {(userScore === maxScore || computerScore === maxScore) && (
                <Button mt={4} onClick={resetGame}>
                  Start a new game
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Center>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold' width={"100%"}>
              Warning
            </AlertDialogHeader>

            <AlertDialogBody textAlign={"center"}>
              Are you sure? Want to play with <br />
              the maximum score of {maxScore}?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme='red' onClick={handleAlertDialog} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
