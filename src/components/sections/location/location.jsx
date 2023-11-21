import { locationCardDatas } from "../../../data/data";
import LocationCard from "./locationCard";

export default function Location() {
  return (
    <div className="bg-secondary p-4 py-10 relative overflow-x-hidden">
      <h2 className="text-3xl text-center text-white" data-aos="fade-up" data-aos-duration="1000">
        Lokasi
      </h2>
      <div className="cards w-full mt-8 space-y-6" data-aos="fade-up-left" data-aos-duration="1300" data-aos-delay="300">
        {locationCardDatas.map(({ type, detail, time }, index) => (
          <LocationCard key={index} type={type} detail={detail} time={time} />
        ))}
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3456186771537!2d107.87985138595104!3d-7.085872808763014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b7c256ebd099%3A0x75e6560f44654333!2sKp.%20Balubur%20Kadungorq!5e0!3m2!1sid!2sid!4v1698138769632!5m2!1sid!2sid"
        className="mt-4 rounded-xl"
        width="100%"
        height="250"
        allowFullScreen={true}
        loading="lazy"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      ></iframe>
    </div>
  );
}
