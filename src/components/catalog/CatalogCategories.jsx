import { useCallback } from "react";
import { NavLink } from "react-router-dom";

export const CatalogCategories = ({ isCatalogPage, names }) => {

    const categories = useCallback(() => {
        return names.map((category, index) => {
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
        })
    }, [names, isCatalogPage])
    
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
            {categories()}
        </ul>
    );
};
