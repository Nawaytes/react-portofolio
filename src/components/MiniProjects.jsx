import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import todoListProjectImage from "../assets/mini-projects/todo list.png";
import finishItProjectImage from "../assets/mini-projects/finish-it.png";
import Project from "./Project";
export default function MiniProjects() {
  return (
    <>
      <Box
        width={"855px"}
        margin={"auto"}
        marginTop={"100px"}
        minHeight={"400px"}
        border={"1px"}
        borderColor={"gray.200"}
        borderRadius={"10px"}
        marginBottom={"100px"}
        padding={"20px"}
      >
        <VStack id='miniproject'>
          <Text fontSize={"xxx-large"}>Mini Project</Text>
          <Flex flexDir={"row"} gap={"10px"} flexWrap={"wrap"}>
            <Project
              cover={todoListProjectImage}
              url={"/exercise-m-6"}
              title={"Todo List"}
            />
            <Project
              cover={finishItProjectImage}
              url={"/finish-it"}
              title={"Finish It"}
            />
            <Project
              cover={finishItProjectImage}
              url={"/tic-tac-toe"}
              title={"Tic Tac Toe"}
            />
          </Flex>
        </VStack>
      </Box>
    </>
  );
}
