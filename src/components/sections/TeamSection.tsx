import React from "react";
import Header from "../common/Header";
import TeamCard from "../cards/TeamCard";

function TeamSection() {
  const teamData = [
    {
      id: 0,
      imageUrl: "/images/Igorgs.jpg",
      name: "Igor Akira",
      profession: "Desenvolvedor",
      instagramLink: "https://www.instagram.com/akira.igoor/",
      githubLink: "https://github.com/Akiraaa07",
      linkedinLink: "https://www.linkedin.com/in/igor-akira-tateishi-6a812627a/"
    },
    {
      id: 1,
      imageUrl: "/images/Nicola.jpg",
      name: "Nicola Monte",
      profession: "Desenvolvedor",
      instagramLink: "https://www.instagram.com/nicola.aa",
      githubLink: "https://github.com/Nicola3423",
      linkedinLink: "https://www.linkedin.com/in/nicola-monte-cravo-garofalo-3757902b0/"
    },
    {
      id: 2,
      imageUrl: "/images/Willyam.jpeg",
      name: "Willyam Santos",
      profession: "Desenvolvedor",
      instagramLink: "https://www.instagram.com/santoswillyam/",
      githubLink: "https://github.com/Will-0101",
      linkedinLink: "https://www.linkedin.com/in/willyam-santos/"
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
            instagramLink={team.instagramLink}
            githubLink={team.githubLink}
            linkedinLink={team.linkedinLink}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
