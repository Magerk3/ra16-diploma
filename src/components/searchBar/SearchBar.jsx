import { useDispatch, useSelector } from "react-redux";
import {
    updateSearchString,
    selectSearchString,
    resetClicks,
} from "../../app/store/searchBarSlice";
import { search } from "../../app/store/catalogSlice";
import { select_times_clicked_on_lens } from "../../app/store/searchBarSlice";
import { useCallback, useEffect, useState } from "react";


export const SearchBar = ({ isInMenu }) => {
    const dispatch = useDispatch();
    const searchParams = useSelector(selectSearchString);
    const clicks = useSelector(select_times_clicked_on_lens);
    const [classNames, setCLassNames] = useState("");

    const getClassNames = useCallback(
        (bool) => {
            if (bool) {
                setCLassNames(
                    "header-controls-search-form form-inline invisible"
                );
                if (clicks > 0)
                    setCLassNames("header-controls-search-form form-inline");
            } else if (clicks > 1) {
                setCLassNames("header-controls-search-form form-inline");
                dispatch(resetClicks());
            } else {
                setCLassNames("catalog-search-form form-inline");
            }
        },
        [clicks, dispatch]
    );

    useEffect(() => {
        getClassNames(isInMenu);
    }, [clicks, isInMenu, getClassNames]);

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
