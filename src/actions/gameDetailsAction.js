import axios from "axios";
import { gamePageURL, screenshotsURL, storeNameURL } from "../api";

export const loadGameDetails = (game_id) => async (dispatch) => {
  const gameDetails = await axios.get(gamePageURL(game_id));
  const screenshots = await axios.get(screenshotsURL(game_id));
  const storesName = await axios.get(storeNameURL(game_id));
  dispatch({
    type: "FETCH_GAME_DETAILS",
    payload: {
      game: gameDetails.data,
      screenshots: screenshots.data.results,
      popUpHandler: true,
      stores: storesName.data.results,
    },
  });
};

// export const loadStoresDetails = (store) => async (dispatch) => {
//   const storeName = await axios.get(storeNameURL(store));
//   dispatch({
//     type: "FETCH_STORES_NAME",
//     payload: {
//       storesURL: storeName.data.results,
//     },
//   });
// };

export const closeGamePage = () => async (dispatch) => {
  dispatch({
    type: "CLOSE_GAME_PAGE",
    payload: {
      popUpHandler: false,
    },
  });
};
