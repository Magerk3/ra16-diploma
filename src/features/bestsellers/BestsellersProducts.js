import { useSelector } from "react-redux";
import { selectBestsellers } from "./bestsellersSlice";
import { Link } from "react-router-dom";

export const BestsellersProducts = () => {
    const bestsellers = useSelector(selectBestsellers);
    return (
        <div className="row">
        {bestsellers.map((bestseller, index) => {
            return (
                <div className="col-4" key={index}>
                    <div className="card">
                        <img
                            className="card-img-top img-fluid"
                            src={bestseller.images[0]}
                            alt={bestseller.title}
                        ></img>
                        <div className="card-body">
                            <p className="card-text">{bestseller.title}</p>
                            <p className="card-text">{bestseller.price} руб</p>
                            <Link to={`products/${bestseller.id}`} className="btn btn-outline-primary">Заказать</Link>
                        </div> 
                    </div>
                </div>
            );
        })}
    </div>
    )
}