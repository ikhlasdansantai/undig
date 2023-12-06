import bottomFlower from "../../assets/ornaments/footer-flower.jpg";

export default function Footer() {
  return (
    <div className="text-center pb-[12rem] bg-primary space-y-6 relative px-4 overflow-hidden">
      <div className="space-y-14 text-white/[.70] relative z-10 px-4">
        <h2 className="text-xl" data-aos="fade-left" data-aos-duration="2000">
          Atas Kehadiran Dan Doa Restunya Kami Ucapkan Terimakasih.
        </h2>
        <h2 className="text-xl" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="600">
          Kami Yang Berbahagia, Keluarga Besar Kedua Mempelai
        </h2>
      </div>

      <h2 className="font-Salty text-white text-4xl tracking-wider relative z-10" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900">
        Ipan & Vera
      </h2>

      <figure className="bg absolute bottom-0 left-0 -z-0 cursor-none" data-aos="fade-up" data-aos-duration="1600" data-aos-delay="1300">
        <img src={bottomFlower} alt="Flower" />
      </figure>
      <span className="opacity-0">Terimakasih 😀</span>
    </div>
  );
}
