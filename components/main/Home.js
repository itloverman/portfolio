import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollIcon from "./home/ScrollIcon";
import {
  SiGithub,
  SiWhatsapp,
  SiDiscord,
  SiSkype,
  SiTelegram,
  SiLinkedin,
} from "react-icons/si";

const divVariants = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const innerDivVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

export default function Home() {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [alreadySeen, setAlreadySeen] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setAlreadySeen(true);
    }
    if (!inView && !alreadySeen) {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <>
      <ScrollIcon />
      <section
        id="home"
        className="flex text-center justify-center items-center w-full mt-28 font-home max-w-[1536px] mx-auto"
      >
        <motion.div
          variants={divVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
          className="flex justify-center mx-auto border-x-0 2xl:border-x-2 bg-home w-full h-[640px] bg-cover text-white"
        >
          <motion.div
            variants={innerDivVariants}
            initial="hidden"
            animate={controls}
            className="z-[9999] justify-center flex flex-col p-3 m-2 h-fit bg-black bg-opacity-75 rounded-md"
          >
            <h1 className="text-4xl sm:text-6xl font-bold">Adam Sims</h1>
            <h3 className="text-xl sm:text-2xl">Full Stack Engineer</h3>
            <div className="flex flex-wrap self-end my-2 w-full justify-center">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/brainstormbuddy"
                className={`px-2 hover:scale-125 cursor-pointer transition-all`}
              >
                <SiGithub color="white" size={30} />
              </a>
              {/* <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/adam-sims1203"
                className={`px-2 hover:scale-125 cursor-pointer transition-all`}
              >
                <SiLinkedin color="white" size={30} />
              </a> */}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://wa.me/+12766442638"
                className={`px-2 hover:scale-125 cursor-pointer transition-all`}
              >
                <SiWhatsapp color="white" size={30} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.discord.com/users/880275150786945064"
                className={`px-2 hover:scale-125 cursor-pointer transition-all`}
              >
                <SiDiscord color="white" size={30} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="live:.cid.73277abfdf98736"
                className={`px-2 hover:scale-125 cursor-pointer transition-all`}
              >
                <SiSkype color="white" size={30} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://t.me/adamsims1203"
                className={`px-2 hover:scale-125 cursor-pointer transition-all`}
              >
                <SiTelegram color="white" size={30} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
