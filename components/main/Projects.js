import ProjectItem from "./projects/ProjectItem";
import { useMediaQuery } from "../../lib/useMediaQuery";
import ProjectsTitle from "./projects/ProjectsTitle";

const projects = [
  {
    link: "https://lapino.onrender.com",
    color: "#5c16c5",
    title: "Lapino",
    description:
      "The Lapino E-commerce website is built with Mern Stack and sells children's products.",
    techs: [
      "React",
      "Redux Toolkit",
      "Redux Saga",
      "ExpressJs",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "TypeScript",
    ],
    gitLink: "https://github.com/itloverman/lapino",
    bgPath: "/lapino.png",
  },
  {
    link: "https://netflix-adam-clone.vercel.app",
    color: "#1ed760",
    title: "Netflix React Clone",
    description:
      "Netflix React Clone is a cloned single page application of Netflix website using React and Redux for state management.",
    techs: [
      "React",
      "Redux",
      "Bootstrap",
      "Sass",
      "SwiperJs",
      "TMDB",
      "2embed",
      "TypeScript",
    ],
    gitLink: "https://github.com/itloverman/netflix",
    bgPath: "/netflix.webp",
  },
  {
    link: "https://tellmann.co.za/",
    color: "#61d6ed",
    title: "Tellmann",
    description:
      "Tellmann Shopify Ecommerce Agency Website. I've built the site to establish a basis to find new Web Development projects and promote Shopify services.",
    techs: ["NextJs", "Tailwind CSS", "Windy UI", "Nodemailer", "TypeScript"],
    gitLink: "https://github.com/itloverman/Tellman",
    bgPath: "/tellmann.png",
  },
  {
    link: "https://kidsliving.co.za/",
    color: "#f7ef4f",
    title: "Lunalemon",
    description:
      "Headless Web agency site utilizing Shopify's theme editor as a custom CMS. The site showcases my client oriented projects and promotes web development services.",
    techs: [
      "NextJs",
      "GraphQL",
      "Headless UI",
      "Trpc",
      "Shopify",
      "Tailwind CSS",
      "Yup",
      "Zod",
      "TypeScript",
    ],
    gitLink: "https://github.com/itloverman/kidslivingsite",
    bgPath: "/lunalemon.png",
  },
  {
    link: "https://withjoy.com",
    color: "#FF7A00",
    title: "Joy",
    description:
      "The Joy website is built with Gatsby and booking wedding ceremony, post and invite guests.",
    techs: [
      "Gatsby",
      "Tailwind CSS",
      "Yup",
      "Formik",
      "Nodemailer",
      "TypeScript",
    ],
    gitLink: "https://github.com/itloverman/withjoy",
    bgPath: "/withjoy.png",
  },
  {
    link: null,
    color: "#007FE3",
    title: "CHAT APP",
    description:
      "This app was created using Facebook's technology React Native and it's a study case for learning real time communication between users. It uses, of course, react native and a backend in Python with the Flask framework.",
    techs: [
      "React-native",
      "Redux",
      "Socket.io",
      "Python",
      "Flask",
      "SQLAlchemy",
      "Expo",
    ],
    gitLink: "https://github.com/itloverman/chat-app",
    bgPath: "/chat.jpg",
  },
];

export default function Projects() {
  const md = useMediaQuery(768);

  return (
    <section
      id="projects"
      className="flex justify-center items-center w-full mt-8"
    >
      <div className="max-w-7xl w-full flex flex-col justify-center items-center z-[9999] mt-14 overflow-hidden">
        <ProjectsTitle />
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            link={project.link}
            color={project.color}
            title={project.title}
            description={project.description}
            techs={project.techs}
            gitLink={project.gitLink}
            bgPath={project.bgPath}
            index={index}
            md={md}
          />
        ))}
      </div>
    </section>
  );
}
