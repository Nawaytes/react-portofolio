import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import ig from "../assets/sosmed/instagram.png";
import linkedId from "../assets/sosmed/linkedin.png";
import { EmailIcon } from "@chakra-ui/icons";
export default function Footer() {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"left"}
      padding={"50px"}
      paddingLeft={"70px"}
      bgColor={"#21243d"}
      color={"white"}
      gap={"5px"}
    >
      <Text fontSize={"2xl"}>Contact me</Text>
      <HStack justifyContent={"left"}>
        <Image src={ig} alt='instagram' height={"6"} />
        <Text fontSize={"xl"}>scriptgalih</Text>
      </HStack>
      <HStack>
        <Image src={linkedId} alt='linkedIn' height={"6"} />
        <Text fontSize={"xl"}>scriptgalih</Text>
      </HStack>
      <HStack>
        <EmailIcon />
        <Text fontSize={"xl"}>scriptgalih@gmail.com</Text>
      </HStack>
    </Flex>
  );
}
