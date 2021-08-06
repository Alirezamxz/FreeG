import React, { useState, useEffect } from "react";
import { usePagination } from "../hooks/usePagination";
import { Select } from "../components/Select";
import { platforms, sort } from "../config/FilterItems";
import { Games } from "../services/games";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import GameCard from "../components/GameCard";
import SkGameCard from "../Skeletons/SkGameCard";

export const Home = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [selectedSort, setSelectedSort] = useState(sort[0]);
  const [games, setGames] = useState([]);

  const { currentData, jump, next, prev, currentPage, maxPage } = usePagination(
    games,
    12
  );

  useEffect(() => {
    (async () => {
      const { data } = await Games.getAll(
        selectedPlatform.url,
        selectedSort.url
      );
      setGames(data);
      if (currentPage > 1) {
        jump(1);
      }
    })();
  }, [selectedPlatform, selectedSort]);

  return (
    <div>
      <div className="space-y-5 mb-16">
        <h3 className="text-4xl text-primary-500 font-bold text-center">
          LOGO
        </h3>
        <p className="text-secondary-200 w-full lg:w-2/3 2xl:w-1/2 mx-auto text-center leading-loose">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make
        </p>
      </div>
      <div className="md:flex items-center justify-between mb-16">
        <div className="md:flex space-y-7 md:space-y-0 md:space-x-5">
          <div className="flex lg:space-x-5">
            <span className="hidden lg:block my-auto w-full">
              Browse by platform
            </span>
            <Select
              items={platforms}
              selected={selectedPlatform}
              setSelected={setSelectedPlatform}
            />
          </div>

          <div className="flex md:space-x-5">
            <span className="hidden lg:block my-auto w-full">Sort By</span>
            <Select
              items={sort}
              selected={selectedSort}
              setSelected={setSelectedSort}
            />
          </div>
        </div>
        <div className="flex items-center justify-between space-x-5 mt-10 md:mt-0">
          <button
            onClick={prev}
            className="bg-primary-500 h-7 w-7 rounded-full focus:outline-none"
          >
            <HiChevronLeft className="m-auto w-6 h-6" />
          </button>
          <span>{currentPage + " / " + maxPage}</span>
          <button
            onClick={next}
            className="bg-primary-500 h-7 w-7 rounded-full focus:outline-none"
          >
            <HiChevronRight className="m-auto w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
        {currentData().length > 0
          ? currentData().map(game => <GameCard key={game.id} {...game} />)
          : [1, 2, 3, 4, 5, 6].map(item => <SkGameCard key={item} />)}
      </div>
    </div>
  );
};
