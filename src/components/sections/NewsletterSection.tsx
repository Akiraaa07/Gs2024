import React from "react";
import Header from "../common/Header";

function DonationSection() {
  return (
    <section className="mt-[9rem]">
      <Header title="Juntos seremos mais fortes" subtitle="Contribua para o Projeto Oceano Azul" />
      <div className="flex flex-col md:flex-row items-center mt-8 md:mt-[3.31rem]">
        <div>
          <img
            src="/images/contribuição.png"
            alt="imagem de contribuição"
            className="w-[10rem] md:w-full"
          />
        </div>
        <div className="md:ml-8">
          <p className="mb-4 text-lg text-[#00358a] font-semibold">
            Faça a diferença. Proteja o futuro dos nossos oceanos.
          </p>
          <p className="mb-[1.44rem] text-normal font-semibold">
            Sua contribuição é crucial para preservar a vida marinha e manter
            o equilíbrio dos ecossistemas oceânicos. Ao apoiar o Projeto Oceano
            Azul, você está financiando pesquisas avançadas, iniciativas de
            educação ambiental e campanhas de conscientização global.
          </p>
          <p className="mb-4 text-lg text-[#00358a] font-semibold">
            Junte-se a nós e seja um guardião dos oceanos.
          </p>
          <p className="text-normal font-semibold">
            A mudança começa com você. Sua generosidade faz a diferença. Abrace
            esta oportunidade de proteger e preservar o nosso belo e precioso
            Oceano Azul para as gerações futuras.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DonationSection;
