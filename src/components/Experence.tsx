import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";

import SkillsGroup from "./shared/SkillsGroup";

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
        <Box
          className="box"
          p={"6px"}
          bg={isDark ? "#27374D" : "#EEEDED"}
          h={"200px"}
          overflow={"auto"}
        >
          <Heading>Front-End</Heading>
          <Box>
            <SkillsGroup isFront />
          </Box>
        </Box>
        <Box
          className="box"
          bg={isDark ? "#394867" : "#EAF6F6"}
          h={"200px"}
          overflow={"auto"}
          p={"6px"}
        >
          <Heading>Back-End</Heading>
          <Box>
            <SkillsGroup isBack />
          </Box>
        </Box>
      </SimpleGrid>
    </Center>
  );
}

export default Experence;
