import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaReact,
  FaBootstrap,
  FaCss3Alt,
  FaNode,
  FaAngular,
} from "react-icons/fa";
import {
  SiChakraui,
  SiDotnet,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

function Experence() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Center>
      <SimpleGrid columns={[1, 1, 3, 3]} gap={50}>
        <Box className="box">
          <Heading>1+</Heading>
          <Heading size={"md"} color={isDark ? "#F0F0F0" : "#393646"}>
            Experence
          </Heading>
        </Box>
        <Box className="box" bg={isDark ? "#27374D" : "#EEEDED"} h={"90%"}>
          <Heading>Front-End</Heading>
          <Box className="smpGrid">
            {" "}
            <FaReact fontSize={40} />
            <FaBootstrap fontSize={40} />
            <SiChakraui fontSize={40} />
            <AiFillHtml5 fontSize={40} />
            <FaCss3Alt fontSize={40} />
            <SiJavascript fontSize={40} />
            <SiTypescript fontSize={40} />
            <FaAngular fontSize={40} />{" "}
            <Box display={"flex"} alignItems={"center"}>
              <i className="pi pi-prime" style={{ fontSize: "40px" }}></i>
            </Box>
          </Box>
        </Box>
        <Box className="box" bg={isDark ? "#394867" : "#EAF6F6"} h={"90%"}>
          <Heading>Back-End</Heading>
          <Box className="smpGrid">
            {" "}
            <SiJavascript fontSize={40} />
            <SiTypescript fontSize={40} />
            <FaNode fontSize={40} />
            <SiExpress fontSize={40} />
            <SiPrisma fontSize={40} />
            <SiMongodb fontSize={40} />
            <SiMysql fontSize={40} />
            <SiPostman fontSize={40} />
            <SiDotnet fontSize={40} />
          </Box>
        </Box>
      </SimpleGrid>
    </Center>
  );
}

export default Experence;
