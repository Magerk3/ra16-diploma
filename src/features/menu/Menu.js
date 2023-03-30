import { NavLink } from "react-router-dom";
import logo from "../../img/header-logo.png";
import { search } from "../catalog/catalogSlice";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "../search/SearchBar";
import { incrementClicks } from "../search/searchBarSlice";
import {
    selectSearchString,
    select_times_clicked_on_lens,
} from "../search/searchBarSlice";

export const Menu = () => {
    const dispatch = useDispatch();
    const searchParams = useSelector(selectSearchString);
    const clicks = useSelector(select_times_clicked_on_lens);

    const handleClick = () => {
        dispatch(incrementClicks());
        if (clicks > 1) {
            dispatch(search(searchParams));
        }
    };

    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="Bosa Noga"></img>
                        </a>
                        <div
                            className="collapase navbar-collapse"
                            id="navbarMain"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/catalog/"
                                    >
                                        Каталог
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        О магазине
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/contacts"
                                    >
                                        Контакты
                                    </NavLink>
                                </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <div
                                        data-id="search-expander"
                                        className="header-controls-pic header-controls-search"
                                        onClick={handleClick}
                                    ></div>

                                    <div className="header-controls-pic header-controls-cart">
                                        <div className="header-controls-cart-full">
                                            1
                                        </div>
                                        <div className="header-controls-cart-menu"></div>
                                    </div>
                                </div>
                                <SearchBar isInMenu={true} />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
