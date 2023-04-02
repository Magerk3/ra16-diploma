import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, selectStatus } from "./bestsellersSlice";
import { Loader } from "../../components/Loader";
import { BestsellersProducts } from "./BestsellersProducts";
import { loaded, loading } from "../../statuses";

export const Bestsellers = () => {
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            {status === loading ? (
                <Loader />
            ) : status === loaded ? (
               <BestsellersProducts />
            ) : <></>}
        </section>
    );
};
