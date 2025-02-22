import { useState } from "react";
import imgOne from "./assets/img/p1.jpg";
import imgTwo from "./assets/img/p2.png";
import imgThree from "./assets/img/p3.png";
import imgFour from "./assets/img/p4.png";
import imgFive from "./assets/img/p5.jpg";
import imgSix from "./assets/img/p6.jpg";
import "./App.css";

function App() {
  return (
    <div className="h-full relative w-full">
      <div className="fixed bottom-0 flex justify-center w-full p-4 rounded-lg ">
        <nav className="bg-[rgba(255,173,251,0.69)] backdrop-blur-md flex gap-8 flex-row justify-center rounded-lg px-4 py-2">
          <div>
            <p className="font-black italic text-[rgb(104,61,106)]">Gallery</p>
          </div>
          <div>
            <ul className="flex flex-row gap-2">
              <li className="underline cursor-pointer ">
                <p>Favorites</p>
              </li>
              <li className="underline cursor-pointer ">
                <p>Todos</p>
              </li>
              <li className="underline cursor-pointer ">
                <p>Event</p>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className=" flex justify-center h-[100vh] w-full items-center">
        <p className="text-[5em] font-black text-[rgb(104,61,106)]">
          Coming Soon...
        </p>
      </div>
    </div>
  );
}

export default App;
