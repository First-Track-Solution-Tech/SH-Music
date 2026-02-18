import { Link } from "react-router-dom";

const Aesthetic_cards = ({ id, image, name, desc }) => {
  return (
    <Link
      to={`/aesthetic/${id}`}
      className="flex-shrink-0 w-[220px] rounded-xl bg-[#181818] hover:bg-[#252525] transition p-4"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[220px] object-cover rounded-lg mb-3"
      />

      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-400 line-clamp-2">{desc}</p>
    </Link>
  );
};

export default Aesthetic_cards;
