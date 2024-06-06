import React from "react";

function HeroSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
          Protegemos o Oceano Azul
        </p>
        <p className="text-[1.375rem] font-[500]">
          Nosso objetivo é aumentar a conscientização sobre a importância da
          preservação dos oceanos. Junte-se a nós nessa missão para salvar o
          coração azul do nosso planeta.
        </p>
        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          <button
            className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-none w-[10.125rem]"
            type="button">
            <a href="https://voiceoftheoceans.com/" target="_blank">Saiba Mais</a>
          </button>
        </div>
      </div>
      <div>
        <img
          src="/images/Homegs.png"
          alt="pessoa admirando o oceano com ícones de preservação ao redor"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
