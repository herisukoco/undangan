// src/components/CountdownTimer.jsx
import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      if (!updatedTime) {
        clearInterval(timer);
        setTimeLeft(null);
      } else {
        setTimeLeft(updatedTime);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <div className="text-xl font-bold">Waktu habis!</div>;

  return (
    <div className=" font-semibold text-center space-x-2 flex flex-row items-center justify-center -translate-y-[120px] bodoni text-[#453327]">
      <div data-aos="fade-left" data-aos-duration="1000"
      className='flex flex-col text-center justify-center rounded-full w-[80px] h-[80px] bg-[#453327]/20 '>{timeLeft.days} Hari</div>
      <div data-aos="fade-left" data-aos-duration="1500"
      className='flex flex-col text-center justify-center rounded-full w-[80px] h-[80px] bg-[#453327]/20 '>{timeLeft.hours} Jam</div>
      <div data-aos="fade-right" data-aos-duration="1500"
      className='flex flex-col text-center justify-center rounded-full w-[80px] h-[80px] bg-[#453327]/20 '>{timeLeft.minutes} Menit</div>
      <div data-aos="fade-right" data-aos-duration="1000"
      className='flex flex-col text-center justify-center rounded-full w-[80px] h-[80px] bg-[#453327]/20 '>{timeLeft.seconds} Detik</div>
    </div>
  );
};

export default CountdownTimer;
