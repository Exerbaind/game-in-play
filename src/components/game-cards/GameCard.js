import React from "react";

import { useDispatch } from "react-redux";

import { loadGameDetails } from "../../actions/gameDetailsAction";

import { dateTransform } from "../../extra-functions/dateTransform";

// Картинки
import noImage from "../../assets/images/no-image.jpg";
import android from "../../assets/platforms/android.svg";
import mac from "../../assets/platforms/mac.svg";
import nintendo from "../../assets/platforms/nintendo.svg";
import playstation from "../../assets/platforms/playstation.svg";
import xbox from "../../assets/platforms/xbox.svg";
import steam from "../../assets/platforms/steam.svg";
import pc from "../../assets/platforms/pc.svg";
import ios from "../../assets/platforms/ios.svg";
import linux from "../../assets/platforms/linux.svg";
import sega from "../../assets/platforms/sega.svg";

const SmallGameCard = ({ game }) => {
  const dispatch = useDispatch();

  const takeGameID = (game_id) => {
    dispatch(loadGameDetails(game_id));
    document.body.style.overflow = "hidden";
  };

  const gameRating = () => {
    if (game.metacritic > 70) {
      return "game-card__rating--green";
    } else if (game.metacritic < 70 && game.metacritic > 50) {
      return "game-card__rating--orange";
    } else {
      return "game-card__rating--red";
    }
  };

  const gamePlatforms = (platform) => {
    switch (platform) {
      case "xbox":
        return xbox;
      case "playstation":
        return playstation;
      case "android":
        return android;
      case "mac":
        return mac;
      case "nintendo":
        return nintendo;
      case "steam":
        return steam;
      case "pc":
        return pc;
      case "ios":
        return ios;
      case "linux":
        return linux;
      case "sega":
        return sega;
      default:
        break;
    }
  };
  return (
    <div className="game-card">
      {game.background_image ? (
        <div
          className="game-card__image-container"
          style={{ backgroundImage: `url(${game.background_image})` }}
        >
          {game.metacritic ? (
            <p className={`game-card__rating ${gameRating()}`}>
              {game.metacritic}
            </p>
          ) : (
            <p className="game-card__rating game-card__rating--empty">
              Нет оценки
            </p>
          )}
        </div>
      ) : (
        <div
          className="game-card__image-container"
          style={{ backgroundImage: `url(${noImage})` }}
        ></div>
      )}
      <div className="game-card__content">
        <p className="game-card__title">{game.name}</p>
        <div className="game-card__platforms">
          <span>Платформы:</span>
          {game.parent_platforms.map((platform) => {
            return (
              <img
                src={gamePlatforms(platform.platform.slug)}
                alt=""
                className="game-card__platform-icon"
                title={platform.platform.name}
                key={platform.platform.id}
              />
            );
          })}
        </div>
        <p className="game-card__released-date">
          <span>Дата выхода: </span>
          {game.released && dateTransform(game.released)}
        </p>
        <p className="game-card__released-date">
          <span>Жанр: </span>
          {game.genres &&
            game.genres.map((genre, index) => {
              if (index === game.genres.length - 1) {
                return genre.name;
              } else {
                return genre.name + ", ";
              }
            })}
        </p>
        <button className="game-card__more" onClick={() => takeGameID(game.id)}>
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default SmallGameCard;

// Ссылка для отображения магазинов, в которых продается игра https://api.rawg.io/api/games/{game_pk}/stores
