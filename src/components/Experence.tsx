import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaBootstrap, FaCss3Alt, FaNode } from "react-icons/fa";
import {
  SiChakraui,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

function Experence() {
  return (
    <Center>
      <SimpleGrid columns={[1, 3, 3, 3]} gap={50}>
        <Box className="box">
          <Heading>1+</Heading>
          <Heading size={"md"} color={"#F0F0F0"}>
            Experence
          </Heading>
        </Box>
        <Box className="box bg1">
          <Heading>Front-End</Heading>
          <Box className="smpGrid ">
            {" "}
            <FaReact fontSize={40} />
            <FaBootstrap fontSize={40} />
            <SiChakraui fontSize={40} />
            <AiFillHtml5 fontSize={40} />
            <FaCss3Alt fontSize={40} />
            <SiJavascript fontSize={40} />
            <SiTypescript fontSize={40} />
          </Box>
        </Box>
        <Box className="box bg2">
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
          </Box>
        </Box>
      </SimpleGrid>
    </Center>
  );
}

export default Experence;
