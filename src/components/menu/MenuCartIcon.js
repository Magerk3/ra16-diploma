import { Link } from "react-router-dom";

export const MenuCartIcon = ({ numberOfOrders }) => {
    return (
        <Link to="/cart">
            <div className="header-controls-pic header-controls-cart">
                {numberOfOrders ? (
                    <div className="header-controls-cart-full">
                        {numberOfOrders}
                    </div>
                ) : (
                    <></>
                )}
                <div className="header-controls-cart-menu"></div>
            </div>
        </Link>
    );
};
