import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Link,
  Image,
} from "@chakra-ui/react";
import img from "../assets/Untitled-design-50.webp";

export function LandingPage() {
  return (
    <>
      {/* <Box borderRadius={"50%"} width={"300px"}>
        <Image src={img} />
      </Box> */}
      <Grid
        templateRows={"repeat(3, 1fr)"}
        // gap={6}
        // padding={100}
        justifyContent={"center"}
        alignItems={"center"}
        h={"90vh"}
        textAlign={"center"}
      >
        <GridItem>
          <Heading size={["xl", "2xl"]}>Hi, my name is Ali</Heading>
          <Heading size={["xl", "2xl"]} color={"#99DBF5"}>
            I'm a Software Engineer
          </Heading>
        </GridItem>
        <GridItem>
          <Box
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image width={"250px"} src={img} />
          </Box>
          <Heading opacity={0.6} size={"md"}>
            I build Full-Stack Web Applications
          </Heading>
        </GridItem>
        <GridItem
          display="grid"
          gridTemplateRows="repeat(2, 1fr)"
          justifyItems="center"
          p={10}
        >
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
            {/* <Button
              m={"20px auto"}
              w={150}
              color={"cyan.600"}
              bg={"whitesmoke"}
              _hover={{ bg: "cyan.600", color: "whitesmoke" }}
            > */}
            Contact me
            {/* </Button> */}
          </Link>
        </GridItem>
      </Grid>
    </>
  );
}
