import bottomFlower from "../../assets/ornaments/footer-flower.jpg";

export default function Footer() {
  return (
    <div className="text-center pb-[12rem] bg-primary space-y-6 relative px-4">
      <div className="space-y-14 text-white/[.70] relative z-10 px-4">
        <h2 className="text-xl">Atas Kehadiran Dan Doa Restunya Kami Ucapkan Terimakasih.</h2>
        <h2 className="text-xl">Kami Yang Berbahagia, Keluarga Besar Kedua Mempelai</h2>
      </div>

      <h2 className="font-Salty text-white text-4xl tracking-wider relative z-10">Ipan & Vera</h2>

      <figure className="bg absolute bottom-0 left-0 -z-0 cursor-none">
        <img src={bottomFlower} alt="Flower" />
      </figure>
    </div>
  );
}
