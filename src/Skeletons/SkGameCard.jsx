import React from "react";

const SkGameCard = () => {
  return (
    <div className="w-full bg-secondary-500 rounded-xl">
      <div className="w-full bg-secondary-400 h-36 rounded-t-xl animate-pulse"></div>
      <div className="p-5 space-y-3">
        <div className="flex justify-between">
          <h4 className="w-2/4 bg-secondary-400 h-4 rounded-xl mt-1.5 animate-pulse"></h4>
          <span className="bg-secondary-400 rounded-xl mt-1.5 animate-pulse w-9 h-4"></span>
        </div>
        <div className="h-12 flex flex-col justify-center space-y-3">
          <span className="w-full block h-2 rounded-xl bg-secondary-400 animate-pulse"></span>
          <span className="w-full block h-2 rounded-xl bg-secondary-400 animate-pulse"></span>
        </div>
        <div className="flex justify-between">
          <span className="my-auto bg-secondary-400 w-16 h-3 rounded-xl animate-pulse"></span>
          <span className="my-auto bg-secondary-400 w-5 h-5 rounded-md animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default SkGameCard;
