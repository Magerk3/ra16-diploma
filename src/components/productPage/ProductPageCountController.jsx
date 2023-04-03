export const ProductPageCountController = ({ increase, decrease, count }) => {
    return (
        <p className="text-center" >
            Количество:{" "}
            <span className="btn-group btn-group-sm pl-2">
                <button className="btn btn-secondary" onClick={decrease}>
                    -
                </button>
                <span className="btn btn-outline-primary">{count}</span>
                <button className="btn btn-secondary" onClick={increase}>
                    +
                </button>
            </span>
        </p>
    );
};
