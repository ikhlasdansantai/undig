import { useEffect, useState } from "react";
import Countdown from "../countdown/countdown";
import "./index.css";

export default function Header({ state, onClick, setState }) {
  useEffect(() => {
    setState(false);
  }, []);

  return (
    <div className={`container fixed left-0 right-0 max-w-2xl mx-auto z-[99] ${state ? "open__invitation" : ""}`}>
      <div className="open__wedding__invitation relative z-[10000] text-white min-h-screen flex flex-col justify-end items-center pb-10">
        <h2 className="font-Salty text-6xl tracking-wider">Ipan & Vera</h2>
        <span className="block tracking-[1px]">31 Desember 2023</span>
        <Countdown />
        <button className="mt-8 bg-[#EDE2DE] py-3 px-4 text-black rounded-md" onClick={onClick}>
          😎 Open Invitation
        </button>
      </div>
      <div className="wedding__bg">
        <div className="test"></div>
      </div>
    </div>
  );
}
