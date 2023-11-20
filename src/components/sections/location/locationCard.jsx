import React from "react";
import { Icon } from "@iconify/react";

export default function LocationCard({ type, detail, time }) {
  return (
    <div className="location__card text-white bg-gradient-to-r from-[#333] to-[#444] p-4 space-y-2 rounded-lg">
      <h5 className="mb-4 text-lg font-bold">{type}</h5>
      <div className="flex items-start justify-start gap-2 location">
        <Icon icon="ep:location" className="mt-1 font-bold" />
        <p>JL.Mandalawangi, KP.Balubur RW.09 Desa Hegarsari</p>
      </div>
      <div className="flex items-center gap-2 date">
        <Icon icon="bx:calendar" />
        <p>{detail}</p>
      </div>
      <div className="flex items-center gap-2 location">
        <Icon icon="tdesign:time" />
        <p>{time}</p>
      </div>
    </div>
  );
}
