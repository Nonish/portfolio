"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-10 lg:p-20 xl:px-40 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-4 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/myInsta.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">
              {" "}
              A Little Bit About Me and My Interests
            </h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg text-justify">
              {/* 👋Welcome to my portfolio! I&apos;m a dedicated Frontend Developer
              from India 🇮🇳 with three years of experience specializing in the
              MERN stack, with a strong emphasis on React.js and Javascript. I
              love to programming and am interested in create, build, maintain
              and collaborate to MERN stacks project to optimized and enhanced
              user experience. */}
              👋 Hello there... ,<br />
              🧑‍💻 As a skilled Frontend Engineer with 3 years of experience, I
              have a proven track record of creating robust and scalable web
              applications. My expertise lies in building full-stack
              applications using MongoDB, Express, React.js, and Node.js. I am
              proficient in front-end technologies such as HTML, CSS, and
              JavaScript and maintaining web applications with responsive design
              and cross browser compatibility for better user-experience which
              also boosted SEO for websites & blog&apos;s page for enrich user
              traffic. And also helpful in backend technologies including
              RESTful APIs and database management.
            </p>
            <p className="text-lg text-justify">
              {/* 🚀 Throughout my career, I&apos;ve had the opportunity to work on
              a variety of projects, ranging from small-scale web applications
              to enterprise-level solutions. My expertise lies in crafting
              elegant and performant user interfaces that not only meet but
              exceed user expectations. Also experience in building and
              maintaining web applications with responsive design and cross
              browser compatibility for better user-experience which also
              boosted SEO for websites & blog&apos;s page for enrich user
              traffic. */}
              🌱 I have a strong understanding of software development best
              practices and a keen eye for detail, allowing me to deliver
              high-quality code that meets client requirements. I am constantly
              learning and adapting to new technologies to stay ahead in this
              fast-paced industry. I&apos;ve had the opportunity to work on a
              variety of projects, ranging from small-scale web applications to
              enterprise-level solutions. My expertise lies in crafting elegant
              and performant user interfaces that not only meet but exceed user
              expectations.
            </p>
            <p className="text-lg text-justify">
              {/* 🔧 My technical skill set includes: <br />
              <b>MERN Stack:</b>Proficient in MongoDB, Express.js, React.js, and
              Node.js, with a focus on frontend development.
              <br />
              <b>Next.js: </b>Experienced in building server-rendered React
              applications with Next.js, enabling enhanced performance and SEO
              optimization.
              <br />
              <b>TypeScript: </b>Skilled in using TypeScript to bring type
              safety and enhanced developer experience to JavaScript projects.
              <br />
              <b>Responsive Design: </b>Proficient in creating responsive and
              mobile-friendly layouts using CSS frameworks like Sass or Tailwind
              CSS. */}
              🔧 Tech Stacks
              <br />
              <b>MERN Stack</b> :Proficient in MongoDB, Express.js, React.js,
              and Node.js, with a focus on frontend development.
              <br />
              <b>Next.js</b> :Experienced in building server-rendered React
              applications with Next.js, enabling enhanced performance and SEO
              optimization.
              <br />
              <b>TypeScript</b> :Learning and using TypeScript to bring type
              safety and enhanced developer experience to JavaScript projects.
              <br />
              <b>Responsive Design</b> :Proficient in creating responsive and
              mobile-friendly layouts using CSS frameworks like Sass or Tailwind
              CSS.
            </p>
            <p className="text-lg text-justify">
              🤝 I am passionate about creating innovative solutions and
              collaborating with cross-functional teams to deliver exceptional
              results. I am seeking new opportunities to further enhance my
              skills and contribute to exciting projects. Let&apos;s connect and
              discuss how I can add value to your team.
            </p>
            {/* <p className="text-lg text-justify">
              🤝I&apos;m currently seeking new opportunities where I can
              contribute my expertise in frontend development and collaborate
              with talented teams to build innovative solutions. If you&apos;re
              looking for a frontend engineer who is passionate about crafting
              delightful user experiences, let&apos;s connect!
            </p> */}
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">Happy Coding !!!.</span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="200pt"
                height="100pt"
                viewBox="0 0 568.000000 439.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,439.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M4826 3750 c-20 -22 -41 -40 -47 -40 -5 0 -44 -33 -87 -72 -43 -40
