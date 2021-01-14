const Navbar = (props) => {
  return (
    <header className="navbar">
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
