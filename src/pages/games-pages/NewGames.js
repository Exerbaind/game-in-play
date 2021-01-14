import React, { useEffect, useState } from "react";
// Redux

import { useDispatch, useSelector } from "react-redux";
import { loadNewGames } from "../../actions/gamesAction";

import Preloader from "../../components/Preloader";
import PlatformFilter from "../../components/filters/PlatformFilter";

import GameCard from "../../components/game-cards/GameCard";
// Подключение экшенов

// Компоненты

const NewGames = () => {
  const games = useSelector((state) => state.games.new);

  // Фильтр по платформе

  const platformArray = [1, 4, 18, 3, 5, 14, 16, 21, 80, 15, 24, 55, 7];

  const [platform, setPlatform] = useState(platformArray);

  const platformFilter = (value) => {
    setPlatform(value);
  };

  // Страницы с играми

  const [pageNumber, setPageNumber] = useState(1);

  const changePage = () => {
    setPageNumber(pageNumber + 1);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNewGames(pageNumber, platform));
  }, [dispatch, pageNumber, platform]);

  return (
    <div className="games-page__container">
      <PlatformFilter
        platformFilter={platformFilter}
        activePlatformTab={platform}
        platformArray={platformArray}
      />
      <div className="games-page__list">
        {games.length ? (
          games.map((game) => {
            return <GameCard game={game} key={game.id} />;
          })
        ) : (
          <Preloader />
        )}
      </div>
      <button onClick={changePage}>Загрузить еще</button>
    </div>
  );
};

export default NewGames;
