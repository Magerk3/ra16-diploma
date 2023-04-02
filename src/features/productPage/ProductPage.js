import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    selectPoductData,
    selectStatus,
    loadProductData,
    emptyState,
} from "./productPageSlice";

import { ProductPageTable } from "./ProductPageTable";
import { ProductPageSizes } from "./ProductPageSizes";
import { ProductPageInCartButton } from "./ProductPageInCartButton";
import { Loader } from "../../components/Loader";
import { error, loaded, loading } from "../../statuses";

export const ProductPage = () => {
    const productData = useSelector(selectPoductData);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();
    const { prdId } = useParams();

    useEffect(() => {
        dispatch(loadProductData(prdId));
    }, [dispatch, prdId]);
    useEffect(() => {
        return () => {
            dispatch(emptyState());
        };
    }, [dispatch]);

    if (status === loading) return <Loader />;
    else if (status === error)
        return <h1>Some Error in loading product data</h1>;
    else if (status === loaded)
        return (
            <section className="catalog-item">
                <h2 className="text-center">{productData.title}</h2>
                <div className="row">
                    <div className="col-5">
                        <img
                            src={
                                productData.images ? productData.images[0] : ""
                            }
                            className="img-fluid"
                            alt=""
                        ></img>
                    </div>
                    <div className="col-7">
                        <ProductPageTable />
                        <ProductPageSizes />
                        <ProductPageInCartButton />
                    </div>
                </div>
            </section>
        );
};
