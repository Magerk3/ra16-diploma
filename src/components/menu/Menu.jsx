import logo from "../../img/header-logo.png";
import { SearchBar } from "../searchBar/SearchBar";
import { MenuSearchExpander } from "./MenuSearchExpander";
import { MenuCartIcon } from "./MenuCartIcon";
import { MenuNavigation } from "./MenuNavigation";
import { useDispatch, useSelector } from "react-redux";
import { selectNumberOfOreders } from "../../app/store/cartSlice";
import {
    incrementClicks,
    selectSearchString,
    select_times_clicked_on_lens,
} from "../../app/store/searchBarSlice";
import { search } from "../../app/store/catalogSlice";
import { Link, useNavigate } from "react-router-dom";

export const Menu = () => {
    const numberOfOreders = useSelector(selectNumberOfOreders);
    const clicks = useSelector(select_times_clicked_on_lens);
    const searchParams = useSelector(selectSearchString);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickOnExpander = () => {
        dispatch(incrementClicks());
        if (clicks > 0) {
            dispatch(search(searchParams));
            navigate("/catalog");
        }
    };

    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Bosa Noga"></img>
                        </Link>
                        <div
                            className="collapase navbar-collapse"
                            id="navbarMain"
                        >
                            <MenuNavigation />
                            <div>
                                <div className="header-controls-pics">
                                    <MenuSearchExpander
                                        handleClick={handleClickOnExpander}
                                    />
                                    <MenuCartIcon
                                        numberOfOrders={numberOfOreders}
                                    />
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
