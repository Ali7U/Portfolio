import MagneticButton from "../components/MagneticButton";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import StackConstellation from "../components/StackConstellation";
import {
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiSwagger,
  SiExpo,
} from "react-icons/si";
import { TbComponents } from "react-icons/tb";

const TOOLS = [
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "PrimeNG", Icon: TbComponents },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Docker", Icon: SiDocker },
  { name: "Postman", Icon: SiPostman },
  { name: "SwaggerUI", Icon: SiSwagger },
  { name: "Expo", Icon: SiExpo },
];

interface Props {
  navigate: (r: string) => void;
}

export default function HomePage({ navigate }: Props) {
  return (
    <div className="page max-w-300 mx-auto">
      <section className="relative pt-15 pb-20">
        <Reveal>
          <span className="eyebrow">Full-stack engineer · Riyadh, KSA</span>
          <div className="mt-6">
            <h1 className="text-[clamp(56px,10vw,148px)] leading-[0.92] tracking-[-0.045em] font-medium">
              Software engineered
              <br />
              for performance,
              <br />
              scale, and{" "}
              <span className="text-(--accent) italic font-normal">craft.</span>
            </h1>
          </div>
          <p className="mt-7 text-lg max-w-[44ch] leading-[1.55] text-(--fg-dim)">
            Hi, I'm{" "}
            <span className="font-medium text-(--fg)">Ali AlGuadeb </span>— a
            full-stack engineer specializing in Angular, React, Next.js and
            .NET.
          </p>
          <div className="flex gap-3 mt-9 flex-wrap">
            <MagneticButton
              className="btn-primary"
              onClick={() => navigate("projects")}
            >
              See selected projects
              <svg
                className="arrow"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M3 13L13 3M13 3H5M13 3V11" strokeLinecap="round" />
              </svg>
            </MagneticButton>
            <MagneticButton
              className="btn-ghost"
              onClick={() => navigate("about")}
              strength={0.3}
            >
              About me
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="border-t border-(--line) grid grid-cols-[1.4fr_1fr_1fr] gap-8 mt-20 pt-7 max-[720px]:grid-cols-1">
            <div>
              <span className="eyebrow block mb-2.5">Who I am</span>
              <p className="text-[15px] leading-[1.55] max-w-[38ch] text-(--fg-dim)">
                Software engineer from{" "}
                <span className="font-medium text-(--fg) ">
                  Riyadh, Saudi Arabia
                </span>
                , with a background in full-stack development and modern product
                engineering.
              </p>
            </div>
            <div>
              <span className="eyebrow block mb-2.5">Stack</span>
              <div className="mt-3">
                <StackConstellation />
              </div>
            </div>
            <div>
              <span className="eyebrow block mb-2.5">What I focus on</span>
              <p className="text-[15px] leading-[1.55] max-w-[38ch] text-(--fg-dim)">
                Building applications end-to-end — from database schema to UI
                polish. I care about architectures, real performance, and
                systems that hold up as they grow.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal delay={80}>
        <div className="mt-16 mb-16">
          <span className="eyebrow">Tools</span>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {TOOLS.map((tool) => (
              <div key={tool.name} className="tool-pill">
                <tool.Icon size={14} />
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Footer navigate={navigate} />
    </div>
  );
}
