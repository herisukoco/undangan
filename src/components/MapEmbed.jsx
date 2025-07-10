// src/components/MapEmbed.jsx
const MapEmbed = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1500"
     className="w-full h-[200px]">
      <iframe
        className="w-full h-full border-1 border-amber-900 rounded-lg"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.509723526446!2d112.65052747461469!3d-7.946159879157259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629bc0c9b2711%3A0xe9018e6bcae597a7!2sSpooring%20Maharaja!5e0!3m2!1sid!2sid!4v1751729763128!5m2!1sid!2sid"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
