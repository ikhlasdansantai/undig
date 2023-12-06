import { useState } from "react";
import InputBox from "./inputBox";
import Safe from "react-safe";

export default function WriteMsg() {
  const [msg, setMsg] = useState({
    nama: "Anonymous",
    message: "Selamat Menikah!",
  });

  const writeMessage = (e) => {
    setMsg({ ...msg, [e.target.name]: [e.target.value] });
  };

  const sendMessage = () => {
    window.location.href = `https://api.whatsapp.com/send?phone=6288291315369&text=Dari ${msg.nama}, pesan: ${msg.message}`;
  };

  return (
    <section id="writeMsg" className="py-10 px-4 bg-[#242629] text-center">
      <h2 className="text-3xl text-white font-semibold tracking-wider" data-aos="fade-up" data-aos-duration="1600">
        Ucapkan Sesuatu
      </h2>
      <p className="text-textSecondary mt-2" data-aos="fade-up" data-aos-duration="1600" data-aos-delay="600">
        Berikan Ucapan Terbaik Untuk Kedua Mempelai
      </p>

      <div id="disqus_thread"></div>
      <Safe.script>
        {(function () {
          // DON'T EDIT BELOW THIS LINE
          var d = document,
            s = d.createElement("script");
          s.src = "https://https-ipan-vera-wedding-vercel-app.disqus.com/embed.js";
          s.setAttribute("data-timestamp", +new Date());
          (d.head || d.body).appendChild(s);
        })()}
      </Safe.script>
    </section>
  );
}
