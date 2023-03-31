import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems } from "./cartSlice";
import { useEffect } from "react";

export const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const getTotalCost = () => {
        let totalCost = 0;
        for(let item of cartItems){
            totalCost += item.quantity * item.price;
        }
        return totalCost;
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(JSON.parse(localStorage.getItem('cartItems')));
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
                                            <button className="btn btn-outline-danger btn-sm">
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
                    <section className="order">
                        <h2 className="text-center">Оформить заказ</h2>
                        <div
                            className="card"
                            style={{ maxWidth: "30rem", margin: "0 auto" }}
                        >
                            <form className="card-body">
                                <div className="form-group">
                                    <label for="phone">Телефон</label>
                                    <input
                                        className="form-control"
                                        id="phone"
                                        placeholder="Ваш телефон"
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label for="address">Адрес доставки</label>
                                    <input
                                        className="form-control"
                                        id="address"
                                        placeholder="Адрес доставки"
                                    ></input>
                                </div>
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="agreement"
                                    ></input>
                                    <label
                                        className="form-check-label"
                                        for="agreement"
                                    >
                                        Согласен с правилами доставки
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-outline-secondary"
                                >
                                    Оформить
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
