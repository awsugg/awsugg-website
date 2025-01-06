import React from "react";
import SocialLinks from './components/SocialLinks';
import GetInvolved from './components/GetInvolved';
import CommunityLeaders from './components/CommunityLeaders';
import Header from "./components/Header";
import WelcomeMessage from "./components/WelcomeMessage";
import CenteredImage from "./components/CenteredImage";

function App() {
  return (
    <div style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }} className="bg-[#131118] dark">
      {/* Header */}
      <Header />

      

      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center w-full max-w-[80%] mx-auto">


      {/* Imagen centrada */}
      <section className="w-full">
              <CenteredImage />
            </section>

        {/* Sección de bienvenida */}
        <section className="w-full px-4 py-8">
          <WelcomeMessage />
        </section>

        {/* Enlaces sociales */}
        <section className="w-full px-4 py-8">
          <SocialLinks />
        </section>

        {/* Involúcrate */}
        <section className="w-full px-4 py-8">
          <GetInvolved />
        </section>

        {/* Líderes de la comunidad */}
        <section className="w-full px-4 py-8">
          <CommunityLeaders />
        </section>
      </main>
    </div>
  );
}

export default App;
