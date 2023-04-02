import { useDispatch, useSelector } from "react-redux";
import {
    incrementClicks,
    selectSearchString,
    select_times_clicked_on_lens,
} from "../search/searchBarSlice";
import { useNavigate } from "react-router-dom";
import { search } from "../catalog/catalogSlice";

export const MenuSearchExpander = () => {
    const dispatch = useDispatch();
    const clicks = useSelector(select_times_clicked_on_lens);
    const searchParams = useSelector(selectSearchString);
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(incrementClicks());
        if (clicks > 0) {
            dispatch(search(searchParams));
            navigate("/catalog");
        }
    };
    return (
        <div
            data-id="search-expander"
            className="header-controls-pic header-controls-search"
            onClick={handleClick}
        ></div>
    );
};
