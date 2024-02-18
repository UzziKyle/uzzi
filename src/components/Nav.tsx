import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";

export default function Nav() {
  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <nav>
      {/* checks if mobile */}
      {!matches && (
        <ul className="fixed top-0 right-0 flex text-center text-2xl shadow-lg">
          <li>
            <a
              className="block border-solid border-black border-l-2 border-b-2 pt-2 pb-3 px-3 rounded-bl-lg"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="block border-solid border-black border-l-2 border-b-2 pt-2 pb-3 px-3"
              href="/blog/"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="block border-solid border-black border-l-2 border-b-2 pt-2 pb-3 px-3"
              href="/about/"
            >
              About
            </a>
          </li>
        </ul>
      )}

      {/* else */}
      {matches && (
        <ul className="fixed bottom-32 left-6 flex flex-col text-center">
          <li>
            <a
              className="block border-solid border-black border-2 border-b-0 py-1.5 px-2 hover:translate-x-3 ease-in-out duration-100"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="block border-solid border-black border-2 border-b-0 py-1.5 px-2 hover:translate-x-3 ease-in-out duration-100"
              href="/blog/"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="block border-solid border-black border-2 py-1.5 px-2 hover:translate-x-3 ease-in-out duration-100"
              href="/about/"
            >
              About
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
