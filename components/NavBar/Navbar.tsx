import { motion } from "framer-motion";
import LINK from "next/link";
import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MenuButton } from "./MenuButton";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const unorderedList = {
    hidden: {
      opacity: 0,
      height: 0,
      margin: 0,
      transition: {
        duration: 0.557,
        delayChildren: 0.452,
        staggerChildren: -0.113,
      },
    },
    show: {
      opacity: 1,
      height: "auto",
      margin: "auto",
      transition: {
        duration: 0.553,
        staggerChildren: 0.113,
      },
    },
  };

  const listItem = {
    hidden: {
      opacity: 0,
      pointerEvents: "none",
      transition: { duration: 0.0115 },
    },
    show: {
      opacity: 1,
      pointerEvents: "auto",
      transition: { duration: 0.09 },
    },
  };

  const navbar = () => {
    return (
      <motion.nav
        layout
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.5,
        }}
        whileInView="visible"
        className="w-[100vw] h-max py-3 bg-primary fixed top-0 z-50 left-[calc(-50vw+50%)]"
      >
        <motion.div
          layout
          className="w-[90vw] max-w-[1536px] mx-auto flex items-center justify-between"
        >
          <LINK href="/">
            <a className="font-dancingScript text-display-7">JP</a>
          </LINK>
          <div className="md:hidden">
            <MenuButton
              isOpen={open}
              onClick={() => setOpen(!open)}
              strokeWidth="4"
              color="#fff"
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </div>
          <ul className="hidden md:flex gap-lg place-end items-center">
            <li>
              <LINK href="#portfolio">
                <a className="-scroll-mt-8">Work</a>
              </LINK>
            </li>
            <li>
              <LINK href="#about">About</LINK>
            </li>
            <li>
              <a
                href="https://github.com/JeremyTheWizard"
                target="_blank"
                className="cursor-pointer"
                onClick={() => {}}
              >
                <AiFillGithub size="2.25rem" />
              </a>
            </li>
            <li>
              <LINK href="#contact">
                <a className="hidden md:inline border-2 border-secondary px-2 rounded text-secondary hover:bg-secondary-light hover:bg-opacity-5 duration-300">
                  Contact
                </a>
              </LINK>
            </li>
          </ul>
        </motion.div>
        <motion.ul
          layout
          variants={unorderedList}
          initial={"hidden"}
          animate={open ? "show" : "hidden"}
          className="flex flex-col items-center space-y-sm my-sm"
        >
          <motion.li variants={listItem}>
            <LINK href="#portfolio">
              <a
                onClick={() => {
                  setOpen(false);
                }}
              >
                Work
              </a>
            </LINK>
          </motion.li>
          <motion.li variants={listItem}>
            <LINK href="#about">
              <a onClick={() => setOpen(false)}>About</a>
            </LINK>
          </motion.li>
          <motion.li variants={listItem}>
            <a
              href="https://github.com/JeremyTheWizard"
              target="_blank"
              className="cursor-pointer"
              onClick={() => {}}
            >
              <AiFillGithub size="2.25rem" />
            </a>
          </motion.li>
          <motion.li variants={listItem}>
            <LINK href="#contact">
              <a
                onClick={() => setOpen(false)}
                className="border-2 border-secondary px-2 rounded text-secondary hover:bg-secondary-light hover:bg-opacity-5 duration-300"
              >
                Contact
              </a>
            </LINK>
          </motion.li>
        </motion.ul>
      </motion.nav>
    );
  };

  return <>{navbar()}</>;
};
