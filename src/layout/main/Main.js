import React from "react";

// React router

import { Switch, Route } from "react-router-dom";

// Компоненты
import PopularGames from "../../pages/games-pages/PopularGames";
import ActionGames from "../../pages/games-pages/ActionGames";
import AdventureGames from "../../pages/games-pages/AdventureGames";
import BestOfYearGames from "../../pages/games-pages/BestOfYearGames";
import NewGames from "../../pages/games-pages/NewGames";
import ShooterGames from "../../pages/games-pages/ShooterGames";
import RPGGames from "../../pages/games-pages/RPGGames";
import StrategyGames from "../../pages/games-pages/StrategyGames";
import PuzzleGames from "../../pages/games-pages/PuzzleGames";
import RacingGames from "../../pages/games-pages/RacingGames";
import PlatformerGames from "../../pages/games-pages/PlatformerGames";
import IndieGames from "../../pages/games-pages/IndieGames";

const Main = (props) => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" exact>
          <PopularGames />
        </Route>
        <Route path="/new">
          <NewGames />
        </Route>
        <Route path="/best-of-year">
          <BestOfYearGames />
        </Route>
        <Route path="/genre-shooter">
          <ShooterGames />
        </Route>
        <Route path="/genre-rpg">
          <RPGGames />
        </Route>
        <Route path="/genre-action">
          <ActionGames />
        </Route>
        <Route path="/genre-strategy">
          <StrategyGames />
        </Route>
        <Route path="/genre-adventure">
          <AdventureGames />
        </Route>
        <Route path="/genre-puzzle">
          <PuzzleGames />
        </Route>
        <Route path="/genre-racing">
          <RacingGames />
        </Route>
        <Route path="/genre-platformer">
          <PlatformerGames />
        </Route>
        <Route path="/genre-indie">
          <IndieGames />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
