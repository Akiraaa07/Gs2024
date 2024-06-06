import React from "react";
import { Separator } from "../ui/separator";

function FooterSection() {
  return (
    <section className="flex flex-col gap-[1.9rem] w-full mt-[10.44rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <img src="/images/LogoFooter.png" alt="footer logo" />
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">
          © 2024 Igor Akira Bortolini Tateishi RM:554227 Turma: 1tdsz
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">
          © 2024 Nicola Monte Cravo Garofalo RM:553991 Turma: 1tdsz
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">
          © 2024 Willyam Santos Sousa RM:554244 Turma: 1tdsz
        </div>
      </div>
      <Separator />
      <div className="pb-[2.56rem]">
        <p className="text-customGray">
          Global Solution Fiap, comprometida com a preservação do oceano azul e soluções globais sustentáveis.
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
