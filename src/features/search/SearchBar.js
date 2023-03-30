import { useDispatch, useSelector } from "react-redux";
import { updateSearchString, selectSearchString } from "./searchBarSlice";
import { search } from "../catalog/catalogSlice";
import { select_times_clicked_on_lens } from "./searchBarSlice";
import { useEffect, useState } from "react";

export const SearchBar = ({ isInMenu }) => {
    const dispatch = useDispatch();
    const searchParams = useSelector(selectSearchString);
    const clicks = useSelector(select_times_clicked_on_lens);
    const [classNames, setCLassNames] = useState("");

    const getClassNames = (bool) => {
        if (bool) {
            setCLassNames("header-controls-search-form form-inline invisible");
            if (clicks)
                setCLassNames("header-controls-search-form form-inline");
        } else {
            setCLassNames("catalog-search-form form-inline");
        }
    };

    useEffect(() => {
        getClassNames(isInMenu);
    }, [clicks, isInMenu]);

    const handleChange = (e) => {
        dispatch(updateSearchString(e.target.value));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(search(searchParams));
    };

    return (
        <div>
            <form
                data-id="search-form"
                className={classNames}
                onSubmit={handleSubmit}
            >
                <input
                    className="form-control"
                    placeholder="Поиск"
                    onChange={handleChange}
                    value={searchParams}
                ></input>
            </form>
        </div>
    );
};
