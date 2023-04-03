import { useCallback } from "react";
import { Link } from "react-router-dom";

export const CatalogProducts = ({products}) => {

    const catalogProducts = useCallback(() => {
        return products.map((product, index) => {
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
        })
    }, [products])
    
    return (
        <div className="row">
            {catalogProducts()}
        </div>
    );
};
