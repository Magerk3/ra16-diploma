import { useDispatch, useSelector } from "react-redux"
import { selectCartItems, removeFromCart } from "./cartSlice"
import { Link } from "react-router-dom";

export const CartTable = () => {

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

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

    return (
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
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                        <Link to={`/products/${item.id}`}>
                            {item.title}
                        </Link>
                    </td>
                    <td>{item.chosenSize ? item.chosenSize.size : ''}</td>
                    <td>{item.count}</td>
                    <td>{item.price} руб.</td>
                    <td>{item.price * item.count} руб.</td>
                    <td>
                        <button onClick={() => handleDelete(item.id)} className="btn btn-outline-danger btn-sm">
                            Удалить
                        </button>
                    </td>
                </tr>
            ))}

            <tr>
                <td colSpan="5" className="text-right">
                    Общая стоимость
                </td>
                <td>{getTotalCost()} руб.</td>
            </tr>
        </tbody>
    </table>
    )
}