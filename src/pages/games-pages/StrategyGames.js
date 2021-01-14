import React, { useEffect, useState } from "react";
// Redux

import { useDispatch, useSelector } from "react-redux";
import { loadStrategyGames } from "../../actions/gamesAction";

import Preloader from "../../components/Preloader";
import Filters from "../../components/filters/Filters";

import GameCard from "../../components/game-cards/GameCard";
// Подключение экшенов

// Компоненты

const StrategyGames = () => {
  const games = useSelector((state) => state.games.genreStrategy);

  // Фильтр по выдаче игр
  const [ordering, setOrder] = useState("-metacritic");

  const orderingFilter = (value) => {
    setOrder(value);
  };

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
    dispatch(loadStrategyGames(pageNumber, ordering, platform));
  }, [dispatch, pageNumber, ordering, platform]);

  return (
    <div className="games-page__container">
      <Filters
        orderingFilter={orderingFilter}
        activeTab={ordering}
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

export default StrategyGames;
