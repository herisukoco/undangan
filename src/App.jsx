import { useRef, useEffect ,useState } from 'react'
import './App.css'
import background from './assets/bg.webp'
import background1 from './assets/bg1.gif'
import bg2 from './assets/bg2.jpg'
import bg3 from './assets/bg3.jpg'
import cover from './assets/cover.png'
import line from './assets/line.png'
import line2 from './assets/line1.png'
import tangankanan from './assets/tangankanan.png'
import tangankiri from './assets/tangankiri.png'
import lovekanan from './assets/lovekanan.png'
import lovekiri from './assets/lovekiri.png'
import bridge from './assets/bridge.jpg'
import groom from './assets/groom.jpg'
import bunga1 from './assets/bunga1.png'
import bunga2 from './assets/bunga2.png'
import bunga3 from './assets/bunga3.png'
import galeri1 from './assets/galeri1.jpg'
import galeri2 from './assets/galeri2.jpg'
import galeri3 from './assets/galeri3.jpg'
import galeri4 from './assets/galeri4.jpg'
import galeri5 from './assets/galeri5.jpg'
import galeri6 from './assets/galeri6.jpg'
import galeri7 from './assets/galeri7.jpg'
import galeri8 from './assets/galeri8.jpg'
import galeri9 from './assets/galeri9.jpg'
import galeri10 from './assets/galeri10.jpg'
import galeri11 from './assets/galeri11.jpg'
import galeri12 from './assets/galeri12.jpg'
import galeri13 from './assets/galeri13.png'
import galeri14 from './assets/galeri14.png'
// import galeri15 from './assets/galeri15.png'
import jago from './assets/jago.png'
import daun from './assets/daun.png'
import daun1 from './assets/daun1.png'
import daun2 from './assets/daun2.png'
import line1 from './assets/Line.svg'
import date from './assets/date.png'
import CountdownTimer from './components/CountdownTimer';
import MapEmbed from './components/MapEmbed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import music from './assets/music.mp3'

import useScrollLock from './components/useScrollLock';

