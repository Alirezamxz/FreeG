import React from "react";
import { Link } from "react-router-dom";
import { DiWindows, DiChrome } from "react-icons/di";

const GameCard = ({
  id,
  title,
  short_description,
  thumbnail,
  genre,
  platform,
}) => {
  return (
    <Link to={`/games/${id}`}>
      <div className="w-full bg-secondary-500 rounded-xl transform transition-transform hover:-translate-y-2">
        <img src={thumbnail} alt={title} className="rounded-t-xl h-36 w-full" />
        <div className="p-5 space-y-3">
          <div className="flex justify-between">
            <h4 className="font-semibold w-3/4 truncate">{title}</h4>
            <span className="text-xs bg-primary-500 rounded-md text-center font-semibold my-auto px-2 py-0.5">
              FREE
            </span>
          </div>
          <p className="h-12 overflow-hidden text-xs text-secondary-100 leading-loose">
            {short_description}
          </p>
          <div className="flex justify-between">
            <span className="text-xs font-semibold my-auto">{genre}</span>
            <span>
              {platform === "PC (Windows)" ? (
                <DiWindows className="text-primary-500 w-6 h-6" />
              ) : (
                <DiChrome className="text-primary-500 w-6 h-6" />
              )}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
