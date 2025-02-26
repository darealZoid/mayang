import { useState } from "react";
import imgOne from "./assets/img/p1.jpg";
import imgTwo from "./assets/img/p2.png";
import imgThree from "./assets/img/p3.png";
import imgFour from "./assets/img/p4.png";
import imgFive from "./assets/img/p5.jpg";
import imgSix from "./assets/img/p6.jpg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Pin from "./Components/Pin/Pin";

function App() {
  return (
    <div className="relative w-full h-full overscroll-none">
      <Pin />
      <Navbar />
      <div className="flex justify-center h-[100vh] w-full items-center">
        <p className=" lg:text-[6em] md:text-[5em] duration-100 ease-in-out transition-all phone:text-[3em] sm:text-[4em] xsm:text-[4em] font-black text-[rgb(104,61,106)]">
          Coming Soon...
          <p className="text-sm text-right text-red-400"></p>
        </p>
      </div>
    </div>
  );
}

export default App;
