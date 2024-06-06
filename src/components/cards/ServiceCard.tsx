import React from "react";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  action?: () => void;
}

function ServiceCard({ iconUrl, title, description, action }: IProps) {
  return (
    <div className="flex flex-grow flex-col gap-[2.56rem] pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center service-card-shadow rounded-[1.75rem]">
      <div>
        <img
          src={iconUrl}
          alt="service icon"
          className="w-24 h-24 object-cover"
        />
      </div>
      <p className="text-[2.25rem] font-[700]">{title}</p>
      <p className="text-normal">{description}</p>
      <button
        className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-none cursor-pointer w-[10.125rem]"
        onClick={action}
      >
        Saber Mais
      </button>
    </div>
  );
}

export default ServiceCard;
