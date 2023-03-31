import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchData, selectBestsellers, selectStatus } from "./bestsellersSlice";

export const Bestsellers = () => {
    const bestsellers = useSelector(selectBestsellers);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            {status === 'loading' ? (
                <div className="preloader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            ) : status === 'loaded' ? (
                <div className="row">
                    {bestsellers.map((bestseller) => {
                        return (
                            <div className="col-4">
                                <div className="card">
                                    <img
                                        className="card-img-top img-fluid"
                                        src={bestseller.images[0]}
                                        alt={bestseller.title}
                                    ></img>
                                    <div className="card-body">
                                        <p className="card-text">{bestseller.title}</p>
                                        <p className="card-text">{bestseller.price} руб</p>
                                        <NavLink to={`products/${bestseller.id}`} className="btn btn-outline-primary">Заказать</NavLink>
                                    </div> 
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : <></>}
        </section>
    );
};
