import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { Games } from "../services/games";
import { GameHeader, GameDetails, GameReq } from "../components/Game";

export const Game = () => {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await Games.getById(id);
      setGame(data);
    })();
  }, []);

  return (
    <>
      {game.screenshots ? (
        <>
          <Link to="/" className="flex items-center text-secondary-100">
            <MdArrowBack className="text-lg" />{" "}
            <span className="text-md ml-2">Back</span>
          </Link>
          <GameHeader
            id={id}
            cover={game.screenshots[0].image}
            title={game.title}
            desc={game.short_description}
            publisher={game.publisher}
            developer={game.developer}
          />
          <GameDetails
            title={game.title}
            desc={game.description}
            developer={game.developer}
            publisher={game.publisher}
            genre={game.genre}
            date={game.release_date}
            platform={game.platform}
          />
          <GameReq
            platform={game.platform}
            title={game.title}
            system={game.minimum_system_requirements}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
