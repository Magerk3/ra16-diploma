import {  useSelector } from "react-redux";
import { selectCartItems } from "./cartSlice";
import { useEffect } from "react";
import { Ordering } from "../ordering/Ordering";
import { CartTable } from "./CartTable";

export const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    
    

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        //console.log(JSON.parse(localStorage.getItem('cartItems')));
    }, [cartItems])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <section className="cart">
                        <h2 className="text-center">Корзина</h2>
                        <CartTable />
                    </section>
                    <Ordering />
                </div>
            </div>
        </div>
    );
};
