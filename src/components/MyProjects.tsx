import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Divider,
  Heading,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { PrimeIcons } from "primereact/api";
import { FaGithub } from "react-icons/fa";

interface IProjects {
  projectName: string;
  url?: string;
  urlDeploy?: string;
  type: string;
  frameWork: string;
}

// https://65f2bd66a7ffb3a13ec2ec9f--search-wikipedia-app2.netlify.app
const projects: IProjects[] = [
  {
    projectName: "Password Generator",
    type: "Frontend",
    frameWork: "Angular",
    urlDeploy:
      "https://65f271be3063436d5d709e6d--pass-generator-application.netlify.app",
  },
  {
    projectName: "Pizza Resturant",
    type: "Full-Stack",
    frameWork: "React - ExpressJS",
  },
  {
    projectName: "College System",
    type: "Full-Stack",
    frameWork: "React - ExpressJS",
  },
  {
    projectName: "Search Wikipedia App",
    type: "Frontend",
    frameWork: "Angular",
    urlDeploy:
      "https://65f2bd66a7ffb3a13ec2ec9f--search-wikipedia-app2.netlify.app",
  },
  {
    projectName: "Random Image App",
    type: "Frontend",
    frameWork: "Angular",
    urlDeploy: "https://65f2bc0fbacbc89d95a0ed0a--random-image-app.netlify.app",
  },
  {
    projectName: "Weather App",
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://weather-application.pages.dev",
  },
  {
    projectName: "Weather App 2",
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://weather-app2.pages.dev",
  },
  { projectName: "ToDo List", type: "Frontend", frameWork: "React" },
  {
    projectName: "E-commerance Food",
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://e-commernce-app.pages.dev",
  },
  { projectName: "Shopping Cart Phones", type: "Frontend", frameWork: "React" },
  {
    projectName: "Coffee App",
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://coffee-cart-5ep.pages.dev/cart",
  },
  {
    projectName: "Hospital Doctors Appoinmetns",
    type: "Frontend",
    frameWork: "React",
  },
  { projectName: "Meme Generator", type: "Frontend", frameWork: "React" },
  { projectName: "Music Player App", type: "Frontend", frameWork: "React" },
  {
    projectName: "Quiz App",
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://65f26f873063436be2709b81--quiz-app-ali.netlify.app",
  },
  {
    projectName: "Books Store",
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://books-store.pages.dev/cart",
  },
  { projectName: "Calculatur", type: "Frontend", frameWork: "React" },
  {
    projectName: "Pizza App",
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://react-pizza-cart.pages.dev/",
  },
];
function MyProjects() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <Box m={25}>
        <Center>
          <Heading size="lg">My Projects:</Heading>
        </Center>
        <Center>
          <Accordion w={"50%"}>
            {projects.map((item) => (
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {item.projectName}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <Box bg={isDark ? "#31363F" : "#EEEDED"}>
                  <AccordionPanel pb={4}>
                    <Box>
                      <Link
                        href={"https://github.com/Ali7U"}
                        position={"absolute"}
                        right={"29%"}
                      >
                        <FaGithub position={"absolute"} />
                      </Link>
                    </Box>
                    type: {item.type} - {item.frameWork}
                  </AccordionPanel>
                  <Divider />
                  {item.urlDeploy ? (
                    <AccordionPanel
                      pb={4}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      w={150}
                    >
                      <Link
                        href={item.urlDeploy}
                        isExternal
                        display={"flex"}
                        alignItems={"center"}
                      >
                        Visit Website <ExternalLinkIcon mx="2px" />
                      </Link>
                    </AccordionPanel>
                  ) : (
                    ""
                  )}
                </Box>
              </AccordionItem>
            ))}
          </Accordion>
        </Center>
      </Box>
    </>
  );
}

export default MyProjects;
