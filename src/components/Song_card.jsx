import React from "react";
import { useNavigate } from "react-router-dom";

const Song_card = ({ image, name, desc, id }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/player/${id}`, {
      state: { image, name, desc, id }
    });
  };

  return (
    <div
      onClick={handleClick}
      className="w-[180px] shrink-0 p-2 px-3 rounded cursor-pointer hover:bg-gray-600 transition"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default Song_card;