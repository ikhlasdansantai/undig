import docsFlowerTop from "../../../assets/ornaments/docs-flower-top.png";
import docsFlowerBottom from "../../../assets/ornaments/docs-flower-bottom.png";

import img1 from "../../../assets/bride/1.jpg";
import img2 from "../../../assets/bride/2.jpg";
import img3 from "../../../assets/bride/3.jpg";
import img4 from "../../../assets/bride/4.jpeg";

const brideImages = [img1, img2, img3, img4];

export default function Documentation() {
  return (
    <section id="documentaions" className="relative py-20 px-4 bg-[#15151f] z-20">
      <figure className="absolute top-0 left-0 z-0 ">
        <img src={docsFlowerTop} alt="flower IMG" className="block max-w-full" />
      </figure>
      <div className="docs__contents relative z-20">
        <h2 className="text-3xl text-center text-white font-semibold tracking-wider">Dokumentasi</h2>
        <div className="docs__images mt-10 space-y-10">
          {brideImages.map((img, index) => (
            <figure key={index} className="rounded-lg overflow-hidden border-4">
              <img src={img} alt="bride IMG" className="block max-w-full" />
            </figure>
          ))}
        </div>
      </div>
      <figure className="absolute bottom-0 right-0 z-0">
        <img src={docsFlowerBottom} alt="flower IMG" className="block max-w-full" />
      </figure>
    </section>
  );
}
