import React from "react";
import { RiToolsFill, RiBankCard2Line } from "react-icons/ri";
import { useTruncate } from "../../hooks/useTruncate";
import { DiWindows, DiChrome } from "react-icons/di";

export const GameHeader = ({
  id,
  cover,
  title,
  desc,
  publisher,
  developer,
  platform,
  url,
}) => {
  const { text } = useTruncate(desc, { length: 200, ending: "..." });
  return (
    <div>
      {cover && (
        <div className="game-bg" style={{ backgroundImage: `url(${cover})` }}>
          <div className="game-gd"></div>
        </div>
      )}

      <div className="pt-12 md:pt-24 lg:pt-44 md:flex md:space-x-16 space-y-10 md:space-y-0">
        <video
          width={300}
          height={190}
          className="rounded-xl bg-secondary-400 w-full md:w-72 select-none pointer-events-none*"
          loop
          autoPlay
        >
          <source
            src={`https://www.freetogame.com/g/${id}/videoplayback.webm`}
            type="video/webm"
          />
        </video>
        <div className="space-y-6 w-full">
          <h4 className="font-semibold text-3xl">{title}</h4>
          <p className="opacity-80 max-h-24 overflow-hidden leading-loose">
            {text}
          </p>
          <div className="flex items-center space-x-5">
            <span className="flex" title="Publisher">
              <RiBankCard2Line className="mr-2 text-2xl text-primary-500" />
              {publisher}
            </span>
            <span className="flex" title="Developer">
              <RiToolsFill className="mr-2 text-2xl text-primary-500" />
              {developer}
            </span>
          </div>
        </div>
        <div className="w-52">
          <button
            onClick={() => window.open(url, "_blank")}
            className="flex items-center bg-primary-500 px-3 py-1 font-semibold text-sm rounded-lg focus:outline-none"
          >
            {platform.includes("windows") ||
            platform.includes("Windows") ||
            platform.includes("PC (Windows)") ? (
              <DiWindows className="text-white w-6 h-6 mr-1" />
            ) : (
              <DiChrome className="text-white w-6 h-6 mr-1" />
            )}{" "}
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};
