import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiVuedotjs,
  SiNextdotjs,
  SiAngular,
  SiThreedotjs,
  SiGatsby,
  SiPostman,
  SiPhp,
  SiLaravel,
  SiExpress,
  SiNestjs,
  SiSwagger,
  SiPython,
  SiAmazonaws,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiBitbucket,
  SiJirasoftware,
  SiNotion,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import SkillsItem from "./skills/SkillsItem";

const skills = [
  {
    name: "html",
    Icon: SiHtml5,
    color: "#e6640a",
  },
  {
    name: "css",
    Icon: SiCss3,
    color: "#2760e5",
  },
  {
    name: "javascript",
    Icon: SiJavascript,
    color: "#ead41c",
  },
  {
    name: "typescript",
    Icon: SiTypescript,
    color: "#3881f5",
  },
  {
    name: "php",
    Icon: SiPhp,
    color: "#7f74a8",
  },
  {
    name: "python",
    Icon: SiPython,
    color: "#346998",
  },
  {
    name: "react",
    Icon: SiReact,
    color: "#5ad2ea",
  },
  {
    name: "redux",
    Icon: SiRedux,
    color: "#7046b2",
  },
  {
    name: "vuejs",
    Icon: SiVuedotjs,
    color: "#0ec95f",
  },
  {
    name: "nextjs",
    Icon: SiNextdotjs,
    color: "white",
  },
  {
    name: "Angular",
    Icon: SiAngular,
    color: "#eb2150",
  },
  // {
  //   name: "Gatsby",
  //   Icon: SiGatsby,
  //   color: "#663399",
  // },
  {
    name: "threejs",
    Icon: SiThreedotjs,
    color: "white",
  },

  {
    name: "laravel",
    Icon: SiLaravel,
    color: "#f56969",
  },
  {
    name: "expressjs",
    Icon: SiExpress,
    color: "white",
  },
  {
    name: "nodejs",
    Icon: FaNode,
    color: "#89bb3c",
  },
  {
    name: "nestjs",
    Icon: SiNestjs,
    color: "#d10632",
  },
  {
    name: "aws",
    Icon: SiAmazonaws,
    color: "white",
  },
  {
    name: "firebase",
    Icon: SiFirebase,
    color: "#fcb12d",
  },
  {
    name: "mongodb",
    Icon: SiMongodb,
    color: "#359e40",
  },
  {
    name: "mysql",
    Icon: SiMysql,
    color: "#4f94c9",
  },
  {
    name: "postgresql",
    Icon: SiPostgresql,
    color: "#175f96",
  },
  {
    name: "prisma",
    Icon: SiPrisma,
    color: "#6bb6df",
  },

  {
    name: "tailwind",
    Icon: SiTailwindcss,
    color: "#35b3eb",
  },
  {
    name: "bootstrap",
    Icon: SiBootstrap,
    color: "#833ad6",
  },
  {
    name: "swagger",
    Icon: SiSwagger,
    color: "#3cbd43",
  },
  {
    name: "postman",
    Icon: SiPostman,
    color: "#e66637",
  },
  {
    name: "git",
    Icon: SiGit,
    color: "#f24c2d",
  },
  {
    name: "bitbucket",
    Icon: SiBitbucket,
    color: "#377efa",
  },
  {
    name: "jirasoftware",
    Icon: SiJirasoftware,
    color: "#377efa",
  },
  {
    name: "notion",
    Icon: SiNotion,
    color: "white",
  },
];

const divVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Skills() {
  const [alreadySeen, setAlreadySeen] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const titleRef = useRef();
  const skillsDivRef = useRef();

  const parallax = (e) => {
    if (skillsDivRef && titleRef) {
      const y = (e.clientY * -1) / 100;
      const x = (e.clientX * -1) / 100;
      titleRef.current.style.transform = `translateX(${-x}px) translateY(${-y}px)`;
      skillsDivRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setAlreadySeen(true);
    }
    if (!inView && !alreadySeen) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    window.addEventListener("mousemove", parallax, false);
    return () => {
      window.removeEventListener("mousemove", parallax, false);
    };
  }, []);

  return (
    <section
      id="skills"
      className="flex self-center w-full justify-center items-center"
    >
      <motion.div
        variants={divVariants}
        initial="hidden"
        animate={controls}
        className="flex max-w-7xl w-full flex-col justify-center items-center z-[9999] mt-8"
      >
        <h1
          ref={titleRef}
          className="font-home font-bold text-4xl sm:text-6xl text-white"
        >
          SKILLS
        </h1>
        <div ref={skillsDivRef}>
          <div
            ref={ref}
            className="p-4 py-8 flex justify-center items-center flex-wrap max-w-3xl font-home text-white"
          >
            {skills.map((skill, index) => (
              <SkillsItem
                key={index}
                Icon={skill.Icon}
                name={skill.name}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
