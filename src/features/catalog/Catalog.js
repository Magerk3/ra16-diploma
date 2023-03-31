import {
    selectStatus,
    selectData,
    fetchData,
    selectCategories,
    selectShowLoadButton,
    selectLoadMoreStatus,
    fetchCategories,
    fetchMore,
} from "./catalogSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

import { SearchBar } from "../search/SearchBar";

export const Catalog = ({ isCatalogPage }) => {
    const status = useSelector(selectStatus);
    const loadMoreStatus = useSelector(selectLoadMoreStatus);
    const products = useSelector(selectData);
    const categories = useSelector(selectCategories);
    const showLoadButton = useSelector(selectShowLoadButton);
    const dispatch = useDispatch();

    let { catId } = useParams();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchData(catId));
        
    }, [catId]);

    

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>
                        {isCatalogPage ? (
                            <SearchBar />
                        ) : (
                            <></>
                        )}

                        {status === "loading" ? (
                            <div className="preloader">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        ) : status === "loaded" ? (
                            <>
                                <ul className="catalog-categories nav justify-content-center">
                                    <li className="nav-item" key="all">
                                        <NavLink
                                            className="nav-link"
                                            to={
                                                isCatalogPage
                                                    ? "/catalog/"
                                                    : "/"
                                            }
                                        >
                                            Все
                                        </NavLink>
                                    </li>
                                    {categories.map((category) => {
                                        return (
                                            <li
                                                className="nav-item"
                                                key={category.id}
                                            >
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
                                <div className="row">
                                    {products.map((product) => {
                                        return (
                                            <div className="col-4">
                                                <div className="card catalog-item-card">
                                                    <img
                                                        className="card-img-top img-fluid"
                                                        src={product.images[0]}
                                                        alt={product.title}
                                                    ></img>
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                            {product.title}
                                                        </p>
                                                        <p className="card-text">
                                                            {product.price} руб
                                                        </p>
                                                        <NavLink
                                                            to={`/products/${product.id}`}
                                                            className="btn btn-outline-primary"
                                                        >
                                                            Заказать
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                        {showLoadButton ? (
                            loadMoreStatus === "loading" ? (
                                <div className="preloader">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() =>
                                            dispatch(fetchMore(catId))
                                        }
                                    >
                                        Загрузить ещё
                                    </button>
                                </div>
                            )
                        ) : (
                            <></>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};
