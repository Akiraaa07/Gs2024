import React from "react";
import { Separator } from "@/components/ui/separator";

interface IProps {
  imageUrl: string;
  name: string;
  profession: string;
  instagramLink?: string;
  githubLink?: string;
  linkedinLink?: string;
}

function TeamCard({ imageUrl, name, profession, instagramLink, githubLink, linkedinLink }: IProps) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center border-[4px] border-[#EBEAED] rounded-t-[1rem] py-[3rem]">
        <div>
          <img
            src={imageUrl}
            alt="team member photo"
            className="w-[7.5rem] h-[7.5rem] rounded-full"
          />
        </div>
        <p className="text-lightBlue font-bold text-[1.2rem] my-6">{name}</p>
        <p className="text-darkBlue font-bold opacity-[0.3]">{profession}</p>
      </div>

      <div className="flex justify-around items-center h-[3.6875rem] border-[4px] border-[#EBEAED] border-t-0  rounded-b-[1rem]">
        {instagramLink && (
          <div>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <img src="/images/LogoInsta.png" alt="Instagram icon" className="w-8 h-8" />
            </a>
          </div>
        )}
        <Separator orientation="vertical" color="#EBEAED" className="w-[3px]" />
        {githubLink && (
          <div>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src="/images/LogoGit.png" alt="GitHub icon" className="w-8 h-8" />
            </a>
          </div>
        )}
        <Separator orientation="vertical" color="#EBEAED" className="w-[3px]" />
        {linkedinLink && (
          <div>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img src="/images/LogoLink.png" alt="LinkedIn icon" className="w-8 h-8" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamCard;