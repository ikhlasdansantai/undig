import bottomFlower from "../../../assets/ornaments/footer-flower.jpg";
import "./index.css";
import { brideDatas } from "../../../data/data";

export default function Bride({ state }) {
  return (
    <div className="text-center space-y-10 p-4 relative overflow-hidden min-h-screen flex  flex-col justify-center items-center">
      <figure className={`absolute ${state ? "show__top__flower" : "translate-y-[-100%]"} top-[-60px] left-0 right-0 -z-10 rotate-[180deg]`}>
        <img src={bottomFlower} alt="flower-img" height="100%" width="100%" />
      </figure>
      <div className="titles">
        <h2 className="text-center text-white text-3xl ">Assalamu'alaikum Wr. Wb.</h2>
        <p className="text-[#aaa] text-center mt-1">Dengan memohon rahmat dan ridho Allah SWT, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami </p>
      </div>
      <div className="brides space-y-4">
        <div className="bride">
          <h2 className="font-Salty font-semibold text-white text-4xl tracking-wider">{brideDatas[0].name}</h2>
          <p className="text-textSecondary">{brideDatas[0].info}</p>
        </div>
        <span className="block text-white text-5xl font-Salty">&</span>
        <div className="bride">
          <h2 className="font-Salty text-white text-4xl tracking-wider">{brideDatas[1].name}</h2>
          <p className="text-textSecondary">{brideDatas[1].info}</p>
        </div>
      </div>
      <figure className={`absolute ${state ? "show__top__flower" : "translate-y-[100%]"} bottom-[-60px] left-0 right-0 -z-10 `}>
        <img src={bottomFlower} alt="flower-img" height="100%" width="100%" />
      </figure>
    </div>
  );
}
