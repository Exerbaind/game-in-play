const initialState = {
  // по категориям
  popular: [],
  new: [],
  bestOfTheYear: [],
  // по жанрам
  genreShooter: [],
  genreRPG: [],
  genreAction: [],
  genreStrategy: [],
  genreAdventure: [],
  genrePuzzle: [],
  genreRacing: [],
  genrePlatformer: [],
  genreIndie: [],
  // upcoming: [],
  searched: [],
  // определенная игра
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POPULAR_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
      };
    case "FETCH_NEW_GAMES":
      return {
        ...state,
        new: action.payload.new,
      };
    case "FETCH_BEST_OF_YEAR_GAMES":
      return {
        ...state,
        bestOfTheYear: action.payload.bestOfTheYear,
      };
    case "FETCH_SHOOTER_GAMES":
      return {
        ...state,
        genreShooter: action.payload.genreShooter,
      };
    case "FETCH_RPG_GAMES":
      return {
        ...state,
        genreRPG: action.payload.genreRPG,
      };
    case "FETCH_ACTION_GAMES":
      return {
        ...state,
        genreAction: action.payload.genreAction,
      };
    case "FETCH_STRATEGY_GAMES":
      return {
        ...state,
        genreStrategy: action.payload.genreStrategy,
      };
    case "FETCH_ADVENTURE_GAMES":
      return {
        ...state,
        genreAdventure: action.payload.genreAdventure,
      };
    case "FETCH_PUZZLE_GAMES":
      return {
        ...state,
        genrePuzzle: action.payload.genrePuzzle,
      };
    case "FETCH_RACING_GAMES":
      return {
        ...state,
        genreRacing: action.payload.genreRacing,
      };
    case "FETCH_PLATFORMER_GAMES":
      return {
        ...state,
        genrePlatformer: action.payload.genrePlatformer,
      };
    case "FETCH_INDIE_GAMES":
      return {
        ...state,
        genreIndie: action.payload.genreIndie,
      };
    // case "FETCH_SEARCHED":
    //   return {
    //     ...state,
    //     searched: action.payload.searched,
    //   };
    default:
      return {
        ...state,
      };
  }
};

export default gamesReducer;
