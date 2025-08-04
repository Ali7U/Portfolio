import { Box, SimpleGrid, Tooltip } from "@chakra-ui/react";
import {
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

import {
  SiChakraui,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPrisma,
  SiTypescript,
  SiDotnet,
} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { SiSwagger } from "react-icons/si";

interface SkillsGroupProps {
  isFront?: boolean;
  isBack?: boolean;
  isTools?: boolean;
  isMain?: boolean;
}

const skills = [
  { icon: <AiFillHtml5 fontSize={50} />, label: "HTML5", isFront: true },
  { icon: <FaCss3Alt fontSize={50} />, label: "CSS3", isFront: true },
  {
    icon: <SiJavascript fontSize={50} />,
    label: "JavaScript",
    isFront: true,
    isBack: true,
  },
  {
    icon: <SiTypescript fontSize={50} />,
    label: "TypeScript",
    isFront: true,
    isBack: true,
  },
  { icon: <FaReact fontSize={50} />, label: "React", isFront: true },
  { icon: <FaAngular fontSize={50} />, label: "Angular", isFront: true },
  { icon: <SiChakraui fontSize={50} />, label: "Chakra UI", isFront: true },
  { icon: "pi pi-prime", label: "PrimeNG", isFront: true },
  {
    icon: <SiTailwindcss fontSize={50} />,
    label: "Tailwind CSS",
    isFront: true,
  },
  { icon: <FaBootstrap fontSize={50} />, label: "Bootstrap", isFront: true },

  { icon: <FaNode fontSize={50} />, label: "Node.js", isBack: true },
  { icon: <SiExpress fontSize={50} />, label: "Express", isBack: true },
  { icon: <SiPrisma fontSize={50} />, label: "Prisma", isBack: true },
  { icon: <TbSql fontSize={50} />, label: "SQL Server", isBack: true },
  { icon: <SiMongodb fontSize={50} />, label: "MongoDB", isBack: true },
  { icon: <SiMysql fontSize={50} />, label: "MySQL", isBack: true },
  { icon: <DiPostgresql fontSize={50} />, label: "PostgreSQL", isBack: true },
  { icon: <TbBrandCSharp fontSize={50} />, label: "C#", isBack: true },
  { icon: <SiDotnet fontSize={50} />, label: ".NET", isBack: true },

  { icon: <SiPostman fontSize={50} />, label: "Postman", isBack: true },
  { icon: <SiSwagger fontSize={50} />, label: "Swaagger", isBack: true },
];

export default function SkillsGroup({
  isFront,
  isBack,
  isMain,
}: SkillsGroupProps) {
  const filtered = skills.filter((skill) => {
    if (isFront) return skill.isFront;
    if (isBack) return skill.isBack;
    return true; // default: show all
  });

  return (
    <SimpleGrid
      templateColumns={isMain ? "repeat(7, 55px)" : "repeat(4, 55px)"}
      gap={1}
      cursor={"pointer"}
    >
      {filtered.map((skill, idx) => (
        <Tooltip key={idx} label={skill.label} hasArrow>
          {skill.label === "PrimeNG" ? (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <i className="pi pi-prime" style={{ fontSize: "40px" }}></i>
            </Box>
          ) : (
            <Box p={1}>{skill.icon}</Box>
          )}
        </Tooltip>
      ))}
    </SimpleGrid>
  );
}
