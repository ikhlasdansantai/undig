import InputBox from "./inputBox";

export default function WriteMsg() {
  return (
    <section id="writeMsg" className="py-10 px-4 bg-[#242629] text-center">
      <h2 className="text-3xl text-white font-semibold tracking-wider">Ucapkan Sesuatu</h2>
      <p className="text-textSecondary mt-2 ">Berikan Ucapan Terbaik Untuk Kedua Mempelai</p>
      <form className="mt-8 space-y-4">
        <InputBox placeholder={"Nama"} />
        <InputBox placeholder={"Masukan Ucapan..."} />
      </form>
      <button className="block px-7 py-2 mx-auto bg-[#6D4B64] text-white rounded-lg mt-8">Kirim</button>
    </section>
  );
}
