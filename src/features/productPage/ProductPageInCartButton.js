import { useDispatch, useSelector } from "react-redux";
import { selectChosenSize, selectCount, selectPoductData, emptyState} from "./productPageSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";

export const ProductPageInCartButton = () => {
    const selectedSize = useSelector(selectChosenSize);
    const productData = useSelector(selectPoductData);
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const handleAddToCartClick = () => {
        dispatch(
            addToCart({
                ...productData,
                count: count,
                chosenSize: selectedSize,
            })
        );
        dispatch(emptyState());
    };

    
    return (
        <>
            {selectedSize ? (
                <Link to="/cart">
                    <button
                        onClick={handleAddToCartClick}
                        className="btn btn-danger btn-block btn-lg"
                    >
                        В корзину
                    </button>
                </Link>
            ) : (
                <></>
            )}
        </>
    );
};
