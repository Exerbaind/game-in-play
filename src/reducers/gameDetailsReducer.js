const initialState = {
  game: {},
  screenshots: [],
  trailers: [],
  storesName: [],
  popUpHandler: false,
  stores: [],
};

const gameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAME_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        popUpHandler: action.payload.popUpHandler,
        screenshots: action.payload.screenshots,
        stores: action.payload.stores,
      };
    // case "FETCH_STORES_NAME": {
    //   return {
    //     ...state,
    //     storesURL: action.payload.storesURL,
    //   };
    // }
    case "CLOSE_GAME_PAGE":
      return {
        ...state,
        popUpHandler: action.payload.popUpHandler,
      };
    default:
      return {
        ...state,
      };
  }
};

export default gameDetailsReducer;
