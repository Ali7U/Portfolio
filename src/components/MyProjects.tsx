import React from "react";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  Tag,
  HStack,
  Stack,
  Link as ChakraLink,
  useColorModeValue,
  VStack,
  Center,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export interface IProject {
  projectName: string;
  url?: string; // repo
  urlDeploy?: string; // live
  type: string;
  description?: string;
  tech?: string[];
  image?: string;
}

function formatUrl(name: string): string {
  return "https://github.com/Ali7U/" + name.toLowerCase().replace(/\s+/g, "-");
}

// export const publicProjects: IProject[] = [
//   {
//     projectName: "Siwar",
//     type: "Full-Stack",
//     frameWork: "Angular, NestJS",
//     urlDeploy: "https://siwar.ksaa.gov.sa/home",
//     description: "Government project (Siwar)",
//     tech: ["Angular", "NestJS"],
//   },
//   {
//     projectName: "Riyadh Dictionary",
//     type: "Frontend",
//     frameWork: "React",
//     urlDeploy: "https://dictionary.ksaa.gov.sa",
//     description: "Frontend dictionary app",
//     tech: ["React"],
//   },
// ];

export const projects: IProject[] = [
  {
    projectName: "Fake Store",
    url: formatUrl("Fake Store"),
    urlDeploy: "https://fake-store-app-angular.netlify.app/",
    type: "Frontend",
    image: "Fake-Store",
    description: "E-commerce demo with products listing.",
    tech: ["Angular"],
  },
  {
    projectName: "Email App",
    url: formatUrl("Angular_Email"),
    type: "Frontend",
    image: "Email-App",
    urlDeploy: "https://ali-email.netlify.app/",
    description: "Simple email client UI demo.",
    tech: ["Angular"],
  },
  {
    projectName: "Password Generator",
    url: formatUrl("Angular Password Generator"),
    type: "Frontend",
    image: "password-generator",
    urlDeploy:
      "https://65f271be3063436d5d709e6d--pass-generator-application.netlify.app",
    description: "Password generator utility built with Angular",
    tech: ["Angular"],
  },
  {
    projectName: "Pizza Resturant",
    url: formatUrl("Frontend-Resturant-Management"),
    type: "Full-Stack",
    description: "Restaurant management frontend (React) + Express backend",
    tech: ["React", "Express"],
  },
  {
    projectName: "College System",
    url: formatUrl("College System"),
    type: "Full-Stack",
    description: "College management system (frontend + backend)",
    tech: ["React", "Express"],
  },
  {
    projectName: "Search Wikipedia App",
    url: formatUrl("Search Wikipedia App"),
    type: "Frontend",
    image: "Wikipedia",
    urlDeploy:
      "https://65f2bd66a7ffb3a13ec2ec9f--search-wikipedia-app2.netlify.app",
    description: "Wikipedia search UI built with Angular",
    tech: ["Angular"],
  },

  {
    projectName: "Weather App",
    url: formatUrl("Weather App2"),
    type: "Frontend",
    image: "Weather-App",
    urlDeploy: "https://weather-app2.pages.dev",
    description: "Another weather app demo",
    tech: ["React"],
  },

  {
    projectName: "Shopping Cart Phones",
    url: formatUrl("Shopping Cart Phones"),
    type: "Frontend",
    description: "Shopping cart demo for phones",
    tech: ["React"],
  },
  {
    projectName: "Coffee App",
    url: formatUrl("Coffee App"),
    type: "Frontend",
    urlDeploy: "https://coffee-cart-5ep.pages.dev/cart",
    description: "Coffee store cart demo",
    tech: ["React"],
  },
  {
    projectName: "Hospital Doctors Appointments",
    url: formatUrl("Hospital Doctors Appoinmetns"),
    type: "Frontend",
    description: "Hospital appointments frontend",
    tech: ["React"],
  },

  {
    projectName: "Quiz App",
    url: formatUrl("Quiz App"),
    type: "Frontend",
    urlDeploy: "https://65f26f873063436be2709b81--quiz-app-ali.netlify.app",
    description: "Quiz application demo",
    tech: ["React"],
  },
  {
    projectName: "Books Store",
    url: formatUrl("Books Store"),
    type: "Frontend",
    urlDeploy: "https://books-store.pages.dev/cart",
    description: "Books store demo",
    tech: ["React"],
  },
  {
    projectName: "Pizza App",
    url: formatUrl("Pizza App"),
    type: "Frontend",
    urlDeploy: "https://react-pizza-cart.pages.dev/",
    description: "Pizza ordering demo",
    tech: ["React"],
  },
];

