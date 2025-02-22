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
    <div className="m-4">
      <div className="fixed bottom-0 flex justify-center w-full p-4 rounded-lg ">
        <nav className="bg-[rgba(255,173,251,0.69)] backdrop-blur-md flex gap-8 flex-row justify-center rounded-lg px-4 py-2">
          <div>
            <p className="font-black italic text-[rgb(104,61,106)]">
              Galleries
            </p>
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
      <div className="flex justify-center break-word lg:flex-row md:flex-col-reverse">
        <div className="flex flex-col gap-2 w-2/3">
          <div className="flex items-center flex-row gap-2 text-[rgb(57,34,59)] ">
            <p className=" lg:text-[4em] xsm:text-[2em] sm:text-[2em] md:text-[3em] font-bold">
              Happy Valentine's Day,
            </p>
            <p className=" lg:text-[4em] xsm:text-[2em] sm:text-[2em] md:text-[3em] text-[rgb(188,113,195)] italic font-black">
              Mayang!
            </p>
          </div>
          <div className=" flex flex-col gap-2 lg:text-lg sm:text-xs md:text-sm">
            <div className="bg-[rgb(255,235,208)] text-wrap px-6 py-4 border border-black rounded-md font-medium text-justify">
              <p>
                hi baby ko, now ko lang ginawa tong lettter around 1:50am Feb 14
                AHWHHAHAHAH KAINEZZ pero tong projet na ito is matagal na
                nyeheheh isa 'to sa mga bala ko ngayong valentines and monthsary
                natinnnn yeheyyyy andd ano remember yung gan2 ko rin last
                time??? ahwdwhaddwhahdwahdahdwah pero feel mas maganda yung last
                time compared dito leg8 hawhdwahdwh grabeng intro noh???
                HAWHDWAHDAHDHAHAHAH SO AYUNNNN NA NGA hindi naman tayo ulet
                makakapagcelebrate together physically huhuuhuhu PERO sanaaaa
                sooooooooon (naman) macecelebrate na natin yann andd we’ll make
                it bonggang bongga na worth 10 valentines na-namissed xd xd nag
                sleep ka na ata or what whadwahd around 2:19am skkssk anong oras
                na naman nag sleep tas may exam pa batak pasikat AHWAHDHAWDHAH
                ang random ng msgs oks lang
                ba?AHWDHADWAHDADHADHHAWHADHWADHWHADHWA
              </p>
            </div>
            <div className="bg-[rgb(255,235,208)] text-wrap px-6 py-4 border border-black rounded-md font-medium text-justify">
              <p>
                anyways,
                <strong>HAPPY VALENTINE'S DAY, MAYANG! </strong>
                Thank you for being ü. Thank you for making me feel special.
                Thank you for making me feel something na di ko pa
                nafefeel(tuwing nag i-iloveyou ako nahihingal ako kay ga kurog
                akoang tiyan sa kilig HAWDHAHDAHDHADHADHAH). tuwing may bad days
                ako at alam kong baby kita nagiging magaan ang pakiramdam ko
                uhuhuhuhuh. Thank you for understanding our situation esp mine
                (sana humaba pa ean) . Thank you for making me happy (ket
                paghinga mo lang sa call happpy na ako HAWHDADADHADHHA) Sayo
                lang titibok nang mabilis tong puso ko. GUSTO KO TAYO NA FOREVER
                TALAGA. PADLOCK SUSI NA WALANG PATUMPIK TUMPIK PA KWENEJUY OI
                HWHWAHWAHAWHAWHHAW THANK YOU SA PATIENCE NIMO, BUTI DI MO PA AKO
                GINAWANG PATIENT(EYY WORDPLAY). HWWHAWHWHWAHWWAWWHA THANK YOU
                FOR BEING PART OF MY LIFE KET KUPAL KA MINSAN HWHWHAAWHAH
                MAGANDANG KUPAL PA TALAGA VERY VERY GRATEFUL SI ZOID!!! THAT IS
                ALL
              </p>
            </div>
            <div className="bg-[rgb(255,235,208)] text-wrap px-6 py-4 border border-black rounded-md font-medium text-justify">
              <p>
                THIS PROJ AY EXPANDABLE KUNG NAKIKITA MO SA BABA MAY MGA
                KINEMERUT "COMING SOON PA EAN (SOON NAMEN AHWHAHWHA) I LOVEEEEE
                YOU MY BABYY AND I MISS YOU SO MUCH!!! LETS DO BETTER TOGETHERRR
                OKEE????? OKEE!!! BALANCE NATIN ANG MATRIX PARA BLESS AND LOVE
                ANG MGA BRADER AND SISTER NATIN!!
              </p>
            </div>
          </div>
        </div>
        <div className="  ml-6 grid gap-1 overflow-y-scroll lg:h-[96vh] lg:grid-flow-row md:grid-flow-row md:w-full md:grid-cols-4 lg:grid-cols-3 lg:w-1/3">
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgOne}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgTwo}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgThree}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFour}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgFive}
              alt="picture 1"
            />
          </div>
          <div className="transition-all duration-75 ease-in-out border-black shadow-md hover:m-1 h-fit hover:hover:rounded-lg hover:bg-transparent">
            <img
              className="object-cover overflow-hidden hover:rounded-lg aspect-square"
              src={imgSix}
              alt="picture 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
