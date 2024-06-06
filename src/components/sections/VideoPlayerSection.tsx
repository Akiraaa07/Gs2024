import React from "react";

function VideoPlayerSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-8 mt-[11.31rem]">
      <div>
        <p className="text-lightBlue font-bold text-2xl">
          Protegendo Nosso Oceano
        </p>
        <p className="text-customLightGray text-[1.2rem] mt-4 mb-8">
          Aprenda sobre as iniciativas e esforços em andamento para preservar os
          nossos oceanos e garantir um futuro sustentável para as próximas
          gerações.
        </p>
      </div>
      <div className="w-full md:w-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fxnk97iBWJM" 
          title="Ocean Conservation Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-auto md:w-[560px] md:h-[315px]"
        ></iframe>
      </div>
    </section>
  );
}

export default VideoPlayerSection;
