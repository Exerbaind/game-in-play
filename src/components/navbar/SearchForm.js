import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadSearchGames } from "../../actions/gamesAction";

import search from "../../assets/icons/search.svg";

const SearchForm = (props) => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const gameName = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const gameSearch = (e) => {
    e.preventDefault();
    dispatch(loadSearchGames(input));
    props.searchToggle(false);
  };

  return (
    <div
      className={`form-container ${
        props.searchHandler ? "form-container--active" : ""
      }`}
    >
      <form className="form" onSubmit={gameSearch}>
        <input
          type="text"
          placeholder="Название игры"
          className="form__input"
          value={input}
          onChange={gameName}
        />
        {input.length ? (
          <button type="submit" className="form__submit">
            <img src={search} alt="" />
          </button>
        ) : (
          <button type="submit" className="form__submit" disabled>
            <img src={search} alt="" />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchForm;
