import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className={`sidebar ${props.menuIsOpen ? "sidebar--active" : ""}`}>
      <nav className="sidebar__nav">
        <p className="sidebar__list-name">Подборки</p>
        <ul className="sidebar__list" onClick={props.navbarToggle}>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/"
              exact
            >
              Популярные
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/new"
            >
              Новые
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/best-of-year"
            >
              Лучшие за год
            </NavLink>
          </li>
        </ul>
        <p className="sidebar__list-name">Жанры</p>
        <ul className="sidebar__list" onClick={props.navbarToggle}>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/genre-shooter"
            >
              Шутер
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/genre-rpg"
            >
              Ролевые
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/genre-action"
            >
              Экшн
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/genre-strategy"
            >
              Стратегии
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/genre-adventure"
            >
              Приключения
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/genre-puzzle"
            >
              Головоломки
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/genre-racing"
            >
              Гонки
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/genre-platformer"
            >
              Платформер
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink
              activeClassName="sidebar__link--active"
              className="sidebar__link"
              to="/genre-indie"
            >
              Инди
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
