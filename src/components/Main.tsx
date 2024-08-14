import {
  Box,
  Center,
  Image,
  SimpleGrid,
  Heading,
  UnorderedList,
  Text,
  Button,
} from "@chakra-ui/react";
import img from "../assets/Untitled-design-50.webp";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaBootstrap,
  FaCss3Alt,
  FaNode,
  FaReact,
  FaAngular,
} from "react-icons/fa";

import {
  SiChakraui,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPrisma,
  SiTypescript,
  SiDotnet,
} from "react-icons/si";

import Experence from "./Experence";

function Main() {
  return (
    <>
      <Heading textAlign={"left"}>
        Hey! I'm <Text color="#99DBF5">Ali AlGuadeb</Text>
      </Heading>
      <Center>
        <Box p={[5, 10]}>
          <Text fontSize={"20px"}>I'm Full-Stack Developer with</Text>
          <Text fontSize={"20px"}>strong knowledge in web development</Text>
        </Box>
        <Box borderRadius={"50%"} width={"300px"}>
          <Image src={img} />
        </Box>
      </Center>
      <Center>
        <Button
          m={"20px auto"}
          w={150}
          color={"whitesmoke"}
          bg={"cyan.600"}
          onClick={() =>
            window.open("https://www.linkedin.com/in/ali-al-guadeb/")
          }
        >
          My LinkedIn{" "}
        </Button>
      </Center>
      <Center>
        <SimpleGrid>
          <Box>
            <Heading color={"#99DBF5"}>My Skills :</Heading>

            <UnorderedList>
              <SimpleGrid padding={15} columns={[3, 4, 5, 6]} spacing={5}>
                <Box>
                  <AiFillHtml5 fontSize={50} />
                </Box>
                <Box>
                  <FaCss3Alt fontSize={50} />
                </Box>
                <Box>
                  <SiJavascript fontSize={50} />
                </Box>
                <Box>
                  <SiTypescript fontSize={50} />
                </Box>
                <Box>
                  <FaNode fontSize={50} />
                </Box>
                <Box>
                  <SiExpress fontSize={50} />
                </Box>
                <Box>
                  <SiPrisma fontSize={50} />
                </Box>
                <Box>
                  <FaBootstrap fontSize={50} />
                </Box>
                <Box>
                  <FaReact fontSize={50} />
                </Box>
                <Box>
                  <SiMongodb fontSize={50} />
                </Box>
                <Box>
                  <SiMysql fontSize={50} />
                </Box>
                <Box>
                  <SiPostman fontSize={50} />
                </Box>
                <Box>
                  <SiChakraui fontSize={50} />
                </Box>
                <Box>
                  <FaAngular fontSize={50} />{" "}
                </Box>
                <Box>
                  <SiDotnet fontSize={50} />
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <i className="pi pi-prime" style={{ fontSize: "40px" }}></i>
                </Box>
              </SimpleGrid>
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Center>
      <Experence />
    </>
  );
}

export default Main;
