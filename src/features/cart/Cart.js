import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, selectCartItems } from "./cartSlice";
import { useEffect } from "react";
import { Ordering } from "../ordering/Ordering";

export const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const getTotalCost = () => {
        let totalCost = 0;
        for(let item of cartItems){
            totalCost += item.quantity * item.price;
        }
        return totalCost;
    }
    const handleDelete = (id) => {
        dispatch(removeFromCart(id))
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
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Название</th>
                                    <th scope="col">Размер</th>
                                    <th scope="col">Кол-во</th>
                                    <th scope="col">Стоимость</th>
                                    <th scope="col">Итого</th>
                                    <th scope="col">Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Link to={`/products/${item.id}`}>
                                                {item.title}
                                            </Link>
                                        </td>
                                        <td>{item.chosenSize.size}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price} руб.</td>
                                        <td>{item.price * item.quantity} руб.</td>
                                        <td>
                                            <button onClick={() => handleDelete(item.id)} className="btn btn-outline-danger btn-sm">
                                                Удалить
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                <tr>
                                    <td colspan="5" className="text-right">
                                        Общая стоимость
                                    </td>
                                    <td>{getTotalCost()} руб.</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <Ordering />
                </div>
            </div>
        </div>
    );
};
