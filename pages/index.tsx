import useMouse from "@react-hook/mouse-position";
import { motion, Variants } from "framer-motion";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Navbar } from "../components/NavBar/Navbar";
import { Portfolio } from "../components/Portfolio/Portfolio";

const Home: NextPage = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "project">(
    "default"
  );
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowAll(true), 1000);
  }, []);

  const ref = useRef(null);
  const mouse = useMouse(ref);

  let mouseXPosition = mouse.clientX!;
  let mouseYPosition = mouse.clientY!;

  const variants: Variants = {
    default: {
      height: 0,
      width: 0,
      opacity: 0,
      x: mouseXPosition,
      y: mouseYPosition,
    },
    project: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#000",
      height: 120,
      width: 120,
      x: mouseXPosition && mouseXPosition - 60,
      y: mouseYPosition && mouseYPosition - 60,
    },
  };

  const projectEnter = () => {
    setCursorText("View");
    setCursorVariant("project");
  };

  const projectLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  const gradient1 =
    "linear-gradient(\n  125deg,\n  hsl(0deg 0% 100%) 1%,\n  hsl(0deg 0% 77%) 49%,\n  hsl(0deg 0% 45%) 51%,\n  hsl(0deg 0% 45%) 49%,\n  hsl(0deg 0% 77%) 51%,\n  hsl(0deg 0% 100%) 99%\n)";

  const gradient2 =
    "linear-gradient(\n  125deg,\n  hsl(0deg 0% 0%) 0%,\n  hsl(0deg 0% 0%) 10%,\n  hsl(0deg 0% 0%) 32%,\n  hsl(0deg 0% 0%) 69%,\n  hsl(0deg 0% 0%) 88%,\n  hsl(0deg 0% 0%) 100%\n)";

  return (
    <div
      ref={ref}
      className={`w-[100vw] relative left-[calc(-50vw+50%)] ${
        !showAll && "mb-[-6rem]"
      }`}
    >
      <motion.div
        className="w-[100vw] h-[100vh] overflow-hidden absolute z-[-1] flex flex-col items-center justify-center"
        animate={{ background: [gradient1, gradient2] }}
        transition={{ duration: 1, delay: 0.25, ease: "easeIn" }}
      >
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-dancingScript text-display-1 text-transparent bg-clip-text bg-gradient-to-br from-black to-[#a19e9e] p-sm"
        >
          JP
        </motion.h1>
      </motion.div>
      <motion.div
        variants={variants}
        className="drop-shadow-2xl fixed z-[999] flex flex-row align-content-center justify-content-center top-0 left-0 rounded-full bg-white text-center pointer-events-none"
        animate={cursorVariant}
      >
        <span className="flex m-auto pointer-events-none">{cursorText}</span>
      </motion.div>
      <div className="w-[90vw] max-w-[1536px] mx-auto overflow-hidden">
        <div className="h-[100vh] overflow-hidden flex flex-col justify-center">
          <Navbar />
          <motion.h1
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: "anticipate", delay: 0.5 }}
            className="drop-shadow-2xl text-display-6 sm:text-display-5 md:text-display-4 lg:text-display-3 2xl:text-display-1"
          >
            <span className="text-secondary">NEXT-LEVEL</span> DESIGN &
            ENGINEERING
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-xs text-display-9 sm:text-display-8 md:text-display-6 !font-normal"
          >
            I'm Jeremy, a professional full-stack developer who specializes in
            web3 and blockchain.
          </motion.p>
        </div>
        {showAll && (
          <div className="space-y-40 sm:space-y-xl">
            <Portfolio
              projectEnter={projectEnter}
              projectLeave={projectLeave}
            />
            <About />
            <Contact />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
