import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Events", link: "#events" },
  { name: "Associations", link: "#associations" },
  { name: "Organizers", link: "#organizers" },
  { name: "Schedule", link: "#schedule" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Empowering innovation through collaborative coding, building the next generation of tech solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to all skill levels - from beginners to coding veterans, join us for an inclusive 36-hour innovation marathon",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Software & Hardware",
    description: "Domains of Projects are",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "36 Hours | 13th to 14th Sept",
    description: "Code. Build. Ship.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "CSE & IT Department",
    description: "Venue - Budge Budge Institute of Technology",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "CODE NEXUS",
    des: "Master the art of programming through timed coding challenges, minimal code solutions, debugging races, OS command tasks, and collaborative mini-projects. From algorithms to teamwork - prove your complete coding prowess. Includes: Coding contests, Code golf, Debugging, OS commands, Mini-projects",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 2,
    title: "TECH FUSION LAB",
    des: "Bridge software and hardware worlds through web challenges, documentation-based builds, microcontroller programming, circuit debugging, and IoT integrations. Adapt, learn, and innovate across the tech spectrum. Includes: Web skills, Hardware programming, Circuit design, IoT projects, Learning challenges",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 3,
    title: "BATTLE ROYALE ARENA",
    des: "Dominate the battlefield across multiple gaming platforms. Show your strategic thinking and lightning reflexes in competitive tournaments. Games: PUBG Mobile, FreeFire, Valorant",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "",
    sourceCode: "",
  },
  {
    id: 4,
    title: "BRAIN STORM QUIZ",
    des: "Test your tech knowledge, current affairs, and logical reasoning through rapid-fire rounds and surprise challenges. Multiple quiz rounds covering technology, general knowledge, and brain teasers",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
    sourceCode: "",
  },
] as const;

export const testimonials = [
  {
    quote: `Witnessing BBIT's hackathon was truly inspiring. The level of innovation, collaboration, and problem-solving demonstrated by students throughout the 36-hour event was remarkable. The Coders Club and EDC Cell organized an exceptional platform that brought out the best in participants. Seeing students tackle complex coding challenges, hardware integration, and work seamlessly in teams reminded me why events like these are crucial for technical education. This hackathon perfectly bridges the gap between classroom theory and real-world application.`,
    name: "Prof. Dr. Ashok Kumar Shaw",
    title: "Dean R&D, HOD (Mathematics & BSH)",
  },
  {
    quote: `BBIT's hackathon was a game-changer for me! The 36-hour coding marathon pushed my limits and taught me more than months of classroom learning. From debugging circuits to building full-stack applications, every challenge was perfectly designed. The mentorship from seniors and the collaborative environment made it an unforgettable experience. Can't wait for next year's edition!`,
    name: "Dr. Munsi Yusuf Alam",
    title: "H.O.D Cyber Security Department",
  },
  {
    quote: `The innovation and technical depth displayed at BBIT's hackathon impressed me greatly. Students demonstrated exceptional problem-solving skills across diverse domains - from IoT integrations to algorithmic challenges. The Coders Club and EDC Cell have created a platform that truly prepares students for industry challenges. The quality of projects and presentations was remarkable for an undergraduate event.`,
    name: "Dr. Jayanta Basak",
    title: "HOD of CSE Department",
  },
  {
    quote: `As a BBIT alumnus, seeing the current hackathon's scale and innovation fills me with pride. The event has evolved tremendously, now featuring cutting-edge challenges that mirror real industry problems. The combination of technical rigor and creative thinking showcased by participants reflects the institution's commitment to excellence. This hackathon is setting new standards for student-led tech events.`,
    name: "Mr. Sagar Chakraborty",
    title: "HOD of IT Department",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "codersclub",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "iic",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "edc",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "gdg",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "bbit",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "sih",
    img: "/sih.svg",
    nameImg: "/sihName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Akash Kumar",
    desc: "The Event planner and the Backend of the Coders' Club and the Hackathon",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Rohit Yaduvanshi",
    desc: "The president of the Coders' Club and the main executive of the Hackathon",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Suprabhat Paul",
    desc: "Event manager and the co-planner of the Hackathon and Campus organizer of GDG on Campus BBIT.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
