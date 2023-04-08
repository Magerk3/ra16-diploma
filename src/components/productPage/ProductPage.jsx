import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    selectPoductData,
    selectStatus,
    loadProductData,
    emptyState,
    selectChosenSize,
    selectCount,
    selectSize,
    decreaseQuantity,
    increaseQuantity,
} from "../../app/store/productPageSlice";

import { ProductPageTable } from "./ProductPageTable";
import { ProductPageSizes } from "./ProductPageSizes";
import { ProductPageInCartButton } from "./ProductPageInCartButton";
import { Loader } from "../../UI/Loader";
import { error, loaded, loading } from "../../statuses";
import { addToCart } from "../../app/store/cartSlice";
import { ProductPageCountController } from "./ProductPageCountController";

export const ProductPage = () => {
    const productData = useSelector(selectPoductData);
    const status = useSelector(selectStatus);
    const count = useSelector(selectCount);
    const selectedSize = useSelector(selectChosenSize);
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

    const handleAddToCartClick = () => {
        dispatch(
            addToCart({
                ...productData,
                count: count,
                chosenSize: selectedSize,
            })
        );
        dispatch(emptyState());
    };

    const handleSizeSelect = (sizeIndex) => {
        dispatch(selectSize(sizeIndex));
    };

    const handleDecrease = () => {
        dispatch(decreaseQuantity());
    };

    const handleIncrease = () => {
        dispatch(increaseQuantity());
    };

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
                        <ProductPageTable productData={productData} />
                        <ProductPageSizes
                            handleSelect={handleSizeSelect}
                            isSizeSelected={selectedSize ? true : false}
                            productData={productData}
                            selectedSize={selectedSize}
                        />
                        {selectedSize ? (
                            <ProductPageCountController
                                increase={handleIncrease}
                                decrease={handleDecrease}
                                count={count}
                            />
                        ) : (
                            <></>
                        )}

                        <ProductPageInCartButton
                            handleClick={handleAddToCartClick}
                            isSizeSelected={selectedSize ? true : false}
                        />
                    </div>
                </div>
            </section>
        );
};
