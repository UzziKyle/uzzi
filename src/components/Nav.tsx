import { MdHomeFilled, MdOutlineNoteAlt, MdOutlineFace } from "react-icons/md";

export default function Nav() {
  return (
    <nav>
      {/* mobile */}
      <ul className="flex gap-x-4 items-center md:hidden py-2 px-4 shadow shadow-black-300">
        <li className="mr-auto">
          <a href="/">
            <MdHomeFilled />
          </a>
        </li>
        <li>
          <a href="/blog/">Blog</a>
        </li>
        <li>
          <a href="/about/">About </a>
        </li>
      </ul>

      {/* larger screens */}
      <ul className="fixed hidden md:flex md:flex-col gap-y-4 w-fit h-screen justify-center items-center shadow-md shadow-black-300">
        <li className="group relative">
          <a className="block p-4 hover:drop-shadow-xl" href="/">
            <MdHomeFilled />
          </a>
          <div className="group-hover:opacity-100 absolute top-0 m-4 left-3/4 group-hover:left-full bg-blue-300 px-2 text-white rounded opacity-0 ease-in duration-200">
            Home
          </div>
        </li>
        <li className="group relative">
          <a className="block p-4 hover:drop-shadow-xl" href="/blog/">
            <MdOutlineNoteAlt />
          </a>
          <div className="group-hover:opacity-100 absolute top-0 m-4 left-3/4 group-hover:left-full bg-blue-300 px-2 text-white rounded opacity-0 ease-in duration-200">
            Blog
          </div>
        </li>
        <li className="group relative">
          <a className="block p-4 hover:drop-shadow-xl" href="/about/">
            <MdOutlineFace />
          </a>
          <div className="group-hover:opacity-100  absolute top-0 m-4 left-3/4 group-hover:left-full bg-blue-300 px-2 text-white rounded opacity-0 ease-in duration-200">
            About
          </div>
        </li>
      </ul>
    </nav>
  );
}
