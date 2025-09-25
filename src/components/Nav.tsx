import React from "react";

import {
  chakra,
  Flex,
  useColorModeValue,
  Text,
  useColorMode,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaDev } from "react-icons/fa";

export default function Nav() {
  const bg = useColorModeValue("white", "gray.800");
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Box fontSize="xl" fontWeight="medium">
              <FaDev size={32} />
            </Box>
          </Flex>
          <Flex
            alignItems={"center"}
            w={["50%", "30%"]}
            justifyContent={"space-around"}
          >
            <Text
              as={"h6"}
              size={"s"}
              cursor={"pointer"}
              fontWeight={"bold"}
              fontSize={[14, 16]}
            >
              <Link to={"/"}>Home</Link>
            </Text>
            <Text
              as={"h6"}
              size={"s"}
              cursor={"pointer"}
              fontWeight={"bold"}
              fontSize={[14, 16]}
            >
              <Link to={"/projects"}>Projects</Link>
            </Text>
            <Text
              as={"h6"}
              size={"s"}
              cursor={"pointer"}
              fontWeight={"bold"}
              fontSize={[14, 16]}
            >
              <Link to={"/about"}>About</Link>
            </Text>
          </Flex>
          <Flex w={["25%", "15%"]} justifyContent={"space-between"}>
            <IconButton
              display={["none", "inherit"]}
              aria-label=""
              icon={<FaLinkedin />}
              onClick={() =>
                window.open("https://www.linkedin.com/in/ali-al-guadeb/")
              }
            />
            <IconButton
              aria-label=""
              icon={<FaGithub />}
              onClick={() => window.open("https://github.com/Ali7U")}
            />
            <IconButton
              aria-label=""
              icon={isDark ? <FaSun color="orange" /> : <FaMoon color="" />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
