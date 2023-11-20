import { useState, useEffect } from "react";
import "./index.css";

const COUNTDOWN_TARGET = new Date("2023-12-31T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const Hari = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const Jam = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const Menit = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const Detik = Math.floor((totalTimeLeft / 1000) % 60);
  return { Hari, Jam, Menit, Detik };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown">
      <div className="content">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
                <span className="label"> {label} </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
