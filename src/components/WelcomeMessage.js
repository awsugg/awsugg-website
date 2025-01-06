import React from "react";

function WelcomeMessage() {
  return (
    <div className="px-10 py-6 bg-[#131118]">
      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
        Bienvenido a AWS User Group Guatemala
      </h1>
      <h2 className="text-white text-sm font-normal leading-normal mb-4">
        Somos comunidad apasionada por aprender, colaborar y compartir conocimientos sobre tecnologías en la nube de AWS.
        Nuestro objetivo es empoderar a profesionales y entusiastas tecnológicos a través de eventos, talleres y charlas en un ambiente inclusivo y colaborativo. 
        ¡Únete a nosotros y sé parte de la transformación tecnológica en Guatemala!
      </h2>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#6b3bf1] text-white text-sm font-bold leading-normal tracking-[0.015em]">
        <a
          href="https://www.meetup.com/es/aws-guatemala/"
          target="_blank"
          rel="noopener noreferrer"
          className="truncate text-white no-underline"
        >
          Únete a nosotros
        </a>
      </button>
    </div>
  );
}

export default WelcomeMessage;
