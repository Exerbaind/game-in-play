import axios from "axios";
import {
  newGamesURL,
  popularGamesURL,
  bestOfTheYearGamesURL,
  genreShooterGamesURL,
  genreRPGGamesURL,
  genreActionGamesURL,
  genreStrategyGamesURL,
  genreAdventureGamesURL,
  genrePuzzleGamesURL,
  genreRacingGamesURL,
  genrePlatformerGamesURL,
  genreIndieGamesURL,
  searchURL,
} from "../api";

export const loadPopularGames = (pageNumber, platformName) => async (
  dispatch
) => {
  const popularGames = await axios.get(
    popularGamesURL(pageNumber, platformName)
  );
  dispatch({
    type: "FETCH_POPULAR_GAMES",
    payload: {
      popular: popularGames.data.results,
    },
  });
};

export const loadNewGames = (pageNumber, platformName) => async (dispatch) => {
  const newGames = await axios.get(newGamesURL(pageNumber, platformName));
  dispatch({
    type: "FETCH_NEW_GAMES",
    payload: {
      new: newGames.data.results,
    },
  });
};

export const loadBestOfYearGames = (pageNumber, platformName) => async (
  dispatch
) => {
  const bestGames = await axios.get(
    bestOfTheYearGamesURL(pageNumber, platformName)
  );
  dispatch({
    type: "FETCH_BEST_OF_YEAR_GAMES",
    payload: {
      bestOfTheYear: bestGames.data.results,
    },
  });
};

export const loadShooterGames = (
  pageNumber,
  orderingName,
  platformName
) => async (dispatch) => {
  const shooterGames = await axios.get(
    genreShooterGamesURL(pageNumber, orderingName, platformName)
  );

  dispatch({
    type: "FETCH_SHOOTER_GAMES",
    payload: {
      genreShooter: shooterGames.data.results,
    },
  });
};

export const loadRPGGames = (pageNumber, orderingName, platformName) => async (
  dispatch
) => {
  const rpgGames = await axios.get(
    genreRPGGamesURL(pageNumber, orderingName, platformName)
  );
  dispatch({
    type: "FETCH_RPG_GAMES",
    payload: {
      genreRPG: rpgGames.data.results,
    },
  });
};

export const loadActionGames = (
  pageNumber,
  orderingName,
  platformName
) => async (dispatch) => {
  const actionGames = await axios.get(
    genreActionGamesURL(pageNumber, orderingName, platformName)
  );
  dispatch({
    type: "FETCH_ACTION_GAMES",
    payload: {
      genreAction: actionGames.data.results,
    },
  });
};

export const loadStrategyGames = (
  pageNumber,
  orderingName,
  platformName
) => async (dispatch) => {
  const strategyGames = await axios.get(
    genreStrategyGamesURL(pageNumber, orderingName, platformName)
  );
  dispatch({
    type: "FETCH_STRATEGY_GAMES",
    payload: {
      genreStrategy: strategyGames.data.results,
    },
  });
};

export const loadAdventureGames = (
  pageNumber,
  orderingName,
  platformName
) => async (dispatch) => {
  const adventureGames = await axios.get(
    genreAdventureGamesURL(pageNumber, orderingName, platformName)
  );
  dispatch({
    type: "FETCH_ADVENTURE_GAMES",
    payload: {
      genreAdventure: adventureGames.data.results,
    },
  });
};

export const loadPuzzleGames = (
  pageNumber,
  orderingName,
  platformName
) => async (dispatch) => {
  const puzzleGames = await axios.get(
    genrePuzzleGamesURL(pageNumber, orderingName, platformName)
  );
  dispatch({
    type: "FETCH_PUZZLE_GAMES",
    payload: {
      genrePuzzle: puzzleGames.data.results,
    },
  });
};

export const loadRacingGames = (
  pageNumber,
  orderingName,
  platformName
) => async (dispatch) => {
  const racingGames = await axios.get(
    genreRacingGamesURL(pageNumber, orderingName, platformName)
  );
  dispatch({
    type: "FETCH_RACING_GAMES",
    payload: {
      genreRacing: racingGames.data.results,
    },
  });
};

export const loadPlatformerGames = (
  pageNumber,
  orderingName,
  platformName
) => async (dispatch) => {
  const platformerGames = await axios.get(
    genrePlatformerGamesURL(pageNumber, orderingName, platformName)
  );
  dispatch({
    type: "FETCH_PLATFORMER_GAMES",
    payload: {
      genrePlatformer: platformerGames.data.results,
    },
  });
};

export const loadIndieGames = (
  pageNumber,
  orderingName,
  platformName
) => async (dispatch) => {
  const indieGames = await axios.get(
    genreIndieGamesURL(pageNumber, orderingName, platformName)
  );
  dispatch({
    type: "FETCH_INDIE_GAMES",
    payload: {
      genreIndie: indieGames.data.results,
    },
  });
};

export const loadSearchGames = (gameName) => async (dispatch) => {
  const game = await axios.get(searchURL(gameName));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: game.data.results,
    },
  });
};

export const searchClear = () => async (dispatch) => {
  dispatch({
    type: "SEARCHED_CLEAR",
    payload: {
      searched: [],
    },
  });
};
