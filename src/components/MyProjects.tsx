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
  Tooltip,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { FaGithub } from "react-icons/fa";

interface IProjects {
  projectName: string;
  url?: string;
  urlDeploy?: string;
  type: string;
  frameWork: string;
}

function formatUrl(name: string): string {
  return "https://github.com/Ali7U/" + name.toLowerCase().replace(/\s+/g, "-");
}

export const projects: IProjects[] = [
  {
    projectName: "Fake Store",
    url: formatUrl("Fake Store"),
    urlDeploy: "https://fake-store-app-angular.netlify.app/",
    type: "Frontend",
    frameWork: "Angular",
  },
  {
    projectName: "E-Commerence",
    url: formatUrl("Angular-ECommerence"),
    type: "Frontend",
    frameWork: "Angular",
    urlDeploy: "https://angular-ecommerence.netlify.app/",
  },
  {
    projectName: "Email App",
    url: formatUrl("Angular_Email"),
    type: "Frontend",
    frameWork: "Angular",
    urlDeploy: "https://ali-email.netlify.app/",
  },
  {
    projectName: "Password Generator",
    url: formatUrl("Angular Password Generator"),
    type: "Frontend",
    frameWork: "Angular",
    urlDeploy:
      "https://65f271be3063436d5d709e6d--pass-generator-application.netlify.app",
  },
  {
    projectName: "Pizza Resturant",
    url: formatUrl("Frontend-Resturant-Management"),
    type: "Full-Stack",
    frameWork: "React - ExpressJS",
  },
  {
    projectName: "College System",
    url: formatUrl("College System "),
    type: "Full-Stack",
    frameWork: "React - ExpressJS",
  },
  {
    projectName: "Search Wikipedia App",
    url: formatUrl("Search Wikipedia App"),
    type: "Frontend",
    frameWork: "Angular",
    urlDeploy:
      "https://65f2bd66a7ffb3a13ec2ec9f--search-wikipedia-app2.netlify.app",
  },

  {
    projectName: "Weather App",
    url: formatUrl("Weather Application"),
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://weather-application.pages.dev",
  },
  {
    projectName: "Weather App 2",
    url: formatUrl("Weather App2"),
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://weather-app2.pages.dev",
  },

  {
    projectName: "E-commerance Food",
    url: formatUrl("E-commerance Food"),
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://e-commernce-app.pages.dev",
  },
  {
    projectName: "Shopping Cart Phones",
    url: formatUrl("Shopping Cart Phones"),
    type: "Frontend",
    frameWork: "React",
  },
  {
    projectName: "Coffee App",
    url: formatUrl("Coffee App"),
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://coffee-cart-5ep.pages.dev/cart",
  },
  {
    projectName: "Hospital Doctors Appoinmetns",
    url: formatUrl("Hospital Doctors Appoinmetns"),
    type: "Frontend",
    frameWork: "React",
  },
  {
    projectName: "Meme Generator",
    url: formatUrl("Meme Generator"),
    type: "Frontend",
    frameWork: "React",
  },
  {
    projectName: "Music Player App",
    url: formatUrl("Music Player App"),
    type: "Frontend",
    frameWork: "React",
  },
  {
    projectName: "Quiz App",
    url: formatUrl("Quiz App"),
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://65f26f873063436be2709b81--quiz-app-ali.netlify.app",
  },
  {
    projectName: "Books Store",
    url: formatUrl("Books Store"),
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://books-store.pages.dev/cart",
  },
  {
    projectName: "Calculatur",
    url: formatUrl("Calculatur"),
    type: "Frontend",
    frameWork: "React",
  },
  {
    projectName: "Pizza App",
    url: formatUrl("Pizza App"),
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://react-pizza-cart.pages.dev/",
  },
];

const publicProjects: IProjects[] = [
  {
    projectName: "Siwar",
    type: "Full-Stack",
    frameWork: "Angular, NestJS",
    urlDeploy: "https://siwar.ksaa.gov.sa/home",
  },
  {
    projectName: "Riyadh Dictionary",
    type: "Frontend",
    frameWork: "React",
    urlDeploy: "https://dictionary.ksaa.gov.sa",
  },
];

function MyProjects() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <Box m={25}>
        <Center>
          <Heading size="lg">Public Projects:</Heading>
        </Center>
        <Center pb={10}>
          <Accordion w={["100%", "100%", "75%", "50%"]}>
            {publicProjects.map((item) => (
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
                  <AccordionPanel
                    pb={4}
                    display={"flex"}
                    flexWrap={"wrap"}
                    flexDirection={"row-reverse"}
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Link href={"https://github.com/Ali7U"}>
                        <FaGithub />
                      </Link>
                    </Box>
                    <Box>
                      type: {item.type} - {item.frameWork}
                    </Box>
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
        <Center>
          <Heading size="lg">Personal Projects:</Heading>
        </Center>
        <Center>
          <Accordion w={["100%", "100%", "75%", "50%"]}>
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
                  <AccordionPanel
                    pb={4}
                    display={"flex"}
                    flexWrap={"wrap"}
                    flexDirection={"row-reverse"}
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Tooltip label={"Review the code"} hasArrow>
                        <Link href={item.url} isExternal>
                          <FaGithub />
                        </Link>
                      </Tooltip>
                    </Box>
                    <Box>
                      type: {item.type} - {item.frameWork}
                    </Box>
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
