import { useSelector } from "react-redux";
import { selectData } from "./catalogSlice";
import { Link } from "react-router-dom";

export const CatalogProducts = () => {
    const products = useSelector(selectData);

    return (
        <div className="row">
            {products.map((product, index) => {
                return (
                    <div className="col-4" key={index}>
                        <div className="card catalog-item-card">
                            <img
                                className="card-img-top img-fluid"
                                src={product.images[0]}
                                alt={product.title}
                            ></img>
                            <div className="card-body">
                                <p className="card-text">{product.title}</p>
                                <p className="card-text">{product.price} руб</p>
                                <Link
                                    to={`/products/${product.id}`}
                                    className="btn btn-outline-primary"
                                >
                                    Заказать
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
