import React from "react";
import Header from "../common/Header";
import TeamCard from "../cards/TeamCard";

function TeamSection() {
  const teamData = [
    {
      id: 0,
      imageUrl: "/images/eu.jpg",
      name: "Igor Akira",
      profession: "Desenvolvedor"
    },
    {
      id: 1,
      imageUrl: "/images/Nicola.jpg",
      name: "Nicola Monte",
      profession: "Desenvolvedor"
    },
    {
      id: 2,
      imageUrl: "/images/Willyam.jpeg",
      name: "Willyam Santos",
      profession: "Desenvolvedor"
    },
  ];
  return (
    <section className="mt-[9rem]">
      <Header title="Desenvolvedores" subtitle="Nossa Equipe" />
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-[3.31rem]">
        {teamData.map((team) => (
          <TeamCard
            key={team.id}
            imageUrl={team.imageUrl}
            name={team.name}
            profession={team.profession}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
