"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Pickzon Social App",
    desc: "Responsive Website with CMS page feature and web login for use as web application includes story ,chatting and posting create by ReactJs, Mui and NodeJs.",
    img: "/pickzonLogin.png",
    link: "https://www.pickzon.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Admin Dashboard",
    desc: "Responsive Admin dashboard application for controlling & monitoring user interactions and manage app functionality using NextJs, Mui, Re-charts, React-hook-form.",
    img: "/adminpanel.png",
    link: "https://admin.pickzon.com/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Dating Website",
    desc: "Responsive dating website which Transform chats into relationships. Send and receive instant date requests to nearby restaurants and experiences create by ReactJs.",
    img: "/luvHut.png",
    link: "https://theluvhut.com/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "MERN Auth Project",
    desc: "Using react-vite with redux-toolkit and node with jwt , bcrypt & nodemon.",
    img: "/dashboard.png",
    link: "https://github.com/Nonish/MERN-Auth-Project",
  },
  {
    id: 5,
    color: "from-red-300 to-pink-300",
    title: "Nike Landing Page",
    desc: "Responsive website landing page in ReactJS and TailwindCss.",
    img: "/landingPage.png",
    link: "https://nonish.github.io/nike-landing-page-tailwindCSS/",
  },
  {
    id: 6,
    color: "from-pink-300 to-purple-300",
    title: "Blog Website",
    desc: "Blog website using dynamic routing through admin panel for fast reload and enrich in SEO created by NextJs.",
    img: "/blogs.png",
    link: "https://www.pickzon.com/blogs",
  },
  {
    id: 7,
    color: "from-pink-300 to-purple-300",
    title: "",
    desc: "",
    img: "",
    link: "",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-2 text-white text-center">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  {item.img.length && <div className="relative w-80 h-50 md:w-96 md:h-50 lg:w-[600px] lg:h-[350px] xl:w-[800px] xl:h-[420px] flex justify-center">
                    <Image src={item.img} alt="" fill className="object-contain" />
                  </div>}
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[800px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-1 text-sm md:p-1 md:text-md lg:p-2 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Redirect</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
