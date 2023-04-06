import { Link } from "react-router-dom";

export const ProductPageInCartButton = ({ handleClick, isSizeSelected }) => {
    return (
        <>
            {isSizeSelected ? (
                <Link to="/ra16-diploma/cart">
                    <button
                        onClick={handleClick}
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
