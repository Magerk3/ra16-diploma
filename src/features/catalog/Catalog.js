import {
    selectStatus,
    fetchData,
    selectShowLoadButton,
    selectLoadMoreStatus,
    fetchCategories,
    selectCategoriesStatus,
} from "./catalogSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { SearchBar } from "../search/SearchBar";
import { Loader } from "../../components/Loader";
import { CatalogCategories } from "./CatalogCategories";
import { CatalogProducts } from "./CatalogProducts";
import { CatalogLoadMoreBut } from "./CatalogLoadMoreBut";
import { error, loaded, loading } from "../../statuses";

export const Catalog = ({ isCatalogPage }) => {
    const status = useSelector(selectStatus);
    const loadMoreStatus = useSelector(selectLoadMoreStatus);
    const showLoadButton = useSelector(selectShowLoadButton);
    const categoriesStatus = useSelector(selectCategoriesStatus);
    const dispatch = useDispatch();

    let { catId } = useParams();

    useEffect(() => {
        dispatch(fetchData(catId));
    }, [dispatch, catId]);
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>
                        {isCatalogPage ? <SearchBar /> : <></>}
                        {categoriesStatus === loaded ? (
                            <CatalogCategories isCatalogPage={isCatalogPage} />
                        ) : (
                            <></>
                        )}

                        {status === loading || categoriesStatus === loading ? (
                            <Loader />
                        ) : status === loaded && categoriesStatus === loaded ? (
                            <CatalogProducts />
                        ) : status === error ? <h1>Error loading the resourse</h1> : (
                            <></>
                        )}
                        {showLoadButton ? (
                            status === loading ||
                            categoriesStatus === loading ? (
                                <></>
                            ) : loadMoreStatus === loading ? (
                                <Loader />
                            ) : (
                                <CatalogLoadMoreBut />
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