// export const allProjects = [...,publicProjects ...projects];

const MotionBox = motion(Box) as any;

export default function ProjectsGrid() {
  const cardBg = useColorModeValue("white", "gray.700");
  const cardBorder = useColorModeValue("gray.200", "gray.600");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [zoomSrc, setZoomSrc] = React.useState<string | null>(null);

  const handleZoom = (src: string) => {
    setZoomSrc(src);
    onOpen();
  };
  return (
    <Box p={[4, 8]}>
      <Center>
        <Heading mb={6}>Projects</Heading>
      </Center>
      <Box>
        <SimpleGrid columns={{ base: 1 }} spacing={6} justifyItems="center">
          {projects.map((p, idx) => (
            <MotionBox
              key={idx}
              role="group"
              position="relative"
              overflow="hidden"
              borderRadius="md"
              bg={cardBg}
              w={"80%"}
              borderWidth="1px"
              borderColor={cardBorder}
              boxShadow="sm"
              transition="transform 0.22s ease, box-shadow 0.22s ease"
              minH="200px"
              h={p.image ? [380, 550] : 100}
              display="flex"
              flexDirection="column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              //  ={{ duration: 0.45, delay: idx * 0.06 }}
              _hover={{ transform: "translateY(-6px)", boxShadow: "lg" }}
            >
              <Box
                height="90px"
                bg={useColorModeValue("gray.50", "gray.800")}
                display="flex"
                alignItems="center"
                h={p.image ? [415, 440] : 100}
                justifyContent="center"
                pb={3}
                flexDirection={"column"}
              >
                {p.image ? (
                  <Box
                    w={"100%"}
                    overflow={"scroll"}
                    h={[250, 400]}
                    onClick={() => handleZoom(`/assets/${p.image}.png`)}
                  >
                    <Image
                      h={[250, "fit-content"]}
                      src={`/assets/${p.image}.png`}
                    />
                  </Box>
                ) : (
                  ""
                )}

                <Heading size="md" textAlign="center">
                  {p.projectName}
                </Heading>
              </Box>

              <Stack spacing={2} p={4} flex="1">
                {p.description && (
                  <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.700", "gray.200")}
                  >
                    {p.description}
                  </Text>
                )}

                <HStack spacing={2} wrap="wrap">
                  <Tag size="sm" colorScheme="subtle">
                    {p.type}
                  </Tag>
                  {p.tech?.map((t) => (
                    <Tag key={t} size="sm" variant="subtle" colorScheme="cyan">
                      {t}
                    </Tag>
                  ))}
                </HStack>
              </Stack>

              <VStack
                position="absolute"
                bottom={3}
                left={0}
                right={0}
                align="center"
                spacing={3}
                opacity={0}
                transition="opacity 0.18s ease, transform 0.18s ease"
                transform="translateY(6px)"
                _groupHover={{ opacity: 1, transform: "translateY(0)" }}
                px={3}
              >
                <HStack spacing={3}>
                  {p.url && (
                    <ChakraLink href={p.url} isExternal>
                      <Button
                        size="sm"
                        leftIcon={<FaGithub />}
                        bg="whiteAlpha.900"
                        color="black"
                      >
                        Code
                      </Button>
                    </ChakraLink>
                  )}
                  {p.urlDeploy && (
                    <ChakraLink href={p.urlDeploy} isExternal>
                      <Button
                        size="sm"
                        leftIcon={<ExternalLinkIcon />}
                        bg="whiteAlpha.900"
                        color="black"
                      >
                        Live
                      </Button>
                    </ChakraLink>
                  )}
                </HStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
        <ModalOverlay />
        <ModalContent
          bg={"transparent"}
          boxShadow={"none"}
          display={"grid"}
          justifyContent={"center"}
        >
          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={5}
            wheel={{ step: 0.2 }}
            doubleClick={{ mode: "zoomIn" }}
            pinch={{ step: 5 }}
          >
            <TransformComponent>
              <Image
                src={zoomSrc ?? ""}
                maxH="90vh"
                maxW="90vw"
                mx="auto"
                cursor="grab"
              />
            </TransformComponent>
          </TransformWrapper>
        </ModalContent>
      </Modal>
    </Box>
  );
}
