import { useCallback } from "react";
import { Link } from "react-router-dom";

export const CartTableBody = ({ cartItems, handleDelete, getTotalCost }) => {
    const tableData = useCallback(() => {
        return cartItems.map((item, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>
                    <Link to={`/products/${item.id}`}>{item.title}</Link>
                </td>
                <td>{item.chosenSize ? item.chosenSize.size : ""}</td>
                <td>{item.count}</td>
                <td>{item.price} руб.</td>
                <td>{item.price * item.count} руб.</td>
                <td>
                    <button
                        onClick={() => handleDelete(item.id)}
                        className="btn btn-outline-danger btn-sm"
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        ));
    }, [cartItems, handleDelete]);

    return (
        <tbody>
            {tableData()}
            <tr>
                <td colSpan="5" className="text-right">
                    Общая стоимость
                </td>
                <td>{getTotalCost()} руб.</td>
            </tr>
        </tbody>
    );
};
