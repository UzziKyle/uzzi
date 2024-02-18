import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../util/useMediaQuery";

const burgerIcon = { hover: { width: 36 } };
const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <nav className="flex justify-between items-center py-6 mx-8 md:mx-12 lg:mx-24">
      <div className="z-10">
        <h1 className="text-lg font-bold">
          <a href="/">UZZI</a>
        </h1>
      </div>

      {/* Checks if in desktop */}
      {matches && (
        <ul className="flex gap-x-12">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog/">Blog</a>
          </li>
          <li>
            <a href="/about/">About</a>
          </li>
        </ul>
      )}

      {/* Checks if in mobile */}
      {!matches && (
        <motion.div
          whileHover="hover"
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="group space-y-1 cursor-pointer z-10"
        >
          <motion.span
            variants={burgerIcon}
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block bg-black h-1 w-9"
          ></motion.span>
          <motion.span
            variants={burgerIcon}
            animate={{ opacity: toggled ? 0 : 1 }}
            className="block bg-black h-1 w-6"
          ></motion.span>
          <motion.span
            variants={burgerIcon}
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 36 : 12,
            }}
            className="block bg-black h-1 w-3 group-hover:w-9"
          ></motion.span>
        </motion.div>
      )}

      {toggled && !matches && (
        <motion.ul
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed grid bg-white bottom-0 right-0 w-full h-screen place-content-center space-y-8 text-center"
        >
          <motion.li
            variants={itemMotion}
            animate="visible"
            initial="hidden"
            className="text-lg hover:font-bold ease-in-out duration-100"
          >
            <a href="/">Home</a>
          </motion.li>
          <motion.li
            variants={itemMotion}
            animate="visible"
            initial="hidden"
            className="text-lg hover:font-bold ease-in-out duration-100"
          >
            <a href="/blog/">Blog</a>
          </motion.li>
          <motion.li
            variants={itemMotion}
            animate="visible"
            initial="hidden"
            className="text-lg hover:font-bold ease-in-out duration-100"
          >
            <a href="/about/">About</a>
          </motion.li>
        </motion.ul>
      )}
    </nav>
  );
}
