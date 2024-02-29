import { PiDevToLogoLight } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-4 flex flex-col items-center gap-2 md:flex-row md:justify-between md:px-4">
      <div>
        <span className="text-sm font-thin">
          Copyright 2024 Uzziel Kyle Ynciong
        </span>
      </div>
      <ul className="flex gap-2 items-center">
        <li>
          <a href="https://github.com/uzzikyle" target="_blank">
            <span>
              <FiGithub />
            </span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/uzzielkyle/" target="_blank">
            <span>
              <LuLinkedin />
            </span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/uzzikyle" target="_blank">
            <span>
              <FaXTwitter />
            </span>
            <span className="sr-only">X Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://dev.to/uzzikyle" target="_blank">
            <span>
              <PiDevToLogoLight />
            </span>
            <span className="sr-only">DEV Community</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}
