import React, { useEffect, useState } from "react";
// Redux

import { useDispatch, useSelector } from "react-redux";
import { loadActionGames } from "../../actions/gamesAction";

// Компоненты

import Preloader from "../../components/Preloader";
import Filters from "../../components/filters/Filters";
import PageHandler from "../../components/page-handler/PageHandler";

import GameCard from "../../components/game-cards/GameCard";
// Подключение экшенов

// Компоненты

const ActionGames = () => {
  const games = useSelector((state) => state.games.genreAction);

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

  const nextPage = () => {
    if (pageNumber < 499) {
      setPageNumber(pageNumber + 1);
    }
  };
  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const popUpHandler = useSelector((state) => state.game.popUpHandler);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadActionGames(pageNumber, ordering, platform));
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
      <PageHandler
        popUpHandler={popUpHandler}
        prevPage={prevPage}
        pageNumber={pageNumber}
        nextPage={nextPage}
      />
    </div>
  );
};

export default ActionGames;
