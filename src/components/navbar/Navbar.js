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
      </div>
    </header>
  );
};
export default Navbar;
