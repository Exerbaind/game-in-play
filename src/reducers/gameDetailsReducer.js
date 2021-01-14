const initialState = {
  game: {},
  screenshots: [],
  trailers: [],
  stores: [],
  storesName: [],
  popUpHandler: false,
};

const gameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAME_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        popUpHandler: action.payload.popUpHandler,
        screenshots: action.payload.screenshots,
      };
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
