import {
  Box,
  Center,
  Image,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import img from "../assets/Untitled-design-50.webp";

import Experence from "./Experence";
import SkillsGroup from "./shared/SkillsGroup";

function Main() {
  return (
    <>
      <Heading
        textAlign={["left", "center"]}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={["column", "row"]}
        gap={2}
      >
        <Text> Hey! I'm</Text>
        <Text color="#99DBF5">Ali AlGuadeb</Text>
      </Heading>
      <Center>
        <Box p={[5, 10]}>
          <Text fontSize={[16, 20]}>I'm Software Engineer with</Text>
          <Text fontSize={[16, 20]}>strong knowledge in web development</Text>
        </Box>
        <Box borderRadius={"50%"} width={"300px"}>
          <Image src={img} />
        </Box>
      </Center>
      <Center flexDirection={"column"}>
        <Button
          m={"20px auto"}
          w={150}
          color={"whitesmoke"}
          bg={"cyan.600"}
          onClick={() =>
            window.open("https://www.linkedin.com/in/ali-al-guadeb/")
          }
          _hover={{
            bg: "whitesmoke",
            color: "cyan.600",
          }}
        >
          My LinkedIn
        </Button>
        <Link href="mailto:alguadeb@gmail.com">
          <Button
            m={"20px auto"}
            w={150}
            color={"cyan.600"}
            bg={"whitesmoke"}
            _hover={{ bg: "cyan.600", color: "whitesmoke" }}
          >
            Contact me
          </Button>
        </Link>
      </Center>
      <Center>
        <SimpleGrid>
          <Box>
            <Heading color={"#99DBF5"} fontSize={[20, 26]}>
              My Skills :
            </Heading>

            <Box mb={10}>
              <SkillsGroup isMain />
            </Box>
          </Box>
        </SimpleGrid>
      </Center>
      <Experence />
    </>
  );
}

export default Main;
