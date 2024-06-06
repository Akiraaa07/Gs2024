import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const appReviewData = [
    {
      id: 0,
      imageUrl: "/images/SylviaEarle.png",
      reviewerName: "Sylvia Earle",
      review:
        "A proteção dos oceanos é crucial para a saúde do nosso planeta. Através de iniciativas educacionais e preservação, podemos fazer a diferença.",
    },
    {
      id: 1,
      imageUrl: "/images/PaulWatson.jpg",
      reviewerName: "Paul Watson",
      review:
        "Nossa missão é defender, conservar e proteger a vida marinha nos oceanos do mundo. Cada ação conta para a conservação marinha.",
    },
    {
      id: 2,
      imageUrl: "/images/AlexandraCousteau.jpeg",
      reviewerName: "Alexandra Cousteau",
      review:
        "A conservação dos oceanos começa com a conscientização. Trabalhamos para educar e engajar pessoas na importância dos mares.",
    },
    {
      id: 3,
      imageUrl: "/images/DavidSchurmann.jpg",
      reviewerName: "David Schurmann",
      review:
        "Através de iniciativas inovadoras, estamos restaurando habitats marinhos e promovendo práticas sustentáveis para proteger nossos oceanos.",
    },
  ];

  return (
    <section className="mt-[9rem]">
      <Header title="Depoimentos" subtitle="Influentes sobre Oceano Azul" />
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 mt-8 md:mt-[6.75rem]">
        {appReviewData.map((review) => (
          <TestimonialCard
            key={review.id}
            imageUrl={review.imageUrl}
            review={review.review}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
