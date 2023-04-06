import { NavLink } from "react-router-dom";

export const MenuNavigation = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/ra16-diploma">
                    Главная
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/ra16-diploma/catalog/">
                    Каталог
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/ra16-diploma/about">
                    О магазине
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/ra16-diploma/contacts">
                    Контакты
                </NavLink>
            </li>
        </ul>
    );
};
