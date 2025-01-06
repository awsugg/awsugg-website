import React from "react";

function GetInvolved() {
  return (
    <section>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Involucrate
      </h2>
      <div className="p-4">
        <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#423b54] bg-[#131118] p-5 md:flex-row md:items-center">
          <div className="flex flex-col gap-1">
            <p className="text-white text-base font-bold leading-tight">
             Conviértete en Speaker
            </p>
            <p className="text-[#a49db9] text-base font-normal leading-normal">
              Comparte tu conocimiento y experiencia con nuestra comunidad hablando
              en nuestros próximos eventos         
            </p>
          </div>
          <a
            className="text-sm font-bold leading-normal tracking-[0.015em] flex gap-2 text-white"
            href="https://sessionize.com/aws-user-group-guatemala-2025-meetup/"
          >
            Aplíca ahora
            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#423b54] bg-[#131118] p-5 md:flex-row md:items-center">
            <div className="flex flex-col gap-1">
            <p className="text-white text-base font-bold leading-tight">
             Conviértete en Sponsor
            </p>
            <p className="text-[#a49db9] text-base font-normal leading-normal">
                Ayudanos a crecer y a mejorar nuestros eventos con tu patrocinio.
            </p>
            </div>
            <a
            className="text-sm font-bold leading-normal tracking-[0.015em] flex gap-2 text-white"
            href="https://wa.link/ivjcb3">
            Contactanos
            <div className="text-white">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
                >
                <path
                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                ></path>
                </svg>
            </div>
            </a>
        </div>
    </div>
    </section>
  );
}

export default GetInvolved;
