import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Tag,
  HStack,
  Stack,
  useColorModeValue,
  Center,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import SkillsGroup from "./shared/SkillsGroup";

const MotionBox = motion(Box) as any;

export default function Experience() {
  const cardBg = useColorModeValue("white", "gray.700");
  const cardBorder = useColorModeValue("gray.200", "gray.600");
  const headingColor = useColorModeValue("#1f2937", "#F0F0F0");

  const cards = [
    {
      title: "Experience",
      big: "1+",
      type: "Years",
      tags: ["Frontend", "Backend"],
      content: "Hands-on experience building scalable web applications.",
    },
    {
      title: "Front-End",
      contentComponent: <SkillsGroup isFront />,
      type: "Skills",
      tags: ["HTML5", "CSS3", "React", "Angular", "Chakra UI", "Tailwind"],
    },
    {
      title: "Back-End",
      contentComponent: <SkillsGroup isBack />,
      type: "Skills",
      tags: ["Node.js", "Express", "NestJS", "SQL", "MongoDB"],
    },
  ];

  return (
    <Box p={[4, 8]}>
      <Center mb={6}>
        <Heading color={headingColor}>About & Experience</Heading>
      </Center>

      <Box px={[2, 10]} mb={10}>
        <Text
          fontSize={["lg", "2xl"]}
          p={[3, 6]}
          border={"1px solid "}
          borderColor={"gray.400"}
          borderRadius={12}
          shadow={"lg"}
          color={headingColor}
          opacity={0.8}
          height={200}
          overflow={"auto"}
          textOverflow={"ellipsis"}
        >
          I am a Software Engineer with 1+ year of experience building scalable
          web applications using Angular, React, NextJS, NestJS, ASP.NET, and
          modern databases like SQL Server, MySQL, and MongoDB. I focus on
          creating responsive, high-performance interfaces and optimizing
          backend APIs to deliver efficient and reliable solutions.
        </Text>
      </Box>

      <SimpleGrid columns={[1, 1, 3, 3]} spacing={10} justifyItems="center">
        {cards.map((c, i) => (
          <MotionBox
            key={i}
            role="group"
            position="relative"
            overflow="hidden"
            borderRadius="md"
            bg={cardBg}
            borderWidth="1px"
            borderColor={cardBorder}
            boxShadow="sm"
            minH="220px"
            w={["95%", "90%", "320px"]}
            display="flex"
            flexDirection="column"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            _hover={{ transform: "translateY(-6px)", boxShadow: "lg" }}
          >
            <Box
              px={4}
              py={4}
              bg={useColorModeValue("gray.50", "gray.800")}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flexDirection="row"
              overflow={"scroll"}
            >
              <Heading size="md">{c.title}</Heading>
              {c.big && (
                <Heading size="lg" color="#99DBF5">
                  {c.big}
                </Heading>
              )}
            </Box>

            <Stack spacing={3} p={4} flex="1">
              {c.content && <Text fontSize="sm">{c.content}</Text>}

              {c.contentComponent && (
                <Box display={"flex"} justifyContent={"center"}>
                  {c.contentComponent}
                </Box>
              )}

              {c.tags && (
                <HStack spacing={2} wrap="wrap" pt={2}>
                  {c.tags.map((t) => (
                    <Tag key={t} size="sm" variant="subtle" colorScheme="cyan">
                      {t}
                    </Tag>
                  ))}
                </HStack>
              )}

              <Flex mt="auto" pt={2} align="center">
                <Text
                  fontSize="xs"
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  {c.type}
                </Text>
              </Flex>
            </Stack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
