import React from "react";
// Redux

import { useSelector } from "react-redux";

// Компоненты

import Preloader from "../../components/Preloader";

import GameCard from "../../components/game-cards/GameCard";
// Подключение экшенов

// Компоненты

const SearchedGames = () => {
  const games = useSelector((state) => state.games.searched);

  return (
    <div className="games-page__container mt-80">
      <div className="games-page__list">
        {games.length ? (
          games.map((game) => {
            return <GameCard game={game} key={game.id} />;
          })
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
};

export default SearchedGames;
