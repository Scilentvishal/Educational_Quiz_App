"use client";

import { useState } from "react";
import { MdClose } from "react-icons/md";
import Logo from "./Logo";
import { Links } from "@/constants/NavbarData";
import SmallTitleWithIcon from "../CommonComponents/SmallTitleWithIcon";
import Link from "next/link";
import Image from "next/image";
import support from "@/Assets/images/support.png";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <button
        onClick={toggleSidebar}
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex absolute items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-blue-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        className={` fixed top-0 left-0 z-40 xl:w-80 lg:w-60 md:w-52 sm:w-1/2 w-full h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-end ps-2.5 mb-5 md:hidden">
            <button onClick={toggleSidebar} className=" text-gray-500">
              <MdClose size={30} />
            </button>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white-700 dark:hover:bg-gray-700 group"
              >
                <Logo />
              </a>
            </li>
            {Links.map((item, i) => (
              <li>
                <Link
                  href={item.href}
                  key={i}
                  className="flex items-center p-2 rounded-lg text-gray-500 hover:text-white hover:bg-blue-700"
                >
                  <SmallTitleWithIcon data={item} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="support w-[90%] bg-blue-700 h-[35%] mt-40 rounded-lg p-5 relative">
            <h4 className="text-white">Support 24/7</h4>
            <p className="text-gray-400">Contact us anytime</p>
            <br />
            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-blue-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Start
            </button>
            <Image className="right-1 bottom-1 absolute" src={support} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
