import React from "react";
import { useTruncate } from "../../hooks/useTruncate";

export const GameDetails = ({
  title,
  desc,
  developer,
  publisher,
  genre,
  date,
  platform,
}) => {
  const { text } = useTruncate(desc, { length: 500, ending: "..." });

  return (
    <div className="pt-16 space-y-12">
      <div>
        <h5 className="font-semibold text-2xl mb-5">About {title}</h5>
        <p className="leading-loose opacity-80">{text}</p>
      </div>
      <div>
        <h5 className="font-semibold text-2xl">Additional Information</h5>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-8">
          <div className="space-y-2 md:mb-5 lg:mb-0">
            <span className="block text-primary-300 font-semibold">Title</span>
            <span className="block text-secondary-200 w-2/3 truncate">
              {title}
            </span>
          </div>
          <div className="space-y-2 mb-5 lg:mb-0">
            <span className="block text-primary-300 font-semibold">
              Developer
            </span>
            <span className="block text-secondary-200 w-2/3 truncate">
              {developer}
            </span>
          </div>
          <div className="space-y-2 mb-5 lg:mb-0">
            <span className="block text-primary-300 font-semibold">
              Publisher
            </span>
            <span className="block text-secondary-200 w-2/3 truncate">
              {publisher}
            </span>
          </div>
          <div className="space-y-2 mb-5 lg:mb-0">
            <span className="block text-primary-300 font-semibold">
              Release Date
            </span>
            <span className="block text-secondary-200 w-2/3 truncate">
              {date}
            </span>
          </div>
          <div className="space-y-2 mb-5 lg:mb-0">
            <span className="block text-primary-300 font-semibold">Genre</span>
            <span className="block text-secondary-200 w-2/3 truncate">
              {genre}
            </span>
          </div>
          <div className="space-y-2 mb-5 lg:mb-0">
            <span className="block text-primary-300 font-semibold">
              Platform
            </span>
            <span className="block text-secondary-200 w-2/3 truncate">
              {platform}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
