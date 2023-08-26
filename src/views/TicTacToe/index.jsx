import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function TicTacToe() {
  const players = ["X", "O"];
  const [player, setPlayer] = useState(players[0]);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);
  const [turn, setTurn] = useState(0);

  const checkWinner = () => {
    // Check rows
    for (let i = 0; i < board.length; i++) {
      if (
        board[i][0] !== "" &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        setWinner(player);
      }
    }
    // Check columns
    for (let i = 0; i < board.length; i++) {
      if (
        board[0][i] !== "" &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        setWinner(player);
      }
    }
    // Check diagonals
    if (
      board[0][0] !== "" &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      setWinner(player);
    }
    if (
      board[0][2] !== "" &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      setWinner(player);
    }
  };

  const checkDraw = () => {
    let isDraw = true;
    for (let i = 0; i < board.length; i++) {
      if (board[i].includes("")) {
        isDraw = false;
      }
    }
    if (isDraw) {
      setDraw(true);
    }
  };

  const handleClick = (row, col) => {
    if (board[row][col] === "") {
      const newBoard = [...board];
      newBoard[row][col] = player;
      setBoard(newBoard);
      checkWinner();
      checkDraw();
      setPlayer(players[turn]);
      setTurn((turn + 1) % 2);
    }
  };

  return (
    <Center>
      <Box minHeight={"600px"} textAlign={"center"}>
        <Text fontSize={"xxx-large"}>Tic Tac Toe</Text>
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          gap={1}
          width={"fit-content"}
          margin={"auto"}
        >
          <Box
            bg={"red.500"}
            height={"100px"}
            width={"100px"}
            onClick={() => {
              handleClick(0, 0);
            }}
          >
            {board[0][0]}
          </Box>
          <Box
            bg={"red.500"}
            height={"100px"}
            width={"100px"}
            onClick={() => {
              handleClick(0, 1);
            }}
          >
            {board[0][1]}
          </Box>
          <Box
            bg={"red.500"}
            height={"100px"}
            width={"100px"}
            onClick={() => {
              handleClick(0, 2);
            }}
          >
            {board[0][2]}
          </Box>
          <Box
            bg={"red.500"}
            height={"100px"}
            width={"100px"}
            onClick={() => {
              handleClick(1, 0);
            }}
          >
            {board[1][0]}
          </Box>
          <Box
            bg={"red.500"}
            height={"100px"}
            width={"100px"}
            onClick={() => {
              handleClick(1, 1);
            }}
          >
            {board[1][1]}
          </Box>
          <Box
            bg={"red.500"}
            height={"100px"}
            width={"100px"}
            onClick={() => {
              handleClick(1, 2);
            }}
          >
            {board[1][2]}
          </Box>
          <Box
            bg={"red.500"}
            height={"100px"}
            width={"100px"}
            onClick={() => {
              handleClick(2, 0);
            }}
          >
            {board[2][0]}
          </Box>
          <Box
            bg={"red.500"}
            height={"100px"}
            width={"100px"}
            onClick={() => {
              handleClick(2, 1);
            }}
          >
            {board[2][1]}
          </Box>
          <Box
            bg={"red.500"}
            height={"100px"}
            width={"100px"}
            onClick={() => {
              handleClick(2, 2);
            }}
          >
            {board[2][2]}
          </Box>
        </Grid>
      </Box>
    </Center>
  );
}
