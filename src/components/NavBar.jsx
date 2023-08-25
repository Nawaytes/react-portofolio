import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function NavBar(props) {
  return (
    <Box
      height={"10vh"}
      bgColor={"#21243d"}
      width={"100vw"}
      transition={"all .3s"}
      opacity={props.isVisible ? 1 : 0}
    >
      <Flex
        flexDir={"row"}
        justifyContent={"space-between"}
        width={"350px"}
        marginLeft={"auto"}
        marginRight={"100"}
        color={"white"}
        alignItems={"center"}
        height={"100%"}
      >
        {props.isVisible ? (
          <>
            <Link to='/'>Home</Link>
            <HashLink smooth to='/#miniproject'>
              Mini Project
            </HashLink>
            <Link to='/profile'>Social media</Link>
          </>
        ) : null}
      </Flex>
    </Box>
  );
}
