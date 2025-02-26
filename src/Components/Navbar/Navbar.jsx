import React from "react";
import { Link } from "react-router-dom";
import earth from "../../assets/icons/earth.png";
import homeNav from "../../assets/icons/Navbar/home.png";
import eventsNav from "../../assets/icons/Navbar/events.png";
import foodsNav from "../../assets/icons/Navbar/foods.png";
import todosNav from "../../assets/icons/Navbar/todos.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 flex flex-row justify-between w-full p-6">
      <div className=" border border-[rgb(104,61,106)] hover:hue-rotate-15 flex items-center justify-between gap-2 flex-row bg-[rgba(255,178,251,0.69)] hover:rounded-tr-full hover:rounded-bl-full hover:border-x-4 hover:border-[rgb(104,61,106)] rounded-tl-full hover:rounded-lg ease-in-out duration-200 transition-all rounded-br-full px-4 py-2">
        <img className=" w-[20px] h-[20px] " src={earth} alt="earth" />
        <p className="font-black md:text-[1em]  large:text-[1.2em] sm:text-[0.8em] xsm:text-[0.6em] italic text-[rgb(104,61,106)]">
          MAYANG
        </p>
      </div>
      <div className=" text-[rgb(104,61,106)] ">
        <nav className="flex flex-row justify-between w-full border border-[rgb(104,61,106)] md:text-[1em] large:text-[1.2em] sm:text-[0.8em] xsm:text-[0.6em] duration-100 ease-in-out bg-[rgba(255,178,251,0.69)] px-4 py-2 rounded-lg">
          <ul className="flex flex-row items-center font-medium">
            <li className="px-1.5 flex gap-1.5 lg:hover:text-sm xsm:hover:text-xsm items-center hover:px-3 transition-all rounded-sm ease-in-out cursor-pointer durating-100  hover:border-x  hover:border-[rgb(104,61,106)] hover:bg-[rgb(255,212,251)]">
              <img
                className=" w-[20px] h-[20px]"
                src={homeNav}
                alt="home btn"
              />
              <Link to={"/"}>Home</Link>
            </li>
            <li className="px-1 pointer-events-none">|</li>
            <li className="px-1.5 flex gap-1.5 lg:hover:text-sm xsm:hover:text-xsm items-center hover:px-3 transition-all rounded-sm ease-in-out cursor-pointer durating-100  hover:border-x  hover:border-[rgb(104,61,106)] hover:bg-[rgb(255,212,251)]">
              <img
                className=" w-[20px] h-[20px]"
                src={eventsNav}
                alt="events btn"
              />
              <Link to={"/events"}>Events</Link>
            </li>
            <li className="px-1 pointer-events-none">|</li>
            <li className="px-1.5 flex gap-1.5 lg:hover:text-sm xsm:hover:text-xsm items-center hover:px-3 transition-all rounded-sm ease-in-out cursor-pointer durating-100  hover:border-x  hover:border-[rgb(104,61,106)] hover:bg-[rgb(255,212,251)]">
              <img
                className=" w-[20px] h-[20px]"
                src={foodsNav}
                alt="foods btn"
              />
              <Link to={"/foods"}>Foods</Link>
            </li>
            <li className="px-1 pointer-events-none">|</li>
            <li className="px-1.5 flex gap-1.5 lg:hover:text-sm xsm:hover:text-xsm items-center hover:px-3 transition-all rounded-sm ease-in-out cursor-pointer durating-100  hover:border-x  hover:border-[rgb(104,61,106)] hover:bg-[rgb(255,212,251)]">
              <img
                className=" w-[20px] h-[20px]"
                src={todosNav}
                alt="foods btn"
              />
              <Link to={"/todos"}>Todos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
