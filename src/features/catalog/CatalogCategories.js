import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategories } from "./catalogSlice";

export const CatalogCategories = ({ isCatalogPage }) => {
    const categories = useSelector(selectCategories);

    return (
        <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item" key="all">
                <NavLink
                    className="nav-link"
                    to={isCatalogPage ? "/catalog/" : "/"}
                >
                    Все
                </NavLink>
            </li>
            {categories.map((category, index) => {
                return (
                    <li className="nav-item" key={index}>
                        <NavLink
                            className="nav-link"
                            to={
                                isCatalogPage
                                    ? `/catalog/${category.id}`
                                    : `/${category.id}`
                            }
                        >
                            {category.title}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};
