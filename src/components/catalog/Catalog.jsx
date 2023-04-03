import {
    selectStatus,
    fetchData,
    selectShowLoadButton,
    selectLoadMoreStatus,
    fetchCategories,
    selectCategoriesStatus,
    selectCategories,
    selectData,
    fetchMore
} from "../../app/store/catalogSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchBar } from "../searchBar/SearchBar";
import { Loader } from "../../staticPages/Loader";
import { CatalogCategories } from "./CatalogCategories";
import { CatalogProducts } from "./CatalogProducts";
import { CatalogLoadMoreBut } from "./CatalogLoadMoreBut";
import { error, loaded, loading } from "../../statuses";

export const Catalog = ({ isCatalogPage }) => {
    const status = useSelector(selectStatus);
    const loadMoreStatus = useSelector(selectLoadMoreStatus);
    const showLoadButton = useSelector(selectShowLoadButton);
    const categoriesStatus = useSelector(selectCategoriesStatus);
    const categories = useSelector(selectCategories);
    const products = useSelector(selectData);
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
                            <CatalogCategories
                                isCatalogPage={isCatalogPage}
                                names={categories}
                            />
                        ) : (
                            <></>
                        )}

                        {status === loading || categoriesStatus === loading ? (
                            <Loader />
                        ) : status === loaded && categoriesStatus === loaded ? (
                            <CatalogProducts products={products} />
                        ) : status === error ? (
                            <h1>Error loading the resourse</h1>
                        ) : (
                            <></>
                        )}
                        {showLoadButton ? (
                            status === loading ||
                            categoriesStatus === loading ? (
                                <></>
                            ) : loadMoreStatus === loading ? (
                                <Loader />
                            ) : (
                                <CatalogLoadMoreBut fetchMore={fetchMore} catId={catId} />
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
