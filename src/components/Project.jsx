import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <Box
      width={"400px"}
      border={"1px"}
      borderColor={"gray.200"}
      borderRadius={"10px"}
      textAlign={"center"}
      padding={"20px"}
    >
      <Link to={props.url}>
        <VStack justifyContent={"space-between"}>
          <Image src={props.cover} borderRadius={"10px"} height={"240px"} />
          <Box height={"40px"}>
            <Text fontSize={"xl"}>{props.title}</Text>
          </Box>
        </VStack>
      </Link>
    </Box>
  );
}
