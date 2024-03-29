"use client";

import Image from "next/image";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import useScreenSize from "@/hooks/useScreenSize";

const Homepage = () => {
  const [windowWidth] = useScreenSize();
  function RedoAnimText({ delay }) {
    const textIndex = useMotionValue(0);
    const texts = [
      "Frontend Engineer 👨‍💻",
      "UI Designer 🎨",
      "Problem Solver 🧮",
      "Tech Enthusiast 🤖",
      "Quick Learner ⚡",
      "Gamer 🎮",
    ];

    const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
      baseText.get().slice(0, latest)
    );
    const updatedThisRound = useMotionValue(true);

    animate(count, 60, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return <motion.span className="inline h-9">{displayText}</motion.span>;
  }


  // const onHandleDownload = () => {
  //   const pdfUrl = "https://nonish.github.io/resume/";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "Nonish_Jain_Resume.pdf"; // specify the filename
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative flex justify-center items-center">
          <Image src="/myHeroColor.png" alt="" className="rounded-2xl  object-cover overflow-hidden" width={windowWidth > 820 ? 400 : windowWidth >= 768 ? 300 : 200} height={100} />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-2  justify-center">
          {/* TITLE */}
          <h3 className="text-2xl md:text-3xl font-semibold"> 👋 Hey there, I&apos;m </h3>
          <h1 className="text-5xl md:text-8xl font-bold">
            <span className="">Nonish</span> Jain
          </h1>
          {/* DESC */}
          <h2 className="text-2xl md:text-3xl font-semibold h-9">
            <RedoAnimText delay={1} />
          </h2>
          <p className="md:text-xl mb-2">
            {/* Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence. */}
            I&apos;m a Frontend Engineer from India 🇮🇳. I love programming and am interested in create, build, maintain and collaborate to MERN stacks project to optimized and enhanced user experience. Do stop by and have a look at my portfolio please. 😀
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-6">
            <a href="https://nonish.github.io/resume/" target="_blank" download>
              <button
                // onClick={onHandleDownload}
                className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                My Resume
              </button>
            </a>
            <Link href={"/contact"}>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;