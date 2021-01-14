import { combineReducers } from "redux";
import gameDetailsReducer from "./gameDetailsReducer";
import gamesReducer from "./gamesReducer";

const allReducers = combineReducers({
  games: gamesReducer,
  game: gameDetailsReducer,
});

export default allReducers;
