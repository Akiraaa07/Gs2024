import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/preservaçãomarinha.jpg",
      title: "Preservação Marinha",
      description:
        "Promovemos ações e campanhas para proteger a biodiversidade marinha, garantindo um ecossistema saudável para as futuras gerações.",
    },
    {
      id: 1,
      iconUrl: "/images/educaçãoambiental.png",
      title: "Educação Ambiental",
      description:
        "Educamos e conscientizamos comunidades sobre a importância dos oceanos, destacando práticas sustentáveis para preservar nossos recursos hídricos.",
    },
    {
      id: 2,
      iconUrl: "/images/pesquisainovação.png",
      title: "Pesquisa e Inovação",
      description:
        "Apoiamos pesquisas e iniciativas tecnológicas que visam a conservação e a restauração dos ambientes marinhos.",
    },
  ];
  return (
    <section>
      <Header title="Objetivos" subtitle="Nossa Visão & Nosso Objetivo" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;