import { useSelector, useDispatch } from "react-redux";

import { closeGamePage } from "../../actions/gameDetailsAction";

import { dateTransform } from "../../extra-functions/dateTransform";

const GamePage = () => {
  const game = useSelector((state) => state.game.game);
  const popUpHandler = useSelector((state) => state.game.popUpHandler);
  const screenshots = useSelector((state) => state.game.screenshots);
  const stores = useSelector((state) => state.game.stores);

  const dispatch = useDispatch();

  const gamePageToggle = () => {
    dispatch(closeGamePage());
    document.body.style.overflow = "auto";
  };

  const storeName = (store) => {
    switch (store) {
      case 2:
        return "Microsoft Store";
      case 3:
        return "Playstation Store";
      case 5:
        return "Gog Store";
      case 11:
        return "Epic Games";
      case 1:
        return "Steam";
      case 6:
        return "Nintendo";
      case 8:
        return "Play Market";
      case 4:
        return "App Store";
      default:
        break;
    }
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
            <div className="game-page__stores-item">
              {stores &&
                stores.map((store) => {
                  return (
                    <a
                      href={store.url}
                      target="_blank"
                      rel="noreferrer"
                      className="stores-item__link"
                      key={store.id}
                    >
                      {storeName(store.store_id)}
                    </a>
                  );
                })}
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
