import React from "react";

import {
  chakra,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  Text,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { MdDeveloperMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaDev } from "react-icons/fa";

export default function App() {
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
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              <MdDeveloperMode />
              <FaDev />
            </chakra.h1>
          </Flex>
          <Flex alignItems={"center"}>
            <Text
              as={"h6"}
              size={"s"}
              cursor={"pointer"}
              fontWeight={"bold"}
              pr={5}
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
              <Link to={"/my-projects"}>My Projects</Link>
            </Text>
            {/* {width >= 370 ? ( */}
            <IconButton
              display={["none", "inherit"]}
              ml="2"
              aria-label=""
              icon={<FaLinkedin />}
              onClick={() =>
                window.open("https://www.linkedin.com/in/ali-al-guadeb/")
              }
            />
            {/* ) : (
              ""
            )} */}
            <IconButton
              ml="2"
              aria-label=""
              icon={<FaGithub />}
              onClick={() => window.open("https://github.com/Ali7U")}
            />
            <IconButton
              ml="8"
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
