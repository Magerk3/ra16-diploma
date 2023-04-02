import logo from "../../img/header-logo.png";

import { SearchBar } from "../search/SearchBar";

import { MenuSearchExpander } from "./MenuSearchExpander";
import { MenuCartIcon } from "./MenuCartIcon";
import { MenuNavigation } from "./MenuNavigation";

export const Menu = () => {
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
                            <MenuNavigation />
                            <div>
                                <div className="header-controls-pics">
                                    <MenuSearchExpander />
                                    <MenuCartIcon />
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
