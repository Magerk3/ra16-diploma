import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, selectBestsellers, selectStatus } from "../../app/store/bestsellersSlice";
import { Loader } from "../../pages/Loader";
import { BestsellersProducts } from "./BestsellersProducts";
import { loaded, loading } from "../../statuses";

export const Bestsellers = () => {
    const status = useSelector(selectStatus);
    const bestsellers = useSelector(selectBestsellers)
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
               <BestsellersProducts data={bestsellers} />
            ) : <></>}
        </section>
    );
};
