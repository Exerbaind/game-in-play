import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Sidebar from "./components/sidebar/Sidebar";
import Main from "./layout/main/Main";
import Navbar from "./components/navbar/Navbar";
import SearchForm from "./components/navbar/SearchForm";

import { searchClear } from "./actions/gamesAction";

import SearchedGames from "./pages/games-pages/SearchedGames";

// React router

import { BrowserRouter } from "react-router-dom";

// Подключение стилей
import "./style/App.css";
import GamePage from "./components/game-page/GamePage";
function App() {
  const search = useSelector((state) => state.games.searched);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchHandler, setSearchHandler] = useState(false);

  const dispatch = useDispatch();

  const navbarToggle = () => {
    setMenuIsOpen(!menuIsOpen);
    if (menuIsOpen === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    dispatch(searchClear());
  };

  const searchToggle = () => {
    setSearchHandler(!searchHandler);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          navbarToggle={navbarToggle}
          menuHandler={menuIsOpen}
          searchToggle={searchToggle}
          searchHandler={searchHandler}
        />
        <SearchForm searchToggle={searchToggle} searchHandler={searchHandler} />
        <Sidebar menuIsOpen={menuIsOpen} navbarToggle={navbarToggle} />
        {search.length ? (
          <SearchedGames searchHandler={searchToggle} />
        ) : (
          <Main />
        )}
        <GamePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
