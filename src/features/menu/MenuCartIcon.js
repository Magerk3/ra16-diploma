import { Link } from "react-router-dom";
import { selectNumberOfOreders } from "../cart/cartSlice";
import { useSelector } from "react-redux";

export const MenuCartIcon = () => {
    const numberOfOreders = useSelector(selectNumberOfOreders);

    return (
        <Link to="/cart">
            <div className="header-controls-pic header-controls-cart">
                {numberOfOreders ? (
                    <div className="header-controls-cart-full">
                        {numberOfOreders}
                    </div>
                ) : (
                    <></>
                )}

                <div className="header-controls-cart-menu"></div>
            </div>
        </Link>
    );
};
