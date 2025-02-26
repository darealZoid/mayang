import React, { useState } from "react";
import submitBtnVeryFinal from "../../assets/icons/submitBtnVeryFinal.png";
import hintIcon from "../../assets/icons/hint.png";

const Pin = () => {
  const pinCode = 20220514;
  const [pin, setPin] = useState("");
  const [lock, setLock] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pinCode == pin) {
    } else {
      alert("Wrong");
    }
  };

  return (
    <div className=" fixed flex justify-center items-center w-full h-full bg-[rgba(64,45,61,0.82)] backdrop-blur-md z-50">
      <div className="flex flex-col justify-center gap-5 p-5">
        <div className="flex flex-col">
          <p className="font-black lg:text-[2.5em] xsm:text-[2em] text-[rgb(253,225,255)]">
            Enter the PIN Code to Unlock!
          </p>
          <div className="flex items-center justify-center gap-1.4 flex1row">
            <img width={25} src={hintIcon} alt="hint icon" />
            <p className="text-center italic font-extralight   text-[rgb(253,221,255)]">
              : YYYY/MM/DD
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row justify-center gap-2"
        >
          <input
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            type="number"
            placeholder="Enter PIN Code"
            className="px-2 bg-[rgb(254,238,255)] border-2 border-[rgb(104,61,106)] py-4 text-center lg:text-[1.4em] xsm:text-[0.8em] rounded-lg md:w-1/3 lg:w-1/2 "
          />
          <button type="submit">
            <img
              className=" w-[50px] p-2 bg-[rgb(104,61,106)] border border-[rgb(255,212,251)] hover:bg-[rgb(86,50,88)] rounded-2xl"
              src={submitBtnVeryFinal}
              alt="submit btn"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pin;
