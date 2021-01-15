import { useSelector } from "react-redux";

const Navbar = (props) => {
  const popUpHandler = useSelector((state) => state.game.popUpHandler);
  return (
    <header className={`navbar ${popUpHandler ? "navbar--active" : ""}`}>
      <div className="navbar__container">
        <button
          className={`navbar__menu ${
            props.menuHandler ? "navbar__menu--active" : ""
          }`}
          onClick={props.navbarToggle}
        >
          <span></span>
        </button>
        {/* <img
          src={search}
          alt=""
          className="navbar__search"
          onClick={props.searchToggle}
        /> */}
        {props.searchHandler ? (
          <button className="navbar__search" onClick={props.searchToggle}>
            Закрыть
          </button>
        ) : (
          <button className="navbar__search" onClick={props.searchToggle}>
            Найти игру
          </button>
        )}
      </div>
    </header>
  );
};
export default Navbar;
