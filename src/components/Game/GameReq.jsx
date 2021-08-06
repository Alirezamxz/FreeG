import React from "react";

export const GameReq = ({ title, platform, system }) => {
  return (
    <div className="pt-16">
      <h5 className="font-semibold text-2xl mb-5">System Requirements</h5>
      {platform === "Web Browser" ? (
        <p className="leading-loose">
          {title} is a browser based game and should run smoothly on practically
          any PC with a updated web-browser. <br /> If you have old hardware or
          software, you may still be able to play Elvenar, but your game
          experience may suffer. For the best gameplay experience, we recommend
          the latest versions of Firefox, Chrome, or Internet Explorer.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          <div className="space-y-2 mb-7">
            <span className="block text-primary-300 font-semibold">OS</span>
            <span className="block text-secondary-200 w-2/3 truncate">
              {system.os}
            </span>
          </div>
          <div className="space-y-2 mb-7">
            <span className="block text-primary-300 font-semibold">
              Processor
            </span>
            <span className="block text-secondary-200 w-2/3 truncate">
              {system.processor}
            </span>
          </div>
          <div className="space-y-2 mb-7">
            <span className="block text-primary-300 font-semibold">Memory</span>
            <span className="block text-secondary-200 w-2/3 truncate">
              {system.memory}
            </span>
          </div>
          <div className="space-y-2 mb-7">
            <span className="block text-primary-300 font-semibold">
              Graphics
            </span>
            <span className="block text-secondary-200  w-2/3 truncate">
              {system.graphics}
            </span>
          </div>
          <div className="space-y-2 mb-7">
            <span className="block text-primary-300 font-semibold">
              Storage
            </span>
            <span className="block text-secondary-200 w-2/3 truncate">
              {system.storage}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