-116 -99 -162 -131 -136 -92 -173 -118 -206 -146 -17 -14 -64 -48 -103 -76
-40 -27 -98 -70 -129 -96 -31 -25 -102 -79 -157 -120 -266 -199 -364 -275
-410 -314 -126 -109 -160 -135 -170 -135 -6 0 -24 -13 -40 -30 -36 -38 -46
-38 -69 1 -20 33 -71 69 -98 69 -10 0 -25 -12 -35 -27 -9 -16 -31 -46 -47 -67
-17 -22 -32 -56 -36 -80 -9 -74 -30 -49 -74 92 -35 113 -48 142 -89 193 -48
59 -81 75 -94 43 -7 -20 8 -53 45 -95 16 -19 35 -54 42 -79 7 -25 18 -56 25
-70 7 -14 25 -61 39 -104 25 -78 48 -116 71 -116 6 0 33 28 60 61 44 58 47 65
41 106 -5 39 -3 44 18 53 13 5 27 14 31 19 13 22 26 9 54 -54 16 -36 36 -65
44 -65 20 0 123 79 247 190 47 42 117 101 155 130 39 30 86 66 105 82 19 15
76 58 125 94 50 37 115 88 145 114 30 25 71 57 90 70 19 14 67 49 106 80 39
30 106 80 149 110 43 30 132 94 199 142 66 48 136 97 154 110 102 72 202 152
202 162 0 17 -21 36 -40 36 -9 0 -33 -18 -54 -40z"
                  />
                  <path
                    d="M3843 3393 c-16 -6 -17 -69 -2 -112 14 -39 30 -29 49 28 11 35 11 43
-4 66 -17 25 -21 27 -43 18z"
                  />
                  <path d="M2836 2503 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z" />
                  <path
                    d="M2777 2375 c-20 -42 -57 -67 -110 -75 -34 -4 -46 -12 -72 -50 -18
-25 -38 -63 -45 -85 -19 -61 -28 -68 -76 -61 -34 4 -45 1 -62 -17 -25 -27 -76
-153 -67 -167 4 -6 1 -24 -6 -39 l-13 -29 -86 5 -86 6 -35 -42 c-20 -22 -41
-60 -48 -83 -11 -37 -48 -125 -58 -137 -1 -2 -20 9 -41 26 -20 16 -52 38 -70
47 -31 16 -34 16 -62 -4 -17 -12 -30 -25 -30 -30 0 -5 -9 -11 -19 -15 -11 -3
-36 -24 -58 -45 -21 -22 -43 -40 -50 -40 -7 0 -38 -21 -70 -48 -32 -26 -76
-60 -98 -76 -38 -28 -65 -50 -152 -123 -21 -18 -65 -53 -97 -78 -69 -53 -121
-100 -187 -169 -27 -27 -52 -45 -59 -41 -22 13 -119 170 -120 193 0 6 8 12 18
12 9 0 31 8 47 18 17 10 49 24 73 32 85 27 82 58 -7 76 -35 7 -71 20 -80 27
-9 8 -43 17 -76 19 -36 2 -79 14 -108 28 -36 18 -50 21 -59 12 -15 -15 3 -70
43 -129 16 -23 29 -45 29 -50 0 -10 -148 -73 -220 -95 -40 -11 -45 -17 -48
-44 -2 -19 11 -69 31 -120 19 -49 41 -107 48 -129 7 -22 21 -49 30 -60 9 -11
24 -36 32 -55 23 -54 54 -82 77 -70 28 15 29 31 4 82 -13 26 -24 60 -24 76 0
16 -7 35 -16 42 -8 8 -22 27 -30 44 -8 17 -21 42 -29 56 -8 14 -15 48 -15 76
0 61 7 67 118 107 l73 26 22 -26 c12 -14 29 -33 38 -42 8 -9 27 -37 42 -62 14
-25 33 -51 41 -59 21 -17 20 -74 0 -95 -21 -21 -59 -76 -79 -116 -15 -27 -14
-32 2 -60 28 -46 56 -47 138 -6 40 21 77 37 83 37 6 0 17 -10 23 -22 7 -13 33
-54 58 -93 25 -38 57 -91 71 -116 40 -72 57 -91 77 -87 33 6 26 44 -19 111
-94 141 -146 232 -147 260 -1 10 29 46 66 80 104 95 412 405 469 473 28 33 77
110 109 171 31 62 63 114 70 117 19 7 64 -62 78 -119 15 -59 37 -77 65 -51 28
24 61 105 78 188 30 141 78 175 184 127 24 -11 54 -18 65 -15 28 7 65 83 65
134 0 51 30 152 45 152 6 0 20 -7 31 -15 51 -39 111 10 128 105 9 49 42 100
65 100 11 0 33 -8 50 -17 26 -15 31 -22 26 -43 -8 -32 -23 -48 -29 -29 -13 42
-16 49 -23 49 -9 0 -43 -78 -43 -98 0 -15 67 -45 85 -39 6 3 28 30 48 60 48
72 51 123 8 155 l-30 22 16 45 c19 56 13 68 -10 20z m-1135 -962 c27 -24 22
-42 -27 -92 -24 -25 -82 -84 -127 -131 -46 -47 -112 -112 -148 -144 -113 -100
-181 -170 -191 -193 -11 -30 -27 -29 -39 3 -6 15 -19 38 -30 52 -11 13 -20 33
-20 42 0 17 199 213 237 233 24 13 108 82 158 128 35 33 153 118 164 119 3 0
13 -7 23 -17z m-771 -69 c13 -14 35 -30 48 -35 21 -9 22 -12 10 -24 -8 -7 -26
-17 -41 -20 -22 -6 -27 -3 -33 17 -4 12 -17 33 -28 46 -18 20 -19 24 -7 32 21
14 24 13 51 -16z m176 -503 c13 -19 23 -38 23 -43 0 -11 -63 -38 -107 -45 -49
-8 -52 17 -12 77 40 59 62 62 96 11z"
                  />
                  <path
                    d="M1888 2059 c-22 -12 -23 -35 -3 -73 8 -15 15 -34 15 -40 0 -14 48
