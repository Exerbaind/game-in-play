import axios from "axios";
import { gamePageURL, screenshotsURL } from "../api";

export const loadGameDetails = (game_id) => async (dispatch) => {
  const gameDetails = await axios.get(gamePageURL(game_id));
  const screenshots = await axios.get(screenshotsURL(game_id));
  dispatch({
    type: "FETCH_GAME_DETAILS",
    payload: {
      game: gameDetails.data,
      screenshots: screenshots.data.results,
      popUpHandler: true,
    },
  });
};

export const closeGamePage = () => async (dispatch) => {
  dispatch({
    type: "CLOSE_GAME_PAGE",
    payload: {
      popUpHandler: false,
    },
  });
};
