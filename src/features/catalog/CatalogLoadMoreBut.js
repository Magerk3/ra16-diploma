import { useDispatch } from "react-redux";
import { fetchMore } from "./catalogSlice";
import { useParams } from "react-router-dom";

export const CatalogLoadMoreBut = () => {
    let { catId } = useParams();
    const dispatch = useDispatch();
    return (
        <div className="text-center">
            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch(fetchMore(catId))}
            >
                Загрузить ещё
            </button>
        </div>
    );
};
