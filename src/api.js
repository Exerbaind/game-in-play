const baseURL = "https://api.rawg.io/api/";

// Порядок размещения игр

// Преобразование дат

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Даты

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const lastYear = `${currentYear - 1}-01-01`;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// const nextYear = `${currentYear + 1}-12-31`;

export const newGamesURL = (pageNumber, platform) => {
  return `${baseURL}games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&platforms=${platform}&page=${pageNumber}`;
};
export const popularGamesURL = (pageNumber, platform) => {
  return `${baseURL}games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-popular&platforms=${platform}&page=${pageNumber}`;
};
export const bestOfTheYearGamesURL = (pageNumber, platform) => {
  return `${baseURL}games?key=${process.env.REACT_APP_API_KEY}&dates=${
    currentYear - 1
  }-01-01,${currentDate}&ordering=-metacritic&platforms=${platform}&page=${pageNumber}`;
};

// По жанрам

export const genreShooterGamesURL = (pageNumber, orderingName, platform) => {
  return `${baseURL}games?genres=2&key=${process.env.REACT_APP_API_KEY}&ordering=${orderingName}&platforms=${platform}&page=${pageNumber}`;
};
export const genreRPGGamesURL = (pageNumber, orderingName, platform) => {
  return `${baseURL}games?genres=5&key=${process.env.REACT_APP_API_KEY}&ordering=${orderingName}&platforms=${platform}&page=${pageNumber}`;
};
export const genreActionGamesURL = (pageNumber, orderingName, platform) => {
  return `${baseURL}games?genres=4&key=${process.env.REACT_APP_API_KEY}&ordering=${orderingName}&platforms=${platform}&page=${pageNumber}`;
};
export const genreStrategyGamesURL = (pageNumber, orderingName, platform) => {
  return `${baseURL}games?genres=10&key=${process.env.REACT_APP_API_KEY}&ordering=${orderingName}&platforms=${platform}&page=${pageNumber}`;
};
export const genreAdventureGamesURL = (pageNumber, orderingName, platform) => {
  return `${baseURL}games?genres=3&key=${process.env.REACT_APP_API_KEY}&ordering=${orderingName}&platforms=${platform}&page=${pageNumber}`;
};
export const genrePuzzleGamesURL = (pageNumber, orderingName, platform) => {
  return `${baseURL}games?genres=7&key=${process.env.REACT_APP_API_KEY}&ordering=${orderingName}&platforms=${platform}&page=${pageNumber}`;
};
export const genreRacingGamesURL = (pageNumber, orderingName, platform) => {
  return `${baseURL}games?genres=1&key=${process.env.REACT_APP_API_KEY}&ordering=${orderingName}&platforms=${platform}&page=${pageNumber}`;
};
export const genrePlatformerGamesURL = (pageNumber, orderingName, platform) => {
  return `${baseURL}games?genres=83&key=${process.env.REACT_APP_API_KEY}&ordering=${orderingName}&platforms=${platform}&page=${pageNumber}`;
};
export const genreIndieGamesURL = (pageNumber, orderingName, platform) => {
  return `${baseURL}games?genres=51&key=${process.env.REACT_APP_API_KEY}&ordering=${orderingName}&platforms=${platform}&page=${pageNumber}`;
};

// Открытие определенной игры в popup

export const gamePageURL = (game_id) => {
  return `${baseURL}games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;
};

// Скриншоты из игры

export const screenshotsURL = (game_id) => {
  return `${baseURL}games/${game_id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;
};

// Трейлеры для игры

// export const trailersURL = (game_id) => {
//   return `${baseURL}games/${game_id}/movies?key=${process.env.REACT_APP_API_KEY}`;
// };

// Магазины

export const storeNameURL = (store_id) => {
  return `${baseURL}games/${store_id}/stores?key=${process.env.REACT_APP_API_KEY}`;
};

// Поиск игр

export const searchURL = (game_name) => {
  return `${baseURL}games?search=${game_name}&key=${process.env.REACT_APP_API_KEY}&ordering=-metacritic&page_size=50`;
};