-62 55 -55 2 3 9 37 15 77 9 56 9 76 0 87 -14 17 -57 19 -82 4z"
                  />
                </g>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML5
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS3
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Agora Stream
              </div>
              {/* <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div> */}
              {/* <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div> */}
              {/* <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div> */}
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              {/* <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div> */}
              {/* <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div> */}
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              {/* <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div> */}
              {/* <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div> */}
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MUI
              </div>
              <div className="rounded-xl py-1.5 px-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postman
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/2">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Frontend Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Developing <b>Pickzon</b> web app social media platform from
                    scratch for posting, streaming, sharing & chatting on web
                    using tech React.Js, MUIv5, socket.io & Node.Js etc.
                  </div>
                  {/* JOB DATE */}
                  {/* JOB COMPANY */}
                  <div className="p-2 rounded bg-white text-sm font-semibold w-fit flex items-center justify-center">
                    Getkart
                    <div className="ml-1 text-red-400 text-sm font-semibold">
                      2021 - Present
                    </div>
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2"></div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/2"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Web Developer (Internship)
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Developing dashboard for inventory, supply-chain and
                    attendance management with authentication on web using tech
                    Reactv18, Sementic-UI, Axios & Node.
                  </div>
                  {/* JOB DATE */}
                  {/* JOB COMPANY */}
                  <div className="p-2 rounded bg-white text-sm font-semibold w-fit flex items-center justify-center">
                    AAMPL
                    <div className="ml-1 text-red-400 text-sm font-semibold">
                      2021
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;

//  {/* EXPERIENCE LIST ITEM */}
//  <div className="flex justify-between h-48">
//  {/* LEFT */}
//  <div className="w-1/3 ">
//    {/* JOB TITLE */}
//    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
//      Freelancer{" "}
//    </div>
//    {/* JOB DESC */}
//    <div className="p-3 text-sm italic">
//      Creating Admin dashboard for security guards shift
//      management and online-live reporting on web using Typescript
//      and React.
//      <br />
//      Client : Austec services (Australia)
//    </div>
//    <div className="p-2 rounded bg-white text-sm font-semibold w-fit flex items-center justify-center">
//      Austec
//      <div className="ml-1 text-red-400 text-sm font-semibold">
//        2022 - 2023{" "}
//      </div>
//    </div>
//  </div>
//  {/* CENTER */}
//  <div className="w-1/6 flex justify-center">
//    {/* LINE */}
//    <div className="w-1 h-full bg-gray-600 rounded relative">
//      {/* LINE CIRCLE */}
//      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
//    </div>
//  </div>
//  {/* RIGHT */}
//  <div className="w-1/3 "></div>
// </div>