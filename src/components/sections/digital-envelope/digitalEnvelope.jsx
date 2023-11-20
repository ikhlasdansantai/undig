import Bca from "/Bca-logo.png";
import Mandiri from "/Mandiri-logo.png";
import Dana from "/Dana-logo.png";
import Barcode from "/barcode.jpeg";
import { useState, useRef, useEffect } from "react";
import copy from "copy-to-clipboard";

function ShowBarcode({ state, setState }) {
  let menuRef = useRef();
  const handleClose = () => {
    setCreateProgram(false);
  };
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <figure className={`fixed transition duration-300 pointer-events-none scale-0 flex flex-col items-center justify-center px-4 top-0 left-0 right-0 bottom-0 min-h-screen z-40 ${state && "scale-100"}`} ref={menuRef}>
      <img src={Barcode} alt="barcode-img" />
    </figure>
  );
}

function AlertComp({ setState }) {
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 2500);
  }, []);
  return (
    <div class="fixed top-4 right-4 p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
      <span class="font-medium">Pesan Berhasil Di Salin!</span>.
    </div>
  );
}

function DigitalCard({ images, alt, name, noRek }) {
  const [showBarcode, setShowBarcode] = useState(false);
  const [isCopy, setIsCopy] = useState(false);

  const copyText = (target) => {
    copy(target);
  };

  return (
    <div className="digital-card bg-textSecondary/[.60] text-left p-4 rounded-md">
      <figure className="bank-name w-20 ml-auto">
        <img src={images} alt={alt} />
      </figure>
      <div className="wrapper flex justify-between items-center mt-6">
        <div className="div-left text-white/[.90]">
          <h2>Nomor Rekening</h2>
          <p className="font-semibold">{noRek}</p>
          <h2>A.N Ipan Pandi Setiana</h2>
        </div>
        {name !== "dana" ? (
          <button
            type="button"
            onClick={() => {
              setIsCopy(true);
              copyText(noRek);
            }}
            className="border-4 border-white/[.60] text-white px-8 py-3"
          >
            Salin
          </button>
        ) : (
          <button type="button" onClick={() => setShowBarcode(true)} className="border-4 border-white/[.60] text-white px-8 py-3">
            Scan
          </button>
        )}
      </div>
      {isCopy && <AlertComp setState={setIsCopy} />}
      <ShowBarcode state={showBarcode} setState={setShowBarcode} />
    </div>
  );
}

const banks = [
  {
    images: Bca,
    alt: "Bca-logo",
    name: "Bca",
    noRek: "2880168048",
  },
  {
    images: Mandiri,
    alt: "Mandiri-logo",
    name: "mandiri",
    noRek: "1770018665718",
  },
  {
    images: Dana,
    alt: "Dana-logo",
    name: "dana",
    noRek: "",
  },
];

export default function DigitalEnvelope() {
  return (
    <section id="digital-envelope" className="py-10 px-4 text-center">
      <h2 className="text-3xl text-white font-semibold tracking-wider">Amplop Digital</h2>
      <p className="text-textSecondary mt-2">Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui virtual account atau e-wallet di bawah ini</p>

      <div className="bank-cards space-y-6 mt-10">
        {banks.map(({ images, alt, name, noRek }) => {
          return (
            <div key={name}>
              <DigitalCard images={images} alt={alt} name={name} noRek={noRek} />;
            </div>
          );
        })}
      </div>
    </section>
  );
}
