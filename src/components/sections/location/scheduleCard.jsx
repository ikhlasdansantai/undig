import { Icon } from "@iconify/react";
export default function ScheduleCard() {
  return (
    <div className="location__card text-white bg-gradient-to-r from-[#333] to-[#444] p-4 space-y-2 rounded-lg">
      <h5 className="mb-4 text-lg">Resepsi</h5>
      <div className="flex items-center gap-2 location">
        <Icon icon="ep:location" />
        <p>Garut, Jawa Barat</p>
      </div>
      <div className="flex items-center gap-2 date">
        <Icon icon="bx:calendar" />
        <p>31 Desember 2023</p>
      </div>
      <div className="flex items-center gap-2 location">
        <Icon icon="tdesign:time" />
        <p>10.00 - 12.00</p>
      </div>
    </div>
  );
}