function App() {
  AOS.init();
  const divStyle1 = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
  }
  const divstyle2= {
    backgroundImage: `url(${background1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "auto"
    };

// Lagu
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // klik tombol
  const [locked, setLocked] = useState(true);
  useScrollLock(locked);
  const handleOpen = () => {
    setLocked(false);
    setOpened(true);

  const audio = audioRef.current;
  if (audio) {
    audio.play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.error("Gagal memutar audio:", err));
  }

  document.getElementById("body")?.scrollIntoView({ behavior: "smooth" });
};


  // Toggle musik
  const toggleMusic = () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (audio.paused) {
    audio.play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.error("Gagal play:", err));
  } else {
    audio.pause();
    setIsPlaying(false);
  }
};

const [tamu, setTamu] = useState("");
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const namaTamu = params.get("to");

  if (namaTamu) {
    setTamu(decodeURIComponent(namaTamu));
  }
}, []);

    
  // ubah tanggal 
  const targetDate = '2025-10-04T10:48:00';
  

  // copy

  const [copied, setCopied] = useState(false);
  const accountNumber = '105745329045';
  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }
  const [copied1, setCopied1] = useState(false);
  const accountNumber1 = '109208397336';
  const handleCopy1 = () => {
    navigator.clipboard.writeText(accountNumber1);
    setCopied1(true);

    setTimeout(() => setCopied1(false), 2000);
  }


  return (
    <>
    {/* Halaman cover*/}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
      </audio>
{/* Tombol Play/Pause Musik */}

    {locked && !opened && (
      <div style={divStyle1}
        className="flex z-5 flex-col justify-start lg:pt-[50px] pt-[55px] items-center overflow-hidden min-h-screen w-full text-center ">
         
        <p className='text-[#453327]'
          data-aos="fade-up" 
          data-aos-duration="1500">You are Invited to</p>
        <p className=" text-[#453327] text-[20px] lora"
          data-aos="fade-up"
          data-aos-duration="1500">
          THE WEDDING OF
        </p>
        <p className='bonheur text-[#453327] text-[60px] mt-[30px]'
          data-aos="fade-down" 
          data-aos-duration="2000">
          Heri & Ajeng
        </p>
        <div className='flex flex-col'>
          <img data-aos="zoom-in" data-aos-duration="1000" src={cover} alt="cover" className='lg:w-[400px]'/>
        </div>
        <p className='text-[12px] lora text-[#453327]'
          data-aos='fade-left'
          data-aos-duration='2000'>kepada</p>
        <p className='text-[18px] lora text-[#453327]'
          data-aos='fade-right'
          data-aos-duration='2000'>{tamu}</p>
        <a onClick={handleOpen} className="bg-[#776a48] mb-5   px-3 lg:text-[22px] text-[15px] py-1 rounded-sm  mt-6 shadow-black/20 shadow-lg"
          data-aos='fade-up'
          data-aos-duration='2500'
        >
            <p className='text-white'> Buka Undangan</p>
        </a>
      </div>
)}
      <div id='body' className='hidden'></div>
      {/* Body */}
      <div className='w-full overflow-x-hidden min-h-screen h-auto flex flex-col items-center justify-start'>
        <div onClick={toggleMusic}
          className="fixed bottom-4 z-3 left-4 w-14 h-14 rounded-full bg-white/50 shadow-2xl flex items-center justify-center cursor-pointer "
        >
          {isPlaying ? (
            // Ikon Pause
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-black/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            // Ikon Play
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4 text-black/50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 3v18l15-9L5 3z" />
            </svg>
          )}
        </div>

        {/* hal 1 */}
        <div style={divstyle2} className='flex overflow-hidden relative flex-col w-full h-screen items-center justify-center text-center'
        data-aos='zoom-out' data-aos-duration='2000'
        >
          <div className='w-full h-screen  bg-black/30 flex flex-col items-center justify-self-start'>
            <p className=" text-[#fff] text-[20px] lora lg:mt-[20px] mt-20"
            data-aos='flip-up' data-aos-duration='25000'>
              THE WEDDING OF
            </p>
            <p className='bonheur text-[#fff] text-[60px] mt-[30px] goyang1'
            data-aos='zoom-out' data-aos-duration='2500'>
              Heri & Ajeng
            </p>
            <img 
            src={line} alt="" className='lg:w-[300px]'
            data-aos='flip-right' data-aos-duration='3000'/>
            <p className=" text-[#fff] text-[20px] font-serif lg:mt-[20px] mt-4"
            data-aos='zoom-in-down' data-aos-duration='3000'>
              04.10.2025
            </p>
            <img src={bunga1} alt=""  className='absolute -left-[50px] bottom-0 translate-y-[50px] goyang-rotate'/>
          </div>

        </div>

        {/* hal 2 */}
        <div style={divStyle1} className='flex flex-col relative py-20 items-center justify-center text-center '>
          
          <p className='p-10 bodoni text-[#453327] text-[16px] lg:py-[100px] lg:px-[300px]'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.” QS. Ar-Rum : 21"</p>
          <p className=' text-[#453327] text-[25px] bonheur'
          data-aos="zoom-out-right"
          data-aos-easing="linear"
            data-aos-duration="1500"
          >Q.S Ar-Rum : 21</p>
          <div className='flex flex-row relative w-full text-center justify-center items-center'>
            <p className='bodoni text-3xl mb-1 mt-10 lg:text-5xl'
             data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="2000">
            H/A
            </p>
            <img data-aos="fade-left" data-aos-duration='3000'
            src={lovekiri} alt="" className=' goyang1 object-cover h-[160px] left-0 absolute top-0'/>
            <img data-aos="fade-right" data-aos-duration='3000'
            src={lovekanan} alt="" className='goyang1 object-cover w-[128px] right-0 absolute top-0' />
          </div>

        </div>

        {/* Mempelai */}
        <div className='bg-[#FCF6E6] w-full min-h-screen flex flex-col overflow-hidden'>
          <div className='flex flex-col w-full my-[30px] items-center justify-center text-center'>
            <p className='text-center lora text-[25px] text-[#453327]'
             data-aos="fade-up"
              data-aos-duration="2000"
             >بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْ</p>
            <p className='mt-7 text-[#453327]'
             data-aos="fade-down"
              data-aos-duration="2000">Assalamualaikum warrahmatullahi wabarakatuh </p>
            <p className='mt-4 p-10 text-[#453327] lg:px-[199px]'
            data-aos='zoom-out'
             data-aos-duration="2000">
               Maha Suci Allah yang telah menciptakan hamba-Nya secara berpasang-pasangan. Ya Allah, curahkan ridamu untuk mengiringi pernikahan putra-putri kami
            </p>
          </div>

          {/* Bridge section */}
          <div className='flex flex-col lg:flex-row'>
            <div className='flex flex-row lg:justify-center lg:ml-[300px]'>
              <img src={bridge} alt="" className='w-[50%] object-cover lg:w-[200px] lg:h-[300px] relative ml-10 rounded-3xl'
               data-aos='fade-down-right'
               data-aos-duration="2000"
               />
              <img src={bunga1} alt="" className='goyang-rotate1 relative  lg:w-[200px] h-[340px] -translate-x-20 translate-y-20 rotate-4' />
            </div>
            <div className='flex flex-col mt-10 ml-10 lg:ml-0 lg:justify-center lg:items-center'>
              <p className='goyang1 bodoni text-3xl mb-1 lg:text-5xl text-[#453327]'>
              AJENG
              </p>
              <p className='text-[#453327] text-[20px] bonheur'
              data-aos="zoom-in">Ajeng Ayu Prameswari Putri S.Psi</p>
              <p className='text-[#453327] text-[16px] font-sans '
              data-aos='fade-up'>Putri pertama</p>
              <p className='text-[#453327] text-[16px] font-sans '
              data-aos='fade-left'>Bp. Sulis Ngatiadji dan Ibu. Heni Hanurini</p>
              <a href="https://www.instagram.com/noneednormal/" target='_blank' className='bg-[#A3997D] mt-2 py-1 px-1 rounded w-[150px] text-center'
              data-aos="flip-up"><p className='text-white'>@noneednormal</p></a>
            </div>
          </div>

          {/* Groom */}
          <div className='flex flex-col lg:flex-row-reverse mb-[30px]'>
            <div className='flex flex-row mt-30 items-end justify-end lg:justify-center lg:mr-[300px]'>
              <img src={bunga2} alt="" className='goyang-rotate relative lg:w-[200px] h-[300px] translate-x-20 z-1 translate-y-20 -rotate-4' />
              <img src={groom} alt="" className='w-[50%] object-cover lg:w-[200px] lg:h-[300px] relative mr-10 rounded-3xl'
              data-aos='fade-down-left'
               data-aos-duration="2000"/>
            </div>
            <div className='flex flex-col mt-10 mr-10 lg:mr-0 justify-end items-end lg:justify-center lg:items-center mb-[50px]'>
              <p className='bodoni goyang text-3xl mb-1 lg:text-5xl text-[#453327]'>
              HERI
              </p>
              <p className='text-[#453327] text-[20px] bonheur '
              data-aos="zoom-in">Heri Sukoco S.Kom</p>
              <p className='text-[#453327] text-[16px] font-sans '
              data-aos="fade-up">Putra pertama</p>
              <p className='text-[#453327] text-[16px] font-sans '
              data-aos="fade-left">Bp. Satori dan Ibu. Rochmat Waheni</p>
              <a href="https://www.instagram.com/herisoe_" target='_blank' className='bg-[#A3997D] mt-2 py-1 px-1 rounded w-[150px] text-center'
              data-aos="flip-up"><p className='text-white'>@herisoe_ </p></a>
            </div>

          </div>
        </div>
      </div>

      {/* Tanggal dan Countdown */}
      <div className='bg-[#FCF6E6] w-full min-h-screen flex flex-col'>
        <div className='flex flex-row justify-between w-full items-center'>
          <img src={daun} alt="" className='wiggle w-[50%] object-cover lg:w-[200px]  left-0'/>
          <div className='flex flex-col items-center justify-center'>
            <p data-aos="fade-left" data-aos-duration="1000"
            className='text-[#453327] text-[18px] bodoni text-right lg:mx-auto mr-10'>SAVE THE</p>
            <p data-aos="fade-right" data-aos-duration="1500"
            className='text-[#453327] text-[42px] caveat text-right lg:mx-auto mr-10 font-bold'>DATE</p>
            <img data-aos="zoom-in" data-aos-duration="2000" 
            src={line1} alt="" className='mr-10 lg:mx-auto' />
          </div>
          <div></div>
          <div></div>
        </div>
        <img data-aos="zoom-out" data-aos-duration="1000"
        src={date} alt="" className='object-cover -translate-y-[150px] lg:w-[45%] mx-auto' />
        <CountdownTimer targetDate={targetDate} />
        <img data-aos="fade-up" data-aos-duration="1000"
        src={line1} alt="" className='mx-auto mb-10' />
      </div>

      {/* Detail Acara*/}
      <div className='bg-[#FCF6E6]  w-full min-h-screen flex flex-col px-10 items-center justify-center'>
        <div data-aos="zoom-in" data-aos-duration="500" style={divStyle1} className='bg-[#FCF6E6] border-[#B19740] border-4 rounded-full lg:w-[60%] min-h-screen flex flex-col items-center justify-start'>
        <img data-aos="fade-left" data-aos-duration="1000"
        src={daun1} alt=""  className=' wiggle lg:w-[500px] -translate-y-[30%]'/>
        <div className='flex flex-col items-center justify-center text-center'>
          <p data-aos="fade-down" data-aos-duration="1000" 
            className='text-[40px] goyang bonheur'>Akad & Respsi</p>
          <div className='flex flex-row items-center justify-center space-x-4'>
            <p data-aos="fade-left" data-aos-duration="1000"
            className='text-[30px] caveat'>Sabtu</p>
            <div data-aos="flip-up" data-aos-duration="1500"
              className='flex flex-col border-[#B19740] border-2 goyang-rotate1  bg-[#81634F] text-white rounded-2xl items-center justify-center w-[70px] h-[70px] text-[20px] bodoni'>
              <p>04</p>
              <p>Oct</p>
            </div>
            <p data-aos="fade-right" data-aos-duration="1000"
            className='text-[30px] caveat'>2025</p>
          </div>
          <p data-aos="fade-up" data-aos-duration="1000"
          className='text-[14px] mt-4 lora'>Pukul 10:45 - Selesai</p>
          <p data-aos="fade-up" data-aos-duration="1200"
          className='text-[15px] mt-4 lora px-2'>Jl Laksda Adi Sucipto no 267, Pandanwangi, Kec. Blimbing, Kota Malang (Berkah Maharaja Spooring)</p>
        </div>
        <img data-aos="fade-down" data-aos-duration="1000"
        src={line2} alt="" className=''/>
        <div className="p-6 flex flex-col items-center justify-center text-center mb-[30px]">
          <p data-aos="fade-down" data-aos-duration="1000"
          className='text-[40px] bonheur goyang1'>Denah Lokasi</p>
           <MapEmbed />
          <a data-aos="zoom-in" data-aos-duration="1000"
           href="https://maps.app.goo.gl/QjMn3pUgkgutjiZ69" target='_blank' rel="noopener noreferrer" className='bg-[#776a48] mb-5  lg:mb-[100px]  px-3 lg:text-[22px] text-[15px] py-1 rounded-sm  mt-6 shadow-black/20 shadow-lg'>
            <p className='text-white'>Buka Maps</p>
          </a>


        </div>
        </div>

              <img src={daun1} alt=""  className='lg:w-[500px] wiggle1 -translate-y-[70%] rotate-180'/>
      </div>


      {/* tangan */}
      <div className='flex flex-row w-full bg-[#FCF6E6]'>
        <img data-aos="fade-right" data-aos-duration="1000" src={tangankiri} alt="" className='w-1/2' />
        <img data-aos="fade-left" data-aos-duration="1000" src={tangankanan} alt="" className='w-1/2'/>
      </div>

      {/* Quotes */}
      <div className='p-10 w-full  -mb-10 bg-[#FCF6E6] flex flex-col lg:flex-row'>
        <div data-aos="zoom-out" data-aos-duration="1000"
        className=' flex flex-col items-center justify-center lg:w-1/2'>
          <img src={bg2} alt="" className='w-full rounded-xl object-cover ' />
        </div>
        <div className=' flex flex-row lg:items-center justify-center tetx-[#]'>
          <img data-aos="zoom-out" data-aos-duration="1200"
          src={bunga3} alt="" className='zoominout -translate-y-[200px] lg:-translate-y-[150px] left-10 lg:left-0 absolute lg:relative'/>
          <div className='text-center m-10'> 
            <p data-aos="fade-up" data-aos-duration="1000"
            className='bodoni lg:text-2xl'>Mencintaimu merupakan pilihan terbaik yang pernah aku buat selama hidupku.</p>
            <p data-aos="fade-down" data-aos-duration="1000"
            className='bonheur mt-6 lg:mt-10 lg:text-3xl text-[30px]'>Ajeng & Heri</p>
          </div>

        </div>
      </div>

      {/* Galeri */}
      <div style={divStyle1} className='w-full pb-[100px] min-h-screen flex flex-col items-center justify-start px-10'>
        <img data-aos="flip-right" data-aos-duration='3000' 
        src={line2} alt="" className=''/>
        <p data-aos="fade-down" data-aos-duration="1000"
        className=' mt-2 text-[35px] caveat text-[#453327] goyang'>Our Moment</p>
        <div className='flex flex-col w-full mt-10 space-y-2'>
          <div className='w-full flex flex-col'>
            <img data-aos="zoom-in" data-aos-duration="1000" src={galeri14} alt="" className='goyang1 -mt-[70px] object-cover w-full z-1 translate-y-[34%]'/>
          </div>
          <div className='w-full flex flex-col'>
            <img data-aos="fade-up" data-aos-duration="1000"
            src={galeri1} alt="" className='object-cover w-full'/>
          </div>
          <div className='flex flex-row w-full'>
            <img data-aos="fade-right" data-aos-duration="1000"
            src={galeri2} alt="" className='pr-1 w-1/2 object-cover' />
            <img data-aos="fade-left" data-aos-duration="1000"
            src={galeri7} alt="" className='pl-1 w-1/2 object-cover'/>
          </div>
          <div className='flex flex-row w-full'>
            <div className='flex flex-col w-1/2 mr-1 space-y-2'>
              <img data-aos="fade-right" data-aos-duration="1000"
              src={galeri9} alt="" className='h-[200px] lg:h-[700px] w-full object-cover'/>
              <img data-aos="fade-right" data-aos-duration="1000"
              src={galeri5} alt="" className='h-[100px] lg:h-[300px] w-full object-cover' />
            </div>
            <div className='flex flex-col w-1/2 ml-1 space-y-2'>
              <img data-aos="fade-left" data-aos-duration="1000"
              src={galeri3} alt="" className='h-[100px] lg:h-[300px] w-full object-cover'/>
              <img data-aos="fade-left" data-aos-duration="1000"
              src={galeri6} alt="" className='h-[200px] lg:h-[700px] w-full object-cover' />
            </div>
          </div>
          
          <div className='flex flex-row w-full relative'>
            <img data-aos="fade-right" data-aos-duration="1000" src={galeri4} alt="" className='pr-1 w-1/2 object-cover'/>
            <img data-aos="fade-left" data-aos-duration="1000" src={galeri8} alt="" className='pl-1 w-1/2 object-cover'/>
          </div>
          <div className='flex flex-col w-full'>
            <img data-aos="fade-up" data-aos-duration="1000" src={galeri10} alt="" className='w-full object-cover' />
          </div>
          <div className='flex flex-row w-full'>
            <img data-aos="fade-right" data-aos-duration="1000" src={galeri12} alt="" className='pr-1 w-1/2 object-cover' />
            <img data-aos="fade-left" data-aos-duration="1000" src={galeri11} alt="" className='pl-1 w-1/2 object-cover'/>
          </div>
        </div>
      </div>

      {/* Love Story */}
      <div style={divStyle1} className='p-10 flex flex-col w-full items-center justify-start min-h-screen lg:px-[300px]'>
            <p data-aos="fade-down" data-aos-duration='3000'
            className='mt-2 text-[35px] caveat text-[#453327] text-shadow-amber-900/10 text-shadow-lg'>Love Story</p>
            <img data-aos="fade-right" data-aos-duration='3000'
            src={galeri13} alt="" className='goyang-rotate object-cover z-1 -mt-[10%] translate-y-[10%]' />
            <div className='w-full flex flex-col min-h-screen z-2 bg-[#FCF6E6] rounded-4xl border-[#B19740] border-2 items-center justify-start text-center text-[#453327]'>
              <img data-aos="zoom-out" data-aos-duration='3000'
              src={daun2} alt="" className='zoominout z-3 scale-150 -translate-y-[50%]'/>
              <p data-aos="fade-up" data-aos-duration='1000'
              className='bonheur text-[30px]'>Pertemuan</p>
              <p data-aos="fade-up" data-aos-duration='1500'
              className='bodoni px-4'>Takdir membawa kami untuk saling bertemu, pada sebuah konferensi jurnal skripsi di UI pada 2022. Awalnya hanya perbincangan  sederhana di acara, lanjut bercengkrama sambil menikmati minuman dan berkenalan. Awalnya, kita hanya mengira pertemuan tersebut akan usai setelah acara selesai </p>
              <p data-aos="fade-up" data-aos-duration='1000'
              className='bonheur text-[30px] mt-4'>Long Distance</p>
              <p data-aos="fade-up" data-aos-duration='1500'
              className='bodoni px-4'>Jodoh akan selalu menemukan jalannya, setelah pulang ke kota asal. kami tetap berinteraksi meski via suara. <br /> Tanpa pernah mendeklarasikan tanggal pacara, tiba-tiba saja hubungan kami menjadi semakin dekat, betapa hebatnya kami menjalani 2 tahun lebih tanpa bisa melihat, tanpa bertemu atau bahkan tanpa malam minggu. <br /> Tapi, komitmen dan kesetiaan akhirnya menuntun kami ke jalan yang lebih serius </p>
              <p data-aos="fade-up" data-aos-duration='1000'
              className='bonheur text-[30px] mt-4'>I Said YES!</p>
              <p data-aos="fade-up" data-aos-duration='1500'
              className='bodoni px-4 mb-10'>Hingga awal 2025, ia dengan yakin dan berani menempuh jarak yang hampir 900 KM yang selama ini menjadi pemisah kita, untuk menemui Ayahku seorang diri guna meminta aku menjadi pendamping hidupnya. <br/> <br /> Tuhan Maha baik, merestui melalui tangan orang tuaku yang menyambutnya dengan hangat. Tak lama pertemuan kedua keluargapun digelar. Semua syukur dengan bahagia merayakan. <br /><br /> Kata kebanyakan orang hubungan LDR akan menemui kegagalan, tapi kami percaya dan beryukur bisa memiliki keyakinan sekecil apapun meski hanya 1% peluang. Dan yah, kami beruntung menjadi bagian 1% itu. </p>
            </div>
      </div>

      {/* Wedding Gift */}
      <div className='flex flex-col w-full min-h-screen bg-[#FCF6E6] items-center'>
        <div className='flex flex-row items-center justify-center'>
          <img src={bunga1} alt="" className='goyang-rotate rotate-[25deg] -translate-x-[30%] ' />
          <p data-aos="fade-up" data-aos-duration='1000'
           className='caveat text-[30px] -translate-x-[30%] text-[#453327]'>Wedding Gift</p>
        </div>
        <div className='bg-white/30  flex flex-col lg:flex-row lg:w-2/3 -mt-20 items-center m-10 rounded-4xl border-[#B19740] border-2 p-4 text-right'>
         
          <div className='mt-10 lg:mt-0 lg:mx-10'>
            <img data-aos="flip-right" data-aos-duration='1000' src={jago} alt="" />
            <div className='flex flex-row-reverse justify-between'>
              <div>
                <p data-aos="fade-right" data-aos-duration='1000' className='font-mono font-bold'>{accountNumber}</p>
                <p data-aos="fade-right" data-aos-duration='1000'>A.n Ajeng Ayu P</p>
              </div>
              <button data-aos="fade-left" data-aos-duration='1000' className='shadow-2xs shadow-amber-800'
              onClick={handleCopy}
              >{copied ? "Copied" : "Copy"}</button>
            </div>
          </div>
          
           <div className='mt-10 lg:mt-0 lg:mx-10'>
            <img data-aos="flip-right" data-aos-duration='1000' src={jago} alt="" />
            <div className='flex flex-row-reverse justify-between'>
              <div>
                <p data-aos="fade-right" data-aos-duration='1000' className='font-mono font-bold'>{accountNumber1}</p>
                <p data-aos="fade-right" data-aos-duration='1000'>A.n Heri Sukoco</p>
              </div>
              <button data-aos="fade-left" data-aos-duration='1000' className='shadow-2xs shadow-amber-800'
              onClick={handleCopy1}
              >{copied1 ? "Copied" : "Copy"}</button>
            </div>
          </div>
        </div>  
      </div>

      {/* Halaman penutup */}
      <div className='w-full relative overflow-hidden min-h-screen  flex flex-col items-center text-center justify-center'>
        <img data-aos="zoom-in" data-aos-duration='1000' src={bg3} alt="" className='w-full absolute top-0 lg:w-1/2 h-screen object-cover'/>
        <div data-aos="zoom-in" data-aos-duration='1300' className=' absolute items-center justify-center min-h-screen  w-full z-2  flex flex-col bg-transparent text-white p-10 bg-gradient-to-b from-white/5 to-black/80'>
          <p data-aos="zoom-in" data-aos-duration='1500' className='mb-16 mt-[300px]'>Atas kehadiran dan doa restunya, 
            kami ucapkan terima kasih</p>

            <img data-aos="flip-right" data-aos-duration='2000' src={line} alt="" />
            <p data-aos="fade-up" data-aos-duration='2000' className='bonheur  text-[60px] mt-[30px]'>
          Heri & Ajeng
        </p>
        </div>
        <p className='z-3 absolute bottom-4 text-white/50 text-[8px]'><br />Designed by : Ajeng <br /> Code by : Heri</p>
      </div>
      

    </>
  )
}

export default App
