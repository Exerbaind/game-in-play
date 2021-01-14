import { useState } from "react";

import Sidebar from "./components/sidebar/Sidebar";
import Main from "./layout/main/Main";
import Navbar from "./components/navbar/Navbar";

// React router

import { BrowserRouter } from "react-router-dom";

// Подключение стилей
import "./style/App.css";
import GamePage from "./components/game-page/GamePage";
function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navbarToggle = () => {
    setMenuIsOpen(!menuIsOpen);
    if (menuIsOpen === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar navbarToggle={navbarToggle} menuHandler={menuIsOpen} />
        <Sidebar menuIsOpen={menuIsOpen} navbarToggle={navbarToggle} />
        <Main />
        <GamePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
