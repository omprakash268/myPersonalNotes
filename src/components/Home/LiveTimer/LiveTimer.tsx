import { useEffect, useState } from "react";

const LiveTimer = () => {
  const [time, setTime] = useState(new Date());

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      // Cleanup interval on component unmount
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="mt-4 w-[auto] timer-transparent p-2 sm:p-4 flex justify-center items-center text-[3rem] sm:text-[5rem]  time-gradiant h-5rem sm:h-[7rem]">
      {formatTime(time)}
    </div>
  );
};

export default LiveTimer;
