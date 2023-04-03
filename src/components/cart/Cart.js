import {  useDispatch, useSelector } from "react-redux";
import { selectCartItems, removeFromCart } from "../../app/store/cartSlice";
import { useEffect } from "react";
import { Ordering } from "../ordering/Ordering";
import { CartTable } from "./CartTable";
import { CartTableBody } from "./CartTableBody";

export const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleDelete = (id) => {
        dispatch(removeFromCart(id))
    } 

    const getTotalCost = () => {
        let totalCost = 0;
        for(let item of cartItems){
            totalCost += item.count * item.price;
        }
        return totalCost;
    }
    
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
                        <CartTable>
                            <CartTableBody cartItems={cartItems} handleDelete={handleDelete} getTotalCost={getTotalCost}/>
                        </CartTable>
                    </section>
                    <Ordering />
                </div>
            </div>
        </div>
    );
};
