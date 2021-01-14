const Filters = (props) => {
  return (
    <div className="filters">
      <div className="filters__block">
        <p className="filters__name">Сортировать по:</p>
        <ul className="filters__list">
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activeTab === "-metacritic"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.orderingFilter("-metacritic")}
            >
              высокой оценке
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activeTab === "metacritic"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.orderingFilter("metacritic")}
            >
              низкой оценке
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activeTab === "-added"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.orderingFilter("-added")}
            >
              по популярности
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activeTab === "name" ? "filters__list-button--active" : ""
              }`}
              onClick={() => props.orderingFilter("name")}
            >
              по алфавиту
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activeTab === "-released"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.orderingFilter("-released")}
            >
              будущим релизам
            </button>
          </li>
        </ul>
      </div>
      <div className="filters__block">
        <p className="filters__name">Платформы:</p>
        <ul className="filters__list">
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activePlatformTab.length > 8
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.platformFilter(props.platformArray)}
            >
              Все
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activePlatformTab === "4"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.platformFilter("4")}
            >
              PC
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activePlatformTab === "1"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.platformFilter("1")}
            >
              Xbox One/Series
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activePlatformTab === "18"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.platformFilter("18")}
            >
              PlayStation 4
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activePlatformTab === "7"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.platformFilter("7")}
            >
              Nintendo
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activePlatformTab === "3"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.platformFilter("3")}
            >
              iOS
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activePlatformTab === "21"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.platformFilter("21")}
            >
              Androind
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activePlatformTab === "16"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.platformFilter("16")}
            >
              PlayStation 3
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activePlatformTab === "14"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.platformFilter("14")}
            >
              Xbox 360
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activePlatformTab === "5"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.platformFilter("5")}
            >
              Mac OS
            </button>
          </li>
          <li className="filters__list-item">
            <button
              className={`filters__list-button ${
                props.activePlatformTab === "6"
                  ? "filters__list-button--active"
                  : ""
              }`}
              onClick={() => props.platformFilter("6")}
            >
              Linux
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
