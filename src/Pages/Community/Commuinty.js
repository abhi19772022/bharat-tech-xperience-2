import React from 'react';
import communityBg from '../../Assets/community.png';
import chandigarh from '../../Assets/gdg chandigarh.png';
import jhalandar from '../../Assets/cp-gdg jalandhar.png';
import ludhiana from '../../Assets/cp-gdg ludhiana.png';
import acm from "../../Assets/community/acm 2.jpg";
import acm2 from "../../Assets/community/acm 3.jpg";
import acm3 from "../../Assets/community/acmLogo.png";
import fluxus from "../../Assets/community/fluxus.png";
import slite from "../../Assets/community/slite.png";
import open from "../../Assets/community/gfg.jpg";
import nit from "../../Assets/community/nit.jpg";




const communityImages = [
  chandigarh, jhalandar, ludhiana, acm, acm2, acm3, fluxus, slite, open, nit,
  "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumP5nr3pZ89C4GnNKHTXFvruVyAOm6ZwU2Sibo",
  "https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1eFZcb2aqBE3Tc9OfeNG6Ht0Q1DCAhwvkjIs2",
  "https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1fT1nYeZmdZB8h7Gy9E4PH6l5JzgQ0ncsxka2",
  "https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1rz8iUDQRMqkfSpwsFOXIj2goWx8nGybmucet",
];

export default function Community() {
  return (
    <div className='w-full min-h-screen mb-8' id='sponser'>
      {/* Header Section */}
      <div className="relative w-full flex py-10 md:py-20">
        <img src={communityBg} alt="Community Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <h2 className="relative z-10 text-2xl md:text-5xl text-white font-bold text-center">
          Community Partners_
        </h2>
      </div>

      {/* Community Partners Section */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {communityImages.map((image, index) => (
            <div key={index} className="bg-transparent  rounded-lg p-4 flex justify-center items-center">
              <img src={image} alt={`community-${index}`} className="w-24 h-24 md:w-28 md:h-28 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}