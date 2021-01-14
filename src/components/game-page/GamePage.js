import { useSelector, useDispatch } from "react-redux";

import { closeGamePage } from "../../actions/gameDetailsAction";

import { dateTransform } from "../../extra-functions/dateTransform";

const GamePage = () => {
  const game = useSelector((state) => state.game.game);
  const popUpHandler = useSelector((state) => state.game.popUpHandler);
  const screenshots = useSelector((state) => state.game.screenshots);

  const dispatch = useDispatch();

  const gamePageToggle = () => {
    dispatch(closeGamePage());
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={`game-page__container ${
        popUpHandler ? "game-page__container--active" : ""
      }`}
    >
      <div className="game-page">
        <button className="game-page__close" onClick={gamePageToggle}>
          <span></span>
        </button>
        <img
          src={game.background_image}
          alt={game.name}
          className="game-page__image"
        />
        <div className="game-page__content">
          <h1 className="game-page__game-title">{game.name}</h1>
          <div className="game-page__game-information">
            <div className="game-page__information-item">
              <p className="information-item__point">
                <span className="information-item__point-name">Издатель: </span>
                {game.developers &&
                  game.developers.map((developer, index) => {
                    if (index === game.developers.length - 1) {
                      return developer.name;
                    } else {
                      return developer.name + ", ";
                    }
                  })}
              </p>
            </div>
            <div className="game-page__information-item">
              <p className="information-item__point">
                <span className="information-item__point-name">
                  Дата выхода:{" "}
                </span>
                {game.released && dateTransform(game.released)}
              </p>
            </div>
          </div>
          <div className="game-page__section">
            <h2 className="game-page__sub-title">Описание:</h2>
            <p className="game-page__description">{game.description_raw}</p>
          </div>
          <div className="game-page__section">
            <h3 className="game-page__sub-title">Скриншоты:</h3>
            <div className="game-page__screenshots-container">
              {screenshots.map((screenshot) => {
                return (
                  <img
                    src={screenshot.image}
                    alt=""
                    key={screenshot.id}
                    className="game-page__screenshot"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GamePage;
