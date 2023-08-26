import { Box, Center, Grid, Text } from "@chakra-ui/react";
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
  const [turn, setTurn] = useState(1);

  const checkWinner = () => {
    // Check rows, columns, and diagonals
    for (let i = 0; i < board.length; i++) {
      if (
        (board[i][0] !== "" &&
          board[i][0] === board[i][1] &&
          board[i][0] === board[i][2]) ||
        (board[0][i] !== "" &&
          board[0][i] === board[1][i] &&
          board[0][i] === board[2][i])
      ) {
        setWinner(player);
        return;
      }
    }
    if (
      (board[0][0] !== "" &&
        board[0][0] === board[1][1] &&
        board[0][0] === board[2][2]) ||
      (board[0][2] !== "" &&
        board[0][2] === board[1][1] &&
        board[0][2] === board[2][0])
    ) {
      setWinner(player);
      return;
    }
  };

  const checkDraw = () => {
    let isDraw = true;
    for (let i = 0; i < board.length; i++) {
      if (board[i].includes("")) {
        isDraw = false;
        break;
      }
    }
    if (isDraw) {
      setDraw(true);
    }
  };

  const handleClick = (row, col) => {
    if (!winner && !draw && board[row][col] === "") {
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
          {board.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <Box
                key={`${rowIndex}-${colIndex}`}
                bg={"gray.100"}
                height={"100px"}
                width={"100px"}
                display='flex'
                alignItems='center'
                justifyContent='center'
                fontSize='3xl'
                cursor={
                  cell === "" && !winner && !draw ? "pointer" : "not-allowed"
                }
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell}
              </Box>
            ))
          )}
        </Grid>
        {winner && <Text mt={4}>{`Player ${winner} wins!`}</Text>}
        {draw && !winner && <Text mt={4}>It's a draw!</Text>}
      </Box>
    </Center>
  );
}
